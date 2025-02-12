'use client'

import { useEffect, useState } from 'react'
import Tabela from './Tabela' // Importe o componente Table

export default function TestTable() {
  const [headers, setHeaders] = useState<string[]>([])
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    // Simulando a obtenção de dados de uma API ou outra fonte
    const mockHeaders = ['ID', 'Nome', 'Idade', 'Cidade']
    const mockData = [
      { id: 1, nome: 'João', idade: 25, cidade: 'São Paulo' },
      { id: 2, nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro' },
      { id: 3, nome: 'Pedro', idade: 28, cidade: 'Belo Horizonte' },
    ]
    setHeaders(mockHeaders)
    setData(mockData)
}, [])
const personLength = data.length;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tabela de Exemplo</h1>
      <p>Total {personLength} </p>
      <Tabela headers={headers} data={data} />
    </div>
  )
}