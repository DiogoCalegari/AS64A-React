import { createServer } from 'node:http'

const port = Number(process.env.API_PORT || 3001)
const allowedCurrencies = new Set(['BRL', 'USD', 'EUR'])

function respond(response, status, body) {
  response.writeHead(status, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(body))
}

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`)

  if (request.method !== 'GET' || requestUrl.pathname !== '/api/convert') {
    respond(response, 404, { error: 'Rota não encontrada.' })
    return
  }

  const amount = Number(requestUrl.searchParams.get('amount'))
  const from = requestUrl.searchParams.get('from')
  const to = requestUrl.searchParams.get('to')

  if (!Number.isFinite(amount) || amount <= 0) {
    respond(response, 400, { error: 'Informe um valor maior que zero.' })
    return
  }

  if (!allowedCurrencies.has(from) || !allowedCurrencies.has(to)) {
    respond(response, 400, { error: 'Moeda não suportada.' })
    return
  }

  if (from === to) {
    respond(response, 200, { convertedAmount: amount })
    return
  }

  const accessKey = process.env.FIXER_API_KEY
  if (!accessKey) {
    respond(response, 500, { error: 'Configure FIXER_API_KEY no arquivo .env.local.' })
    return
  }

  try {
    const symbols = [...new Set([from, to].filter((currency) => currency !== 'EUR'))]
    const fixerUrl = new URL('https://data.fixer.io/api/latest')
    fixerUrl.searchParams.set('access_key', accessKey)
    fixerUrl.searchParams.set('symbols', symbols.join(','))

    const fixerResponse = await fetch(fixerUrl)
    const fixerData = await fixerResponse.json()

    if (!fixerResponse.ok || !fixerData.success) {
      respond(response, 502, { error: 'A Fixer não conseguiu fornecer as cotações.' })
      return
    }

    const fromRate = from === 'EUR' ? 1 : fixerData.rates?.[from]
    const toRate = to === 'EUR' ? 1 : fixerData.rates?.[to]

    if (!fromRate || !toRate) {
      respond(response, 502, { error: 'A Fixer não retornou a cotação dessas moedas.' })
      return
    }

    respond(response, 200, { convertedAmount: amount * (toRate / fromRate) })
  } catch {
    respond(response, 502, { error: 'Não foi possível conectar à Fixer.' })
  }
})

server.listen(port, '127.0.0.1', () => {
  console.log(`API local disponível em http://127.0.0.1:${port}`)
})
