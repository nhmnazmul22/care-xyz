import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar/Navbar";

const PlusJakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Care.xyz",
  description: "Baby Sitting & Elderly Care Service Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${PlusJakarta.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
