import './App.css'
import { ArrowLeft, LayoutGrid } from 'lucide-react'

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip
} from 'chart.js'

import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

export default function App() {

  const jogos = [
    { nome: 'GTA V', tamanho: 90, cor: '#6C63FF' },
    { nome: 'Fortnite', tamanho: 35, cor: '#00C9A7' },
    { nome: 'Valorant', tamanho: 25, cor: '#FFB800' },
    { nome: 'Minecraft', tamanho: 10, cor: '#FF5C8A' }
  ]

  const total = jogos.reduce((acc, jogo) => acc + jogo.tamanho, 0)

  const data = {
    labels: jogos.map(j => j.nome),
    datasets: [
      {
        data: jogos.map(j => j.tamanho),
        backgroundColor: jogos.map(j => j.cor),
        borderWidth: 0,
        cutout: '70%'
      }
    ]
  }

  return (
    <main>
      <section className="container">

        <header className="header">
          <button className="icon-btn">
            <ArrowLeft size={20} />
          </button>

          <h1>Game Storage</h1>

          <button className="icon-btn">
            <LayoutGrid size={20} />
          </button>
        </header>

        <div className="grafico">
          <Doughnut data={data} />

          <div className="centro">
            <h2>{total}GB</h2>
            <span>usados</span>
          </div>
        </div>

        <div className="legenda">
          {jogos.map((jogo, i) => (
            <div className="item" key={i}>
              <div
                className="cor"
                style={{ background: jogo.cor }}
              />
              <div className="info">
                <strong>{jogo.nome}</strong>
                <span>{jogo.tamanho} GB</span>
              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  )
}