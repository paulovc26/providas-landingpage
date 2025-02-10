"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";

export default function Nav() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Quando rolar mais de 100px
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="flex justify-between items-center bg-sky-600 text-white text-xs sm:text-md p-2 px-10 relative top-0">
        <div className="flex-1">
          <p className="flex mr-auto font-bold">
            contato@contato.com | (61) XXXX-XXXX | (61) XXXXX-XXXX
          </p>
        </div>
        <div className="flex-1 text-right">
          <div className="ml-auto">Social here</div>
        </div>
      </nav>
      <nav
        className={`flex justify-between items-center p-4 py-6 bg-sky-700 text-white ${
          isFixed ? "fixed top-0 left-0 w-full z-50" : ""
        }`}
      >
        <Link href="/" className="pl-12 text-xl font-bold">
          Instituto Pró-Vidas
        </Link>
        <div className="flex mx-auto gap-4 font-bold text-xl">
          <NavLink />
        </div>
      </nav>
    </div>
  );
}
