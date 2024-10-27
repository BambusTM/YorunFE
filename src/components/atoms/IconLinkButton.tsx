import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";


export interface IconLinkButtonProps {
    children?: React.ReactNode;
    link: string;
}

export default function IconLinkButton({ children, link }: IconLinkButtonProps) {
    return (
        <Link className={`${buttonVariants({variant: "secondary"})} rounded-lg h-full`} href={link}>
            {children}
        </Link>
    );
}