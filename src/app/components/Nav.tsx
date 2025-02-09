export default function Nav() {
  return (
    <div>
      <nav className="flex justify-between items-center bg-sky-600 text-white text-xs sm:text-md p-2 px-10">
        <div className="flex-1">
          <p className="flex mr-auto font-bold">
            contato@contato.com | (61) XXXX-XXXX | (61) XXXXX-XXXX </p>
        </div>
        <div className="flex-1 text-right">
          <div className="ml-auto">Social here</div>
        </div>
      </nav>
      <nav className="flex justify items-center p-4 py-6 bg-sky-700 text-white">
        <a href="#" className="pl-12 text-xl font-bold">Instituto Pró-Vidas</a>
        <div className="flex mx-auto gap-4 font-bold text-xl">
          <a href="/" className="hover:text-base-300/30">Inicio</a>
          <a href="/" className="hover:text-base-300/30">Sobre</a>
          <a href="/" className="hover:text-base-300/30">Projetos</a>
          <a href="/" className="hover:text-base-300/30">Contato</a>
        </div>
      </nav>
    </div>
  );
}
