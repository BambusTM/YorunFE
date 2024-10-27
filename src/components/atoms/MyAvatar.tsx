import GradientBorder from "@/components/atoms/GradiantBorder";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function MyAvatar() {
    return (
        <GradientBorder borderRadius={100} className={"rounded-full"}>
            <Avatar className="w-40 h-40">
                <AvatarImage src="../../assets/me.png" alt="@shadcn"/>
                <AvatarFallback>BS</AvatarFallback>
            </Avatar>
        </GradientBorder>
    );
}
