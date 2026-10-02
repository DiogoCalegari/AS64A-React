
import { useState } from 'react'
import './App.css'

function App() {
  const [valor, setValor] = useState('')
  const [origem, setOrigem] = useState('BRL')
  const [destino, setDestino] = useState('USD')
  const [resultado, setResultado] = useState(null)
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function converter() {
    setErro('')
    setResultado(null)

    if (!valor || Number(valor) <= 0) {
      setErro('Digite um valor maior que zero.')
      return
    }

    if (origem === destino) {
      setResultado(Number(valor))
      return
    }

    setCarregando(true)

    try {
      const parametros = new URLSearchParams({
        base: origem,
        symbols: destino,
      })

      const resposta = await fetch(
        `https://api.frankfurter.dev/v1/latest?${parametros}`
      )

      const dados = await resposta.json()

      if (!resposta.ok) {
        throw new Error('Não foi possível consultar as taxas de câmbio.')
      }

      const taxa = dados.rates[destino]

      if (taxa === undefined) {
        throw new Error('Taxa de câmbio não encontrada.')
      }

      setResultado(Number(valor) * taxa)
    } catch (erro) {
      setErro(erro.message || 'Erro ao consultar a API.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main>
      <h1>Conversor de Moedas</h1>
      <p>Converta valores entre diferentes moedas.</p>

      <div>
        <label>Valor:</label>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Digite um valor"
        />
      </div>

      <div>
        <label>Moeda de origem:</label>
        <select
          value={origem}
          onChange={(e) => setOrigem(e.target.value)}
        >
          <option value="BRL">Real (BRL)</option>
          <option value="USD">Dólar (USD)</option>
          <option value="EUR">Euro (EUR)</option>
        </select>
      </div>

      <div>
        <label>Moeda de destino:</label>
        <select
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
        >
          <option value="BRL">Real (BRL)</option>
          <option value="USD">Dólar (USD)</option>
          <option value="EUR">Euro (EUR)</option>
        </select>
      </div>

      <button onClick={converter} disabled={carregando}>
        {carregando ? 'Convertendo...' : 'Converter'}
      </button>

      {erro && <p role="alert">{erro}</p>}

      {resultado !== null && (
        <p>
          Resultado: {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: destino,
          }).format(resultado)}
        </p>
      )}
    </main>
  )
}

export default App