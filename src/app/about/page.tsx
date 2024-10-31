import SkillsCard from "@/components/organisms/SkillsCard";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import LanguageCard from "@/components/organisms/LanguageCard";

export default function About() {
    return (
        <div className="grid grid-cols-4 gap-8">
            <div className="md:col-span-2">
                <SkillsCard />
            </div>
            <div className="md:col-span-2">
                <TestimonialCard />
            </div>
            <div className="md:col-span-2">
                <LanguageCard />
            </div>
        </div>
    );
}
