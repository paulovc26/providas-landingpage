import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    pathname === path
      ? "p-2 text-gray-600 font-bold rounded-lg bg-slate-200"
      : "m-2 hover:text-sky-300/30 transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none";

  return (
    <>
      <Link href="/" className="m-2 hover:text-sky-300/30 transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
        Inicio
      </Link>
      <Link href="/sobre" className={linkClasses("/sobre")}>
        Sobre
      </Link>
      <Link href="/transparencia" className={linkClasses("/transparencia")}>
        Transparência
      </Link>
      <Link href="/blog" className={linkClasses("/blog")}>
        Blog
      </Link>
      <Link href="/contato" className={linkClasses("/contato")}>
        Contato
      </Link>
    </>
  );
}
