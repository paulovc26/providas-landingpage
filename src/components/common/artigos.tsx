import { dataAtual } from "@/services/useDate";

const pegaDataAtual = dataAtual();

type Artigo = {
  titulo: string;
  texto: string;
  dataCriacao: string;
};

const artigos: Artigo[] = [
  {
    titulo: "Primeiro Artigo",
    texto: "Este é o texto do primeiro artigo.",
    dataCriacao: pegaDataAtual,
  },
  {
    titulo: "Segundo Artigo",
    texto: "Este é o texto do segundo artigo.",
    dataCriacao: pegaDataAtual,
  },
  // Adicione mais artigos aqui
];

export default function Artigos() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      {artigos.map((artigo, index) => (
        <div key={index} className="mb-8 p-4 border rounded shadow">
          <h2 className="text-2xl font-bold mb-2">{artigo.titulo}</h2>
          <p className="text-gray-600 mb-2">{artigo.dataCriacao}</p>
          <p>{artigo.texto}</p>
        </div>
      ))}
    </div>
  );
}