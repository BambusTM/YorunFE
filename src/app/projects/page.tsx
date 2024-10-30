import NavBar from "@/components/organisms/NavBar";
import Footer from "@/components/organisms/Footer";
import ProjectCard from "@/components/organisms/ProjectCard";

const projects = [
    {
        title: "Portfolio Frontend",
        description: "I created this portfolio site that you are visiting right now for a school module. The goal of this module is, to create a mockup followed by the implementation in any frontend-framework or even just plain HTML-5 & CSS. I chose to make this website using Next.js, Tailwind and Shadcn.",
        duration: "17.10.2024 - 31.10.2024",
        technology: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn ui", "EmailJS", "zod"],
        image: "/assets/portfolio.png",
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
        title: "VroomVroom Frontend",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        duration: "2023 - 2024",
        technology: ["React", "TypeScript", "MUI", "Cypress", "yup"],
        image: "/assets/vroomVroom.png",
        github: "https://github.com/NoserYoungGroupOne/car-api",
    },
    {
        title: "VroomVroom Backend",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        duration: "2023 - 2024",
        technology: ["Spring Boot", "Java", "Gradle", "JUnit", "Swagger"],
        image: "/assets/vroomVroom.png",
        github: "https://github.com/NoserYoungGroupOne/car-api",
    },
    {
        title: "Little Bamboo",
        description: "At the beginning of my apprenticeship I was tasked to create a website for a local restaurant with the intention to be a practice project and not to be sold. I lead a team of 6 trainees in an intern competition of which we came out ahead.",
        duration: "September 2023 - October 2023",
        technology: ["HTML", "CSS"],
        image: "/assets/littleBamboo.png",
        github: "https://github.com/NoserYoungGroupOne/Little-Bamboo",
    },
];

export default function Projects() {
    return (
        <div className="min-h-screen flex flex-col px-1">
            <NavBar/>
            <div className="container mx-auto px-4 py-8 grid">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div key={index} className={`md:row-start-${index + 1} md:row-span-2 p-4`}>
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
            </div>
            <Footer/>
        </div>
    );
}