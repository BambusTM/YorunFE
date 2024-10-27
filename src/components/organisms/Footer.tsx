import DomainTitle from "@/components/atoms/DomainTitle";
import GradientBorder from "@/components/atoms/GradiantBorder";
import IconLinkButton from "@/components/atoms/IconLinkButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitter, faLinkedin, faGit } from '@fortawesome/free-brands-svg-icons';
import NavBarLink from "@/components/atoms/NavBarLink";


export default function Footer() {
    return(
        <div className={"bg-border w-full p-4 flex items-center justify-around"}>
            <DomainTitle title={"Yorun.dev"}/>

            <GradientBorder>
                <IconLinkButton link={"/"}>
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </IconLinkButton>
                <IconLinkButton link={"/"}>
                    <FontAwesomeIcon icon={faGit} size="2x" />
                </IconLinkButton>
                <IconLinkButton link={"/"}>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </IconLinkButton>
            </GradientBorder>

            <GradientBorder borderRadius={50}>
                <div className="bg-border rounded-full flex items-center justify-center px-1">
                    <NavBarLink href={"impress"} text={"Impress"}/>
                </div>
            </GradientBorder>
        </div>
);
}