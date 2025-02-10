"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

const Mapa = dynamic(() => import("./common/Mapa"), { ssr: false });

export default function Contato() {
  return (
    <section className="bg-zinc-200">
    <div className="grid grid-cols-1 mx-auto max-w-6xl sm:grid-cols-2 ">
      <div className="container px-10 py-6">
        <div className="border flex flex-col justify-center p-10 items-center font-bold border-black/20 bg-zinc-50 rounded-lg gap-4 h-auto">
          <h1 className="pt-6 text-xl  text-sky-700">Endereço</h1>
          <p>SHPS QD 205 CONJ A LOTE 2 POR DO SOL</p>
          <p>Ceilândia, Brasília - DF</p>
          <p>CEP: 72238-143</p>
          <Link
            href="https://maps.app.goo.gl/Ks4ZeP5bEWYtbvYN8"
            target="_blank"
          >
            <button className="btn btn-primary text-white">Ver no maps</button>
          </Link>
          <h1 className="pt-6 text-xl text-sky-700">Contato</h1>
          <p>(61) 91234-5678</p>
          <p>(61) 98765-5432</p>
          <p>emailcontato@contato.com</p>
        </div>
      </div>
        <div className="container px-10 py-6">
          <Mapa />
      </div>
    </div>
    </section>
  );
}
