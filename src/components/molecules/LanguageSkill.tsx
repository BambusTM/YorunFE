import { Progress } from "@/components/ui/progress"

interface LanguageSkillProps {
    language: string;
    skillLevel: number;
    children: React.ReactNode;
}

export default function LanguageSkill({language = "", skillLevel = 0, children}: LanguageSkillProps) {
    return(
        <div>
            {children}
            <h4>
                {language}
            </h4>
            <Progress value={skillLevel} />
        </div>
    );
}