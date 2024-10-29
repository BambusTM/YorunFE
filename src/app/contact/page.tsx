import NavBar from "@/components/organisms/NavBar";
import Footer from "@/components/organisms/Footer";
import ContactCard from "@/components/organisms/ContactCard";

export default function Contact() {
    return (
        <div className="min-h-screen flex justify-between flex-col px-1">
            <NavBar/>
            <div className="space-y-4 flex justify-around">
                <ContactCard/>
            </div>
            <Footer/>
        </div>
    );
}
