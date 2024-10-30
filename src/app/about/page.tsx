import SkillsCard from "@/components/organisms/SkillsCard";

export default function About() {
    return (
        <div className="grid grid-cols-3">
            <div className={"grid-cols-1"}>
                <SkillsCard/>
            </div>
            <div className={"grid-cols-2"}>
                <SkillsCard/>
            </div>
            <div className={"grid-cols-3"}>
                <SkillsCard/>
            </div>
        </div>
    );
}
