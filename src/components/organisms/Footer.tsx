import DomainTitle from "@/components/atoms/DomainTitle";
import GradientBorder from "@/components/atoms/GradiantBorder";
import IconLinkButton from "@/components/atoms/IconLinkButton";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXTwitter, faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
import NavBarLink from "@/components/atoms/NavBarLink";

export default function Footer() {
    return (
        <div className={"bg-border w-full p-4 flex items-center justify-around"}>
            <DomainTitle title={"Yorun.dev"}/>

            <GradientBorder borderRadius={50}>
                <div className="bg-border rounded-full flex items-center justify-center px-1">
                    <IconLinkButton link={"/"}>
                        <FontAwesomeIcon icon={faXTwitter} size="2x" className={"bg-border"}/>
                    </IconLinkButton>
                    <IconLinkButton link={"https://www.linkedin.com/in/bj%C3%B6rn-sieckmann-679627307/"}>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className={"bg-border"}/>
                    </IconLinkButton>
                    <IconLinkButton link={"https://www.instagram.com/bambusinsta/"}>
                        <FontAwesomeIcon icon={faInstagram} size="2x" className={"bg-border"}/>
                    </IconLinkButton>
                    <IconLinkButton link={"https://github.com/BambusTM"}>
                        <FontAwesomeIcon icon={faGithub} size="2x" className={"bg-border"}/>
                    </IconLinkButton>
                </div>
            </GradientBorder>

            <GradientBorder borderRadius={50}>
                <div className="bg-border rounded-full flex items-center justify-center px-1">
                    <NavBarLink href={"impress"} text={"impress"}/>
                </div>
            </GradientBorder>
        </div>
    );
}