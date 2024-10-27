import GradientBorder from "@/components/atoms/GradiantBorder";

export interface PictureFrameProps {
    picture: string;
    className?: string;
}

export default function PictureFrame({ picture = "", className = "" }: PictureFrameProps) {
    return (
        <GradientBorder borderRadius={14} className={`${className}`}>
            <img
                src={picture}
                alt="code"
                className="w-full max-h-56 object-cover"
                style={{ borderRadius: "14px" }}
            />
        </GradientBorder>
    );
}