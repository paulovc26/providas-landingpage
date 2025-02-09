import Link from "next/link";

export default function Contato() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content max-w-4xl flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl font-bold">Cadastre-se em nosso banco de beneficios</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link href="/cadastro" target="_blank">
          <button className="btn btn-primary">Preencher formulário</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
