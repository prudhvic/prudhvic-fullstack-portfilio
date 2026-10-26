import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Prudhvi Krishna Chinnam",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white" style={{ fontFamily: "var(--font-geist-sans)" }}>
        {children}
      </body>
    </html>
  );
}
