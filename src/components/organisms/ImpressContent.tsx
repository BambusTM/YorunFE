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
import {Separator} from "@/components/ui/separator";

const contacts = [
    {
        trigger: "Name",
        content: "Björn Arne Rasmus Sieckmann"
    },
    {
        trigger: "E-Mail",
        content: "yorun@yorun.dev"
    },
    {
        trigger: "Phone Number",
        content: "+41 79 380 11 96"
    },
    {
        trigger: "Adress",
        content: "Spiegelstrasse 87, 3095 Spiegel b. Bern"
    }
]

export default function ImpressContent() {
    const {toast} = useToast()

    return (
        <GradientBorder borderRadius={9}>
            <div className="mx-auto bg-border rounded-sm p-8 w-full">
                <h2 className={"font-bold text-center"}>
                    Impress
                </h2>
                <h3>
                    Disclaimer
                </h3>
                <p className={"text-body1 py-1"}>
                    The information provided on this website is for general informational purposes only. <br/>
                    All content is provided in good faith; however, we make no representations or warranties of any <br/>
                    kind, express or implied, about the completeness, accuracy, reliability, suitability, <br/>
                    or availability with respect to the website or the information, products, services, or related graphics contained on the website.
                </p>
                <p className={"text-body1 py-1"}>
                    In no event will we be liable for any loss or damage, including without limitation, indirect or <br/>
                    consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits <br/>
                    arising out of, or in connection with, the use of this website.
                </p>
                <p className={"text-body1 py-1"}>
                    This website may contain links to external sites that are not provided or maintained by us. We have <br/>
                    no control over the content, privacy policies, or practices of any external sites. <br/>
                </p>
                <p className={"text-body1 py-1"}>
                    All content on this website is the property of [Your Name or Company Name]. Unauthorized use and/or <br/>
                    duplication of this material without express and written permission from this site’s owner is <br/>
                    strictly prohibited.
                </p>
                <p className={"text-body1 py-1"}>
                    We reserve the right to modify or remove any content on this website at any time without prior
                    notice.
                </p>

                <Separator className="my-4 bg-card-foreground" />

                <Accordion type="single" collapsible>
                    {contacts.map((contact, index) => (
                        <AccordionItem value={`item-${index}`} key={contact.trigger}>
                            <AccordionTrigger>
                                <h4 className={"pr-6"}>
                                    {contact.trigger}
                                </h4>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className={"flex justify-between"}>
                                    <div>
                                        <p className={"text-body1"}>
                                            {contact.content}
                                        </p>
                                    </div>
                                    <div>
                                        <Button
                                            className="bg-foreground text-background"
                                            variant={"outline"}
                                            onClick={() => {
                                                navigator.clipboard.writeText(contact.content).then(() => {
                                                    toast({
                                                        description: `${contact.trigger} copied to clipboard!`,
                                                    });
                                                }).catch((error) => {
                                                    toast({
                                                        description: "Failed to copy message!",
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
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </GradientBorder>
    );
}