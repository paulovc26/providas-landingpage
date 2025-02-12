import { FaFacebook, FaFacebookF, FaGoogle } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="flex container h-screen">
      <div className="flex flex-1 justify-center items-center">
        <div className="box-border p-10 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <input
            type="text"
            placeholder="Usuário"
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
          />
          <button className="bg-blue-500 text-white rounded-md py-2 px-4">
            Login
          </button>
          <p className="mt-4">
            Não tem uma conta?{" "}
            <a href="#" className="text-blue-500">
              Registrar
            </a>
          </p>
          <p className="mt-4">
            Esqueceu a senha?{" "}
            <a href="#" className="text-blue-500">
              Redefinir a senha
            </a>
          </p>
          <p className="mt-4">Ou faça login com:</p>
          <div className="flex justify-between mt-4">
            <button className="btn bg-blue-500 text-white rounded-md py-2 px-6">
              <FaFacebookF /> Facebook
            </button>
            <button className="btn bg-red-500 text-white rounded-md py-2 px-6">
              <FaGoogle /> Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
