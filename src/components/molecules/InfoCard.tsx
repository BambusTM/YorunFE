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
                    I am an
                    open minded and ambitious student who is currently working an
                    apprenticeship position while attending a vocational school with the main
                    emphasis on IT training.
                    By working in the IT field,
                    I have improved my skill set a lot and gained new
                    competences such as analytical thinking and customer service
                    I envision a varied working
                    environment where I can put my abilities to good
                    use and be able to act as an individual.
                </p>
            </div>
        </GradientBorder>
);
}