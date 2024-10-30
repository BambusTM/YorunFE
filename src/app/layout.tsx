import type {Metadata} from "next";
import {Inter, Poppins} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/toaster";
import NavBar from "@/components/organisms/NavBar";
import Footer from "@/components/organisms/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body
            className={`${inter.variable} ${poppins.variable} antialiased`}
        >

        <div className="min-h-screen flex justify-between flex-col px-1">
            <NavBar/>
            <div className={"container mx-auto p-8"}>
                {children}
            </div>
            <Footer/>
        </div>
        <Toaster/>
        </body>
        </html>
    );
}
