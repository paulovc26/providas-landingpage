import React from "react";

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
  { id: 1, nome: "João Silva", cargo: "Educador", salario: 4500 },
  { id: 2, nome: "Maria Oliveira", cargo: "Diretor", salario: 7000 },
  { id: 3, nome: "Carlos Souza", cargo: "Coordenador", salario: 5500 },
];

const dadosOrcamento: Orçamento[] = [
  { ano: 2023, valorPrevisto: 1000000, valorExecutado: 850000 },
  { ano: 2024, valorPrevisto: 1200000, valorExecutado: 950000 },
];

export default function TabelaTransparencia() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-3xl font-semibold text-gray-800">
        Transparência de Pagamentos de Funcionários
      </h2>
      <table className="min-w-full table-auto border-separate border-spacing-0.5">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              ID
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Nome
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Cargo
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Salário (R$)
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {dadosFuncionarios.map((funcionario) => (
            <tr key={funcionario.id} className="border-b border-gray-200">
              <td className="px-4 py-2 text-sm text-gray-800">
                {funcionario.id}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {funcionario.nome}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {funcionario.cargo}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {funcionario.salario.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-3xl font-semibold text-gray-800">
        Transparência de Orçamento
      </h2>
      <table className="min-w-full table-auto border-separate border-spacing-0.5">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Ano
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Valor Previsto (R$)
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Valor Executado (R$)
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {dadosOrcamento.map((orcamento) => (
            <tr key={orcamento.ano} className="border-b border-gray-200">
              <td className="px-4 py-2 text-sm text-gray-800">
                {orcamento.ano}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {orcamento.valorPrevisto.toFixed(2)}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {orcamento.valorExecutado.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
