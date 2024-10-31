import GradientBorder from "@/components/atoms/GradiantBorder";
import LanguageSkill from "@/components/molecules/LanguageSkill";

const languages = [
    {
        language: "German",
        level: 100,
        icon: "/assets/germany.png"
    },
    {
        language: "Swiss German",
        level: 100,
        icon: "/assets/switzerland.png"

    },
    {
        language: "English",
        level: 90,
        icon: "/assets/united-kingdom.png"
    },
    {
        language: "Japanese",
        level: 40,
        icon: "/assets/japan.png"
    },
    {
        language: "French",
        level: 20,
        icon: "/assets/france.png"
    }
]

export default function LanguageCard() {
    return (
        <GradientBorder borderRadius={8} className="h-full">
            <div className="grid grid-cols-2 md:grid-cols-3 mx-auto bg-border gap-8 rounded-sm p-12 h-full">
                <div className={"grid-cols-1"}>
                    <h2 className={"font-bold"}>
                        Language Skill Level
                    </h2>
                </div>
                {languages.map((language, index) => (
                    <div className={"grid-cols-1"} key={index}>
                        <LanguageSkill language={language.language} skillLevel={language.level}>
                            <img src={language.icon} alt="language icon"/>
                        </LanguageSkill>
                    </div>
                ))}
            </div>
        </GradientBorder>
    );
}