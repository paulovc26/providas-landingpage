import React from 'react';

type Funcionario = {
  id: number;
  nome: string;
  cargo: string;
  salario: number;
};

type Orçamento = {
  ano: number;
  valorPrevisto: number;
  valorExecutado: number;
};

const dadosFuncionarios: Funcionario[] = [
  { id: 1, nome: 'João Silva', cargo: 'Analista', salario: 4500 },
  { id: 2, nome: 'Maria Oliveira', cargo: 'Gerente', salario: 7000 },
  { id: 3, nome: 'Carlos Souza', cargo: 'Desenvolvedor', salario: 5500 },
];

const dadosOrcamento: Orçamento[] = [
  { ano: 2023, valorPrevisto: 1000000, valorExecutado: 850000 },
  { ano: 2024, valorPrevisto: 1200000, valorExecutado: 950000 },
];

export default function TabelaTransparencia() {
  return (
    <div>
      <h2>Transparência de Pagamentos de Funcionários</h2>
      <table border={1} style={{ width: '100%', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Salário (R$)</th>
          </tr>
        </thead>
        <tbody>
          {dadosFuncionarios.map((funcionario) => (
            <tr key={funcionario.id}>
              <td>{funcionario.id}</td>
              <td>{funcionario.nome}</td>
              <td>{funcionario.cargo}</td>
              <td>{funcionario.salario.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Transparência de Orçamento</h2>
      <table border={1} style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Ano</th>
            <th>Valor Previsto (R$)</th>
            <th>Valor Executado (R$)</th>
          </tr>
        </thead>
        <tbody>
          {dadosOrcamento.map((orcamento) => (
            <tr key={orcamento.ano}>
              <td>{orcamento.ano}</td>
              <td>{orcamento.valorPrevisto.toFixed(2)}</td>
              <td>{orcamento.valorExecutado.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

