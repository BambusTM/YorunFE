import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

export interface NavBarLinkProps {
    href: string;
    text: string;
}

export default function NavBarLink({href, text}: NavBarLinkProps) {
    return (
        <Link className={`${buttonVariants({variant: "outline"})} rounded-full h-full bg-transparent border-none`} href={href}>
            <h5>
                {text}
            </h5>
        </Link>
    );
}
