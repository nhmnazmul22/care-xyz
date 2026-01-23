import {Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/provider/ThemeProvider";
import {Toaster} from "sonner";
import NextAuthProvider from "@/provider/NextAuthProvider";

const PlusJakarta = Plus_Jakarta_Sans({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export const metadata = {
    metadataBase: new URL("https://care-xyz-silk.vercel.app"),
    title: {
        default: "Care XYZ",
        template: "%s | Care XYZ",
    },

    description:
        "Care XYZ a modern web application for booking professional caregiving services for babies, elderly, and those recovering from illness.",

    keywords: [
        "Personal assistance",
        "Daily routine help",
        "Rapid response",
        "Emergency support",
        "Hospital coordination",
        "Household tasks",
    ],

    openGraph: {
        type: "website",
        locale: "bn_BD",
        url: "https://care-xyz-silk.vercel.app",
        siteName: "Care XYZ",
        title: "Care XYZ | A modern web application for booking professional caregiving services.",
        description: "Care XYZ a modern web application for booking professional caregiving services for babies, elderly, and those recovering from illness.",
        images: [
            {
                url: "https://i.ibb.co/BHzLDLWD/home-page.png",
                width: 1200,
                height: 630,
                alt: "Care XYZ Home Page Preview",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Care XYZ | A modern web application for booking professional caregiving services.",
        description: "Care XYZ a modern web application for booking professional caregiving services for babies, elderly, and those recovering from illness.",
        images: ["https://i.ibb.co/BHzLDLWD/home-page.png"],
    },

    icons: {
        icon: "https://i.ibb.co/Z6ngvGCx/logo.png",
        apple: "https://i.ibb.co/Z6ngvGCx/logo.png",
    },
};


export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${PlusJakarta.className} antialiased`}>
        <NextAuthProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
            <Toaster richColors position="bottom-right"/>
        </NextAuthProvider>
        </body>
        </html>
    );
}
