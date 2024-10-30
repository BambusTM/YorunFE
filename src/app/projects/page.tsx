import ProjectCard from "@/components/organisms/ProjectCard";

const projects = [
    {
        title: "SideQuest",
        description: "As my role as scrum master, I work with the help of my team on a project called 'SideQuest'. SideQuest is a platform that allows users to create and share their own quests.",
        duration: "August 2024 - Present",
        technology: ["React", "TypeScript", "MUI", "Storybook"],
        image: "/assets/sideQuest.png",
        website: "",
        github: "",
    },
    {
        title: "Portfolio Frontend",
        description: "I created this portfolio site that you are visiting right now for a school module. The goal of this module is, to create a mockup followed by the implementation in any frontend-framework or even just plain HTML-5 & CSS. I chose to make this website using Next.js, Tailwind and Shadcn.",
        duration: "17.10.2024 - Present",
        technology: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn ui", "EmailJS", "zod"],
        image: "/assets/portfolio.png",
        website: "https://guthib.com/",
        github: "https://github.com/BambusTM/YorunFE",
    },
    {
        title: "FaithSafe",
        description: "For a school project I created in collaboration with four other students a password manager called 'FaithSafe'. The goal was to have a 100% client sided password manager with the ability to import and export passwords to reuse them on different devices. We managed to do all that and FaithSafe is even able to generate you new passwords. Data is being stored locally with the help of a client-sided json 'database' and it utilizes our home made encryption algorithm.",
        duration: "May 2024 - June 2024",
        technology: ["Java", "JavaFX", "Gluon SceneBuilder", "gradle"],
        image: "/assets/faithSafe.png",
        website: "https://faithsafe.net",
        github: "https://github.com/BambusTM/YorunFE",
    },
    {
        title: "VroomVroom",
        description: "This project was an opportunity to learn the process of creating a fullstack application. I worked as the leader of team of 6 trainees to create a API, capable of creating, sorting, storing and manipulating car data. The frontend part consisted of creating a unfriendly UI to the API.",
        duration: "December 2023 - July 2024",
        technology: ["React", "TypeScript", "MUI", "Cypress", "yup", "SpringBoot", "Java", "PostgreSQL", "Swagger"],
        image: "/assets/vroomVroom.png",
        website: "",
        github: "",
    },
    {
        title: "Little Bamboo",
        description: "At the beginning of my apprenticeship I was tasked to create a website for a local restaurant with the intention to be a practice project and not to be sold. I lead a team of 6 trainees in an intern competition of which we came out ahead.",
        duration: "September 2023 - October 2023",
        technology: ["HTML", "CSS"],
        image: "/assets/littleBamboo.png",
        website: "",
        github: "",
    },
];

export default function Projects() {
    return (
        <div className="container mx-auto px-4 py-8 grid grid-cols-2 gap-4 auto-rows-min">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="p-4 transform transition-transform duration-300 hover:scale-105"
                    style={{
                        gridColumn: (index % 2) + 1, // Alternates between column 1 and 2
                        gridRow: `${index + 1} / span 2`, // Spans 2 rows, starting on every odd row
                    }}
                >
                    <ProjectCard
                        title={project.title}
                        description={project.description}
                        duration={project.duration}
                        technology={project.technology}
                        image={project.image}
                        website={project.website}
                        github={project.github}
                    />
                </div>
            ))}
        </div>
    );
}