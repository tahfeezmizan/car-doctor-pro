import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Homepage/Navbar";
import Footer from "./components/Homepage/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro | Car Servicing Workshop Template ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
