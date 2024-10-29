import GradientBorder from "@/components/atoms/GradiantBorder";
import {ContactForm} from "@/components/molecules/ContactForm";

export default function ContactCard() {
    return (
        <GradientBorder borderRadius={9}>
            <div className="mx-auto bg-border rounded-sm p-8 w-full">
                <ContactForm/>
            </div>
        </GradientBorder>
    );
}