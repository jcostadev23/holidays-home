import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home rental Madeira",
  description: "Houses to rent in Madeira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <div className="flex flex-col items-center ">
          <Header />
          <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-roboto-sans)] w-full max-w-[1400px] mx-auto ">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
