"use client";

import GradientBorder from "@/components/atoms/GradiantBorder";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import EmploymentStatus from "@/components/atoms/EmploymentStatus";
import MyAvatar from "@/components/atoms/MyAvatar";

export default function HireCard() {
    const copyToClipboard = () => {
        navigator.clipboard.writeText("yorun@yorun.dev")
            .then(() => {
                console.log("Email copied to clipboard!");
            })
            .catch(err => console.error("Failed to copy: ", err));
    };

    return (
        <GradientBorder borderRadius={8}>
            <div className="mx-auto bg-border rounded-sm p-8 w-full">
                <div className="flex flex-col md:flex-row justify-between pb-8">
                    <h3 className="muted">
                        Application Developer
                    </h3>
                    <EmploymentStatus />
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col mb-4 md:mb-0">
                        <h1 className="font-bold">
                            I&#39;m Björn Arne Rasmus <br /> Sieckmann
                        </h1>
                        <h4 className="muted">
                            I create digital applications <br /> with great experience.
                        </h4>

                        <div className="flex flex-col sm:flex-row mt-4">
                            <Link className={`${buttonVariants({variant: "default"})} rounded-lg mb-2 sm:mb-0 sm:mr-2`}
                                  href={"contact"}>
                                <h5>Hire me</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                </svg>
                            </Link>
                            <Button
                                className="bg-foreground text-background"
                                onClick={copyToClipboard}
                            >
                                <h5>Copy Email</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"/>
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end items-center">
                        <MyAvatar/>
                    </div>
                </div>
            </div>
        </GradientBorder>
    );
}
