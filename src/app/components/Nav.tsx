export default function Nav() {
  return (
      <nav className="flex justify-between items-center p-4 py-6 bg-sky-700 text-white">
        <h1 className="ml-auto text-xl font-bold">Instituto Pró-Vidas</h1>
        <div className="flex mx-auto gap-4 font-bold">
          <a href="/">Inicio</a>
          <a href="/">Sobre</a>
          <a href="/">Projetos</a>
          <a href="/">Contato</a>
        </div>
      </nav>
  );
}
