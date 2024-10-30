import NavBar from "@/components/organisms/NavBar";
import Footer from "@/components/organisms/Footer";
import ImpressContent from "@/components/organisms/ImpressContent"

export default function Impress() {
    return (
        <div className="min-h-screen flex justify-between flex-col px-1">
            <NavBar/>
            <div className="py-12 flex justify-around">
                <ImpressContent/>
            </div>
            <Footer/>
        </div>
    );
}
