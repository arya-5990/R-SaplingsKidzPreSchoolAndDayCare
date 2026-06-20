import type { Metadata } from "next";
import { Gloria_Hallelujah } from "next/font/google";
import "./globals.css";

const gloria = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Preschool Website",
  description: "Best Preschool & Day Care Centre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gloria.className}>
        {children}
      </body>
    </html>
  );
}