import GradientBorder from "@/components/atoms/GradiantBorder";
import TechnologyTag from "@/components/atoms/TechnologyTag";
import IconLinkButton from "@/components/atoms/IconLinkButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

interface ProjectCardProps {
    title: string;
    description?: string;
    duration?: string;
    technology?: string[];
    image?: string;
    website?: string;
    github?: string;
}

export default function ProjectCard({
                                        title,
                                        description,
                                        duration,
                                        technology,
                                        image,
                                        website,
                                        github
                                    }: ProjectCardProps) {
    return (
        <GradientBorder borderRadius={10} className={"w-full"}>
            <div className="bg-border rounded-sm p-8 w-full h-full">
                {image && (
                    <img
                        src={image}
                        alt={`${title} project image`}
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                )}

                <div className="flex justify-start">
                    <div>
                        <h3 className="font-bold text">
                            {title}
                        </h3>
                    </div>
                    {github && (
                        <div className={"pl-3"}>
                            <IconLinkButton link={github}>
                                GitHub
                                <FontAwesomeIcon icon={faGithub} size="2x" className={"bg-input"}/>
                            </IconLinkButton>
                        </div>
                    )}
                </div>

                <span className="text-body2 muted text-end">
                    {duration}
                </span>

                <p className="text-body1 mb-2 text-">
                    {description}
                </p>

                <div className={"flex justify-start flex-wrap"}>
                    {technology && technology.map((tech, index) => (
                        <TechnologyTag technology={tech} key={index}/>
                    ))}
                </div>

                <div className={"flex justify-center pt-5"}>
                    {website && (
                        <Link
                            className={`${buttonVariants({variant: "default"})} rounded-lg mb-2 sm:mb-0 sm:mr-2`}
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h5>Visit</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                            </svg>
                        </Link>
                    )}
                </div>
            </div>
        </GradientBorder>
    );
}
