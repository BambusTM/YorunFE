import GradientBorder from "@/components/atoms/GradiantBorder";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MyAvatarProps {
    size?: string;
    picture?: string;
}

export default function MyAvatar({ size = "w-40 h-40", picture =  "" }: MyAvatarProps) {
    return (
        <GradientBorder borderRadius={120} className={"rounded-full"}>
            <Avatar className={`flex items-center justify-center ${size}`}>
                <AvatarImage
                    src={picture}
                    alt="@shadcn"
                    className={`object-cover ${size}`}
                    style={{ borderRadius: "100px" }}
                />
                <AvatarFallback>
                    BS
                </AvatarFallback>
            </Avatar>
        </GradientBorder>
    );
}
