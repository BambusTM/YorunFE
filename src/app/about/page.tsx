import SkillsCard from "@/components/organisms/SkillsCard";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import LanguageCard from "@/components/organisms/LanguageCard";
import HireCard from "@/components/organisms/HireCard";

export default function About() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
                <HireCard />
            </div>
            <div className="md:col-span-2">
                <SkillsCard />
            </div>
            <div className="md:col-span-2">
                <LanguageCard />
            </div>
            <div className="md:col-span-2">
                <TestimonialCard />
            </div>
        </div>
    );
}
