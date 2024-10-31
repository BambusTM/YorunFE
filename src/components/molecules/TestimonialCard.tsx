import GradientBorder from "@/components/atoms/GradiantBorder";
import MyAvatar from "@/components/atoms/MyAvatar";

export default function TestimonialCard() {
    return (
        <GradientBorder borderRadius={8}>
            <div className="mx-auto bg-border rounded-sm p-8 w-full h-full">
                <div className={"flex justify-between"}>
                    <div className={"flex pb-5 items-center"}>
                        <div className={"pr-5"}>
                            <MyAvatar size={"h-16 w-16"} picture={"/assets/sympany.jpg"}/>
                        </div>
                        <div>
                            <h5>
                                Sympany AG
                            </h5>
                            <p className={"text-body2 muted"}>
                                Manager of ICT Support (German)
                            </p>
                        </div>
                    </div>
                    <div className={"flex justify-end items-center pb-5"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="size-10">
                            <path fillRule="evenodd"
                                  d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                </div>
                <div>
                    <p className={"text-body1"}>
                        Herr Sieckmann erfüllte unsere Anforderungen in jeder Beziehung und mit seiner Zielerreichung waren wir sehr zufrieden. Er verfügt über sehr hohes organisatorisches Geschick und war durch seine zügige und systematische Arbeitsweise auch stärstem Arbeitsanfall jederzeit gewachse. Sein Engagement übertraf unsere Erwartungen. Herr Sieckmann arbeitete dabei selbstständig, eigenverantwortlich und mit hoher Motivation. Mit seiner sehr zuverlässigen und genauen Arbeitsweise waren wir stets zufrieden.
                    </p>
                </div>
            </div>
        </GradientBorder>
    );
}