import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";


export interface IconLinkButtonProps {
    children?: React.ReactNode;
    link: string;
}

export default function IconLinkButton({ children, link }: IconLinkButtonProps) {
    return (
        <Link className={`${buttonVariants({variant: "outline"})} rounded-lg h-full`} style={{borderRadius: "15px"}} href={link}>
            {children}
        </Link>
    );
}