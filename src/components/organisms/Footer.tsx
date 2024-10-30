import DomainTitle from "@/components/atoms/DomainTitle";
import GradientBorder from "@/components/atoms/GradiantBorder";
import IconLinkButton from "@/components/atoms/IconLinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import NavBarLink from "@/components/atoms/NavBarLink";

export default function Footer() {
    return (
        <>
            {/* Desktop Footer */}
            <div className="hidden md:flex bg-border w-full p-4 items-center justify-around">
                <DomainTitle title={"Yorun.dev"} />

                <GradientBorder borderRadius={50}>
                    <div className="bg-border rounded-full flex items-center justify-center px-1">
                        <IconLinkButton link={"https://x.com/"}>
                            <FontAwesomeIcon icon={faXTwitter} size="2x" className={"bg-border"} />
                        </IconLinkButton>
                        <IconLinkButton link={"https://www.linkedin.com/in/bj%C3%B6rn-sieckmann-679627307/"}>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className={"bg-border"} />
                        </IconLinkButton>
                        <IconLinkButton link={"https://www.instagram.com/bambusinsta/"}>
                            <FontAwesomeIcon icon={faInstagram} size="2x" className={"bg-border"} />
                        </IconLinkButton>
                        <IconLinkButton link={"https://github.com/BambusTM"}>
                            <FontAwesomeIcon icon={faGithub} size="2x" className={"bg-border"} />
                        </IconLinkButton>
                    </div>
                </GradientBorder>

                <GradientBorder borderRadius={50}>
                    <div className="bg-border rounded-full flex items-center justify-center px-1">
                        <NavBarLink href={"impress"} text={"impress"} />
                    </div>
                </GradientBorder>
            </div>

            {/* Mobile Footer */}
            <div className="md:hidden flex flex-col items-center bg-border w-full p-4 mb-16 space-y-4">
                <GradientBorder borderRadius={50}>
                    <div className="bg-border rounded-full flex items-center justify-center space-x-3 p-2">
                        <IconLinkButton link={"https://x.com/"}>
                            <FontAwesomeIcon icon={faXTwitter} size="2x" className={"bg-border"} />
                        </IconLinkButton>
                        <IconLinkButton link={"https://www.linkedin.com/in/bj%C3%B6rn-sieckmann-679627307/"}>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className={"bg-border"} />
                        </IconLinkButton>
                        <IconLinkButton link={"https://www.instagram.com/bambusinsta/"}>
                            <FontAwesomeIcon icon={faInstagram} size="2x" className={"bg-border"} />
                        </IconLinkButton>
                        <IconLinkButton link={"https://github.com/BambusTM"}>
                            <FontAwesomeIcon icon={faGithub} size="2x" className={"bg-border"} />
                        </IconLinkButton>
                    </div>
                </GradientBorder>

                <GradientBorder borderRadius={50}>
                    <div className="bg-border rounded-full flex items-center justify-center p-2">
                        <NavBarLink href={"impress"} text={"impress"} />
                    </div>
                </GradientBorder>
            </div>
        </>
    );
}
