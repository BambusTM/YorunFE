import NavBar from "@/components/organisms/NavBar";
import HireCard from "@/components/organisms/HireCard";

export default function Home() {
    return (
        <div>
            <NavBar/>
            <div className="flex justify-around">
                <HireCard/>
            </div>
        </div>
    );
}
