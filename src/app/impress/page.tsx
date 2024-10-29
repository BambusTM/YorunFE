import NavBar from "@/components/organisms/NavBar";
import Footer from "@/components/organisms/Footer";
import ImpressContent from "@/components/organisms/ImpressContent"

export default function Impress() {
    return (
        <div className="min-h-screen flex items-center justify-between flex-col px-1">
            <NavBar/>
            <div className="space-y-4 flex justify-around">
                <ImpressContent/>
            </div>
            <Footer/>
        </div>
    );
}
