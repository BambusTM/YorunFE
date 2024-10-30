import GradientBorder from "@/components/atoms/GradiantBorder";
import TechnologyTag from "@/components/atoms/TechnologyTag";
import IconLinkButton from "@/components/atoms/IconLinkButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

interface ProjectCardProps {
    title: string;
    description?: string;
    duration?: string;
    technology?: string[];
    image?: string;
    website?: string;
    github?: string;
}

export default function ProjectCard({title, description, duration, technology, image, website, github}: ProjectCardProps) {
    return (
        <GradientBorder borderRadius={10}>
            <div className="bg-border rounded-sm p-8 w-full h-full">
                {image && (
                    <img
                        src={image}
                        alt={`${title} project image`}
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                )}

                <h3 className="font-bold text">
                    {title}
                </h3>

                <span className="text-body2 muted text-end">
                    {duration}
                </span>

                <p className="text-body1 mb-2 text-">
                    {description}
                </p>

                <div className={"flex justify-start flex-wrap"}>
                    {technology && technology.map((tech, index) => (
                        <TechnologyTag technology={tech} key={index} />
                    ))}
                </div>

                <div className={"flex justify-around pt-5"}>
                    <div>
                        <IconLinkButton link={github}>
                            <FontAwesomeIcon icon={faGithub} size="2x" className={"bg-input"} />
                        </IconLinkButton>
                    </div>
                    <div>
                        {website && (
                            <a
                                href={website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto text-primary underline hover:text-primary/80"
                            >
                                check it out
                            </a>
                        )}
                    </div>
                </div>

            </div>
        </GradientBorder>
    );
}
