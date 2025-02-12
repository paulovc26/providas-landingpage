// src/components/common/dashboard/MenuItem.tsx
import { BsChevronDown } from "react-icons/bs";
import MenuSubitem from "./MenuSubitem";
import { JSX, useState } from "react";

interface MenuItemProps {
  menu: {
    id: number;
    title: string;
    icon: JSX.Element;
    submenu?: boolean;
    submenuItems?: { sub_id: number; title: string }[];
  };
  open: boolean;
  setSubMenuOpen: (state: boolean) => void;
}

export default function MenuItem({ menu, open, setSubMenuOpen }: MenuItemProps) {
  const [subMenuOpen, setSubMenuOpenLocal] = useState(false);

  return (
    <>
      <li className="text-zinc-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white/20 rounded-md mt-2">
        <span className="text-2xl block float-left">{menu.icon}</span>
        <span className={`text-base font-medium flex-1 duration-300 ${!open && "scale-0"}`}>{menu.title}</span>
        {menu.submenu && (
          <BsChevronDown
            className={`duration-500 ${subMenuOpen && "rotate-[-180deg]"}`}
            onClick={() => {
              setSubMenuOpenLocal(!subMenuOpen);
              setSubMenuOpen(!subMenuOpen);
            }}
          />
        )}
      </li>

      {menu.submenu && subMenuOpen && open && (
        <ul>
          {menu.submenuItems?.map((submenuItem) => (
            <MenuSubitem key={submenuItem.sub_id} menuSubitem={submenuItem} open={open} />
          ))}
        </ul>
      )}
    </>
  );
}
