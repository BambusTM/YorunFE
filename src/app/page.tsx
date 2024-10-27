import NavBar from "@/components/organisms/NavBar";
import HireCard from "@/components/organisms/HireCard";
import RecentWork from "@/components/organisms/RecentWork";
import Footer from "@/components/organisms/Footer";
import PictureFrame from "@/components/molecules/PictureFrame";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import InfoCard from "@/components/molecules/InfoCard";

export default function Home() {
    return (
        <div className="min-h-screen">
            <NavBar />
            <div className="container mx-auto px-4 py-8 grid gap-8">

                <div className=" md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <HireCard />
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="col-span-1 lg:col-span-2">
                        <RecentWork/>
                    </div>
                    <div className="col-span-1 lg:col-span-1">
                        <RecentWork/>
                    </div>
                    <div className="space-y-4">
                        <TestimonialCard/>
                        <InfoCard/>
                    </div>
                </div>

                <div className="space-y-4">
                    <PictureFrame picture="/assets/code.jpg"/>
                </div>
            </div>

            <Footer />
        </div>
    );
}
