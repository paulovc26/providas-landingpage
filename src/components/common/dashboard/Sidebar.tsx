'use client'
import { useState } from "react";
import MenuItems from "./MenuItems";
import { BsArrowLeftShort } from "react-icons/bs";
import { GiJigsawBox } from "react-icons/gi";
import { FaClipboard, FaGear } from "react-icons/fa6";
import { MdFeed, MdCurrencyExchange, MdOutlineExitToApp } from "react-icons/md";

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

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={`bg-indigo-950 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`text-3xl bg-white text-indigo-950 rounded-full absolute -right-3 top-9 border border-indigo-950 cursor-pointer duration-500 ${!open && "rotate-180 duration-500"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <GiJigsawBox className={`text-4xl block float-left bg-white text-indigo-950 rounded-full p-1 mr-2 duration-500 ${!open && "rotate-[360deg]"}`} />
          <h1 className={`text-2xl text-white font-medium origin-left duration-300 ${!open && "scale-0"}`}>Dashboard</h1>
        </div>

        <hr className="w-[85%] flex items-center m-7 opacity-25" />

        <ul className="pt-2">
          {Menus.map((menu) => (
            <MenuItems key={menu.id} menu={menu} open={open} setSubMenuOpen={setSubMenuOpen} />
          ))}
        </ul>
      </div>
    </div>
  );
}
