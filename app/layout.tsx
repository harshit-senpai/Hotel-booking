import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Modal from "@/components/modals/Modal";
import RegisterModal from "@/components/modals/RegisterModal";
import ToastProvider from "@/Providers/ToastProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Booking",
  description: "An app for booing hotel with the feel of Airbnb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToastProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
