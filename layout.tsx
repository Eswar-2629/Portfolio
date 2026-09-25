import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Eswar Devisetty | Full-Stack Developer & AI Systems Engineer",
  description:
    "Portfolio of Eswar Veera Vasanth Kumar Devisetty — Full-Stack Developer, Java Developer, and AI Systems Engineer building intelligent LLM workflows, computer vision tools, and low-latency backends.",
  keywords: [
    "Eswar Devisetty",
    "Eswar Veera Vasanth Kumar Devisetty",
    "Java Developer",
    "AI Systems Engineer",
    "Full-Stack Developer",
    "ClassCast",
    "Dependency Guardian",
    "CyberTrace",
    "Narasaraopeta Engineering College",
    "React",
    "Next.js",
    "FastAPI",
    "PyTorch",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#09090b] text-neutral-200 font-sans antialiased selection:bg-cyan-400 selection:text-black min-h-screen relative overflow-x-hidden">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
