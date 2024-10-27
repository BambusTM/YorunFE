import GradientBorder from "@/components/atoms/GradiantBorder";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MyAvatarProps {
    size?: string;
}

export default function MyAvatar({ size = "w-40 h-40" }: MyAvatarProps) {
    return (
        <GradientBorder borderRadius={100} className={"rounded-full"}>
            <Avatar className={`flex items-center justify-center ${size}`}>
                <AvatarImage
                    src="../../assets/me.png"
                    alt="@shadcn"
                    className={`object-cover ${size}`}
                    style={{ borderRadius: "100px" }}
                />
                <AvatarFallback>BS</AvatarFallback>
            </Avatar>
        </GradientBorder>
    );
}
