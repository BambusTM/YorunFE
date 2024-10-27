import GradientBorder from "@/components/atoms/GradiantBorder";
import MyAvatar from "@/components/atoms/MyAvatar";

export default function TestimonialCard() {
    return (
        <GradientBorder borderRadius={8}>
            <div className="mx-auto bg-border rounded-sm p-8 w-full">
                <div className={"flex justify-between"}>
                    <div>
                        <MyAvatar size={"20"}/>
                    </div>
                    <div className={"flex justify-end"}>
                        <MyAvatar size={"20"}/>
                    </div>
                </div>
                <div>
                    <p className={"text-body2"}>
                        s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                    </p>
                </div>
            </div>
        </GradientBorder>
    );
}