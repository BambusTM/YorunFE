import GradientBorder from "@/components/atoms/GradiantBorder";

export default function InfoCard() {
    return (
        <GradientBorder borderRadius={8}>
            <div className="mx-auto bg-border rounded-sm p-8 w-full h-full">
                <div className={"pb-6"}>
                    <h2 className={"font-bold"}>
                        About Me
                    </h2>
                </div>
                <p className={"text-body1"}>
                    I’m an ambitious programmer with a strong drive to expand my skills and a genuine enthusiasm for learning. I thrive on the challenges that programming brings and am always looking to refine my abilities. Collaborating with a team is one of my favorite aspects of the work, as I enjoy the synergy of shared ideas and the opportunity to learn from others. I’m excited to contribute my energy and passion for coding to achieve both personal and team goals.
                </p>
            </div>
        </GradientBorder>
);
}