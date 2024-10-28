import NavBar from "@/components/organisms/NavBar";
import Footer from "@/components/organisms/Footer";
import ImpressContent from "@/components/organisms/ImpressContent"

export default function Impress() {
    return (
        <div className="min-h-screen">
            <NavBar/>
            <div className="space-y-4 flex justify-around">
                <ImpressContent/>
            </div>
            <Footer/>
        </div>
    );
}
