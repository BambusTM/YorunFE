import GradientBorder from "@/components/atoms/GradiantBorder";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export default function HireCard() {
    const copyToClipboard = () => {
        navigator.clipboard.writeText("youn@yorun.dev")
            .then(() => {
                console.log("Email copied to clipboard!");
            })
            .catch(err => console.error("Failed to copy: ", err));
    };

    return (
        <div className="flex justify-centery">
            <GradientBorder borderRadius={8}>
                <div className="flex justify-between bg-border rounded-sm">
                    <div className="flex justify-start flex-col">
                        <h3 className="deactivated">
                            Application Developer
                        </h3>
                        <h1 className={"font-bold"}>
                            I&#39;m Björn Arne Rasmus Sieckmann
                        </h1>
                        <h4 className="deactivated">
                            I create digital applications with great experience.
                        </h4>

                        <div className={"flex"}>
                            <div>
                                <Link className={`${buttonVariants({variant: "default"})} rounded-lg h-full`} href={"contact"}>
                                    <h5>
                                        Hire me
                                    </h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                    </svg>
                                </Link>
                            </div>
                            <div>
                                <Button
                                    className={"bg-foreground text-background"}
                                    onClick={copyToClipboard}
                                >
                                    <h5>
                                        Copy Email
                                    </h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"/>
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end flex-col">
                        <Badge variant="outline" className="bg-black border border-border rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="size-3 text-ring">
                                <path fillRule="evenodd"
                                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                      clipRule="evenodd"/>
                            </svg>
                            <p className="text-body2 deactivated">
                                Currently employed
                            </p>
                        </Badge>
                        <div>
                            <GradientBorder borderRadius={100}>
                                <Avatar className="w-40 h-auto">
                                    <AvatarImage src="../../assets/me.png" alt="@shadcn"/>
                                    <AvatarFallback>BS</AvatarFallback>
                                    </Avatar>
                            </GradientBorder>
                        </div>
                    </div>
                </div>
            </GradientBorder>
        </div>
    );
}