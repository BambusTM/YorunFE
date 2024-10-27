import NavBar from "@/components/organisms/NavBar";
import HireCard from "@/components/organisms/HireCard";
import RecentWork from "@/components/organisms/RecentWork";
import Footer from "@/components/organisms/Footer";

export default function Home() {
    return (
        <div>
            <NavBar />
            <div className="flex justify-around">
                <HireCard />
            </div>
            <div className="flex justify-around">
                <RecentWork/>
            </div>
            <Footer />
        </div>
    );
}
