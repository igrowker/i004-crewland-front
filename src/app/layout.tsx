import type { Metadata } from "next";
import { FestivalProvider } from "@/context/FestivalIdContext";
import { Unbounded, Roboto } from "next/font/google";
import "./globals.css";
import { NavFooter } from '../components/elements/Footer/NavFooter';
import { SideBar } from "@/components/elements/SideBar/SideBar";
import { ProfileProvider } from "@/context/ProfileContext";

const unbounded = Unbounded(
  {
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-title"
  }
)
const roboto = Roboto(
  {
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-sans"
  }
)

export const metadata: Metadata = {
  title: "Crewland",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${roboto.variable}`}>
      <body className="min-h-screen">
        <ProfileProvider>
          <FestivalProvider>
            <SideBar />
            {children}
            <NavFooter />
          </FestivalProvider>
        </ProfileProvider>
      </body>
    </html>
  );
}
