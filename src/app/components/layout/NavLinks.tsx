import Link from "next/link";
import { NAV_LINKS } from "@/app/constants/navigations";
export default function NavLinks(){
    return (
        <>
        <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) =>(
                <li key={link.label}>
                    <Link href={link.href} 
                    className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white"
                    >
                        {link.label}
                    </Link>
                </li>
            ))}

        </ul>
        </>
    )
}