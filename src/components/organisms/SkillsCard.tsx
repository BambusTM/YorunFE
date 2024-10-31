import GradientBorder from "@/components/atoms/GradiantBorder";
import Skill from "@/components/atoms/Skill";

export const skills = [
    { name: "React", description: "My go-to Frontend library." },
    { name: "TypeScript", description: "Widely used with React but also Express." },
    { name: "Java", description: "Created backends and FX-applications." },
    { name: "Godot", description: "Worked on a few game Projects: 2D & 3D." },
    { name: "Python", description: "Used for scraper, AI and other scripts." },
    { name: "PostgreSQL", description: "My database of choice." },
];

export default function SkillsCard() {
    return (
        <GradientBorder borderRadius={9}>
            <div className="mx-auto bg-border rounded-sm p-8 w-full">
                <div className={"text-center pb-8"}>
                    <h2 className="font-bold">
                        Techstack
                    </h2>
                </div>
                <div className={"grid  grid-cols-2 md:grid-cols-3 gap-4"}>
                    {skills.map((skill, index) => (
                        <Skill key={index} skillName={skill.name} description={skill.description}/>
                    ))}
                </div>
            </div>
        </GradientBorder>
    );
}
