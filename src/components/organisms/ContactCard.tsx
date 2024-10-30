import GradientBorder from "@/components/atoms/GradiantBorder";
import {ContactForm} from "@/components/molecules/ContactForm";

export default function ContactCard() {
    return (
        <GradientBorder borderRadius={9}>
            <div className="mx-auto bg-border rounded-sm p-8 w-full">
                <div className={"pb-6"}>
                    <h2 className={"font-bold"}>
                        Contact Me
                    </h2>
                </div>
                <div className={"flex justify-center"}>
                    <ContactForm/>
                </div>
            </div>
        </GradientBorder>
    );
}