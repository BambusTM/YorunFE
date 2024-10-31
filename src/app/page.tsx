import HireCard from "@/components/organisms/HireCard";
import RecentWork from "@/components/organisms/RecentWork";
import PictureFrame from "@/components/molecules/PictureFrame";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import InfoCard from "@/components/molecules/InfoCard";

export default function Home() {
    return (
        <div className="grid gap-8">
            <div className=" md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <HireCard/>
                </div>
            </div>
            <div className="space-y-4">
                <PictureFrame picture="/assets/code.jpg"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="col-span-1">
                    <RecentWork/>
                </div>
                <div className="space-y-4">
                    <TestimonialCard/>
                    <InfoCard/>
                </div>
            </div>
        </div>
    );
}
