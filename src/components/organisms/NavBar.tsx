import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import GradientBorder from "@/components/atoms/GradiantBorder";
import NavBarLink from "@/components/atoms/NavBarLink";
import DomainTitle from "@/components/atoms/DomainTitle";

export default function NavBar() {
    return (
        <>
            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center justify-around pt-3">
                <DomainTitle title={"Yorun.dev"} />

                <GradientBorder borderRadius={50}>
                    <div className="bg-border rounded-full flex items-center justify-center px-1">
                        <Link
                            className={`${buttonVariants({ variant: "outline" })} h-full`}
                            style={{ borderRadius: "15px" }}
                            href={"/"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.7}
                                stroke="currentColor"
                                className="w-6 h-full rounded-full"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                />
                            </svg>
                        </Link>

                        <NavBarLink href={"about"} text={"About"} />
                        <NavBarLink href={"projects"} text={"Projects"} />
                        <NavBarLink href={"#"} text={"coming soon"} />
                    </div>
                </GradientBorder>

                <GradientBorder borderRadius={50}>
                    <div className="bg-border rounded-full flex items-center justify-center">
                        <NavBarLink href={"contact"} text={"Contact Me"} />
                    </div>
                </GradientBorder>
            </div>

            {/* Mobile Navbar */}
            <div className="fixed bottom-0 w-full md:hidden bg-background py-2 z-10">
                <GradientBorder borderRadius={50}>
                    <div className="bg-border rounded-full flex items-center justify-around px-4 py-2">
                        <Link
                            className={`${buttonVariants({ variant: "outline" })} h-full`}
                            style={{ borderRadius: "15px" }}
                            href={"/"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.7}
                                stroke="currentColor"
                                className="w-6 h-full rounded-full"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                />
                            </svg>
                        </Link>

                        <NavBarLink href={"about"} text={"About"} />
                        <NavBarLink href={"projects"} text={"Projects"} />
                        <NavBarLink href={"portfolio"} text={"Portfolio"} />
                    </div>
                </GradientBorder>
            </div>
        </>
    );
}
