import type { Metadata } from "next";
import "../globals.css";
import Nav from "../../components/common/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Instituto Pro Vidas",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="corporate" lang="en">
      <body className={`antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
