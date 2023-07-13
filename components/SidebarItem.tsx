import { IconType } from "react-icons/lib";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}
export const SidebarItem: React.FC<SidebarItemProps> = ({icon: Icon,label,active,href}) => {
    console.log(href);
    
  return (
    <Link href={href} className={twMerge(`flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium hover:text-white transition text-neutral-400 py-1 cursor-pointer`, active && "text-white")}>
        <Icon size={26}/>
        <p className="truncate w-full">{label}</p>
    </Link>
  )
}
