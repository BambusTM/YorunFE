import {Progress} from "@/components/ui/progress"

interface LanguageSkillProps {
    language: string;
    skillLevel: number;
    children: React.ReactNode;
}

export default function LanguageSkill({language = "", skillLevel = 0, children}: LanguageSkillProps) {
    return (
        <div className={"flex flex-col items-center"}>
            <div className={"max-h-16 max-w-16 mb-5"}>
                {children}
            </div>
            <h5>
                {language}
            </h5>
            <Progress value={skillLevel}/>
        </div>
    );
}