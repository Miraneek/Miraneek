import type {Metadata} from "next";
import React from "react";
import 'tailwindcss/tailwind.css'
import NavBar from "@/components/NavBar";
import Icons from "@/components/Icons";

export const metadata: Metadata = {
    title: "Miroslav Novotny Portfolie",
    description: "My portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={"scroll-smooth"}>
        <body className={"bg-[#00132d]"}>
        <NavBar links={["Home", "About", "My projects"]}/>
        <Icons/>
        {children}
        </body>
        </html>
    );
}
