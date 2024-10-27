import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import GradientBorder from "@/components/atoms/GradiantBorder";
import NavBarLink from "@/components/atoms/NavBarLink";

export default function NavBar() {
    return (
        <div className="flex items-center justify-around">
            <div>
                <h5>
                    Yorun.dev
                </h5>
            </div>

            <GradientBorder borderRadius={50}>
                <div className="bg-border rounded-full flex items-center justify-center px-1">
                    <Link className={`${buttonVariants({variant: "outline"})} rounded-lg h-full`} href={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-full">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                        </svg>
                    </Link>

                    <NavBarLink href={"about"} text={"About"}/>

                    <NavBarLink href={"projects"} text={"Projects"}/>

                    <NavBarLink href={"portfolio"} text={"Portfolio"}/>
                </div>
            </GradientBorder>

            <GradientBorder borderRadius={50}>
                <Button
                    variant="outline"
                    className="text-foreground py-2 px-6 rounded-lg hover:bg-primary hover:text-foreground transition-colors rounded-lg h-full"
                >
                    <h5>
                        Contact Me
                    </h5>
                </Button>
            </GradientBorder>
        </div>
    );
}