"use client";
import MenuItems from "@/components/common/dashboard/MenuItems";
import Mapa from "@/components/common/Mapa";
import Link from "next/link";
import { useState } from "react";
import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";
import { GiJigsawBox } from "react-icons/gi";
import { FaClipboard, FaG, FaGear, FaPencil } from "react-icons/fa6";
import { MdCurrencyExchange, MdFeed, MdOutlineExitToApp } from "react-icons/md";

export default function Page() {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSuBmenuOpen] = useState(false);

  const Menus = [
    {
      id: 1,
      title: "Cadastros",
      icon: <FaClipboard />,
      submenu: true,
      submenuItems: [
        { sub_id: 1, title: "Beneficiados" },
        { sub_id: 2, title: "Usuários" },
      ],
    },
    { id: 2, title: "Posts", icon: <MdFeed /> },
    { id: 3, title: "Transparência", icon: <MdCurrencyExchange /> },
    { id: 4, title: "Sair", icon: <MdOutlineExitToApp /> },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-indigo-950 h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`text-3xl bg-white text-indigo-950 rounded-full absolute -right-3 top-9 border border-indigo-950 cursor-pointer duration-500 ${
            !open && "rotate-180 duration-500"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <GiJigsawBox
            className={`text-4xl block float-left bg-white text-indigo-950 rounded-full p-1 mr-2 duration-500 ${
              !open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-2xl text-white font-medium origin-left duration-300 ${
              !open && "scale-0"
            }`}
          >
            Dashboard
          </h1>
        </div>

        <hr className="w-[85%] flex items-center m-7 opacity-25" />

        <div
          className={`flex items-center rounded-md bg-slate-500 mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />
          <input
            type={"search"}
            placeholder="Procurar"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2">
          {Menus.map((menu) => {
            return (
              <>
                <li
                  key={menu.id}
                  className="text-zinc-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white/20 rounded-md mt-2"
                >
                  <span className="text-2xl block float-left">
                    
                    {menu.icon ?  menu.icon : <FaGear />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-300 ${
                      !open && "scale-0"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && (
                    <BsChevronDown
                      className={`duration-500 ${
                        subMenuOpen && "rotate-[-180deg]"
                      }`}
                      onClick={() => setSuBmenuOpen(!subMenuOpen)}
                    />
                  )}
                </li>

                {menu.submenu && subMenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem) => {
                      return (
                        <li
                          key={submenuItem.sub_id}
                          className="text-zinc-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-white/20 rounded-md mt-2"
                        >
                          <span className="text-xl block float-left">
                            <FaPencil />
                          </span>
                          <span
                            className={`text-base font-medium flex-1 duration-300 ${
                              !open && "scale-0"
                            }`}
                          >
                            {submenuItem.title}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
