import GradientBorder from "@/components/atoms/GradiantBorder";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MyAvatarProps {
    size?: string;
}

export default function MyAvatar({ size = "w-40 h-40" }: MyAvatarProps) {
    return (
        <GradientBorder borderRadius={100} className={"rounded-full"}>
            <Avatar className={`${size}`}>
                <AvatarImage src="../../assets/me.png" alt="@shadcn" />
                <AvatarFallback>BS</AvatarFallback>
            </Avatar>
        </GradientBorder>
    );
}
