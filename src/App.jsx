import { useState } from 'react'
import './App.css'

function App() {
  const [valor, setValor] = useState('')
  const [origem, setOrigem] = useState('BRL')
  const [destino, setDestino] = useState('USD')

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

      <button onClick={() => alert(
        `Converter ${valor} ${origem} para ${destino}`
      )}>
        Converter
      </button>
    </main>
  )
}

export default App