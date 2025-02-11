// src/components/common/dashboard/SubmenuItem.tsx
import { FaPencil } from "react-icons/fa6";

interface MenuSubitemProps {
  menuSubitem: { sub_id: number; title: string };
  open: boolean;
}

export default function MenuSubitem({ menuSubitem, open }: MenuSubitemProps) {
  return (
    <li className="text-zinc-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-white/20 rounded-md mt-2">
      <span className="text-xl block float-left">
        <FaPencil />
      </span>
      <span
        className={`text-base font-medium flex-1 duration-300 ${
          !open && "scale-0"
        }`}
      >
        {menuSubitem.title}
      </span>
    </li>
  );
}
