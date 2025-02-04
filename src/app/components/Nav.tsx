export default function Nav() {
  return (
    <header>
      <nav className="flex justify-between items-center p-4 bg-neutral text-white">
        <h1 className="ml-auto text-xl font-bold">Instituto</h1>
        <div className="flex mx-auto gap-4 font-bold">
          <a href="/">Inicio</a>
          <a href="/">Sobre</a>
          <a href="/">Projetos</a>
          <a href="/">Contato</a>
        </div>
      </nav>
    </header>
  );
}
