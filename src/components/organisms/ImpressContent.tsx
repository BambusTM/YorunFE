"use client";

import GradientBorder from "@/components/atoms/GradiantBorder";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {Button} from "@/components/ui/button";
import {useToast} from "@/hooks/use-toast";

const contacts = [
    {
        trigger: "Phone Number",
        content: "+41 79 380 11 96"
    },
    {
        trigger: "E-Mail",
        content: "yorun@yorun.dev"
    },
]

export default function ImpressContent() {
    const { toast } = useToast()

    return (
        <GradientBorder borderRadius={9}>
            <div className="mx-auto bg-border rounded-sm p-8 w-full">
                <h2 className={"font-bold"}>
                    Impress
                </h2>

                <Accordion type="single" collapsible>
                    {contacts.map((contact, index) => (
                        <AccordionItem value={`item-${index}`} key={contact.trigger}>
                            <AccordionTrigger>
                                <h4 className={"pr-6"}>
                                    {contact.trigger}
                                </h4>
                            </AccordionTrigger>
                            <AccordionContent>
                                {contact.content}
                                <Button
                                    className="bg-foreground text-background"
                                    variant={"outline"}
                                    onClick={() => {
                                        navigator.clipboard.writeText(contact.content).then(() => {
                                            toast({
                                                description: "Your message has been copied to clipboard.",
                                            });
                                        }).catch((error) => {
                                            toast({
                                                description: "Failed to copy message.",
                                            });
                                            console.error("Copy failed:", error);
                                        });
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="size-3">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"/>
                                    </svg>
                                </Button>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

            </div>
        </GradientBorder>
    );
}