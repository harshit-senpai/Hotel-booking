import { Suspense } from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Modal from "@/components/modals/Modal";
import RegisterModal from "@/components/modals/RegisterModal";
import ToastProvider from "@/Providers/ToastProvider";
import LoginModal from "@/components/modals/LoginModal";
import getCurrentUser from "@/lib/actions/getCurrentUser.action";
import RentModal from "@/components/modals/RentModal";
import SearchModal from "@/components/modals/SearchModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Booking",
  description: "An app for booing hotel with the feel of Airbnb",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Suspense>
          <RentModal />
          <ToastProvider />
          <SearchModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
          <div className="pb-20 pt-20">{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
