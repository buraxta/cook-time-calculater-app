import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComp from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sm:w-[550px] md:w-[750px] xl:w-[1050px] mx-auto">
          <NavbarComp />
          {children}
        </div>
      </body>
    </html>
  );
}
