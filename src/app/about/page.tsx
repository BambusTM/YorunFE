import SkillsCard from "@/components/organisms/SkillsCard";
import LanguageCard from "@/components/organisms/LanguageCard";
import HireCard from "@/components/organisms/HireCard";

export default function About() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-4">
                <HireCard />
            </div>
            <div className="col-span-4">
                <SkillsCard />
            </div>
            <div className="col-span-4">
                <LanguageCard />
            </div>
        </div>
    );
}
