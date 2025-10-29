/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixProvider } from "@/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lakes Store",
	description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={`scrollbar-hide ${inter.className}`}>
				<WixProvider>
					<Navbar />
					{children}
					<Footer />
				</WixProvider>
			</body>
		</html>
	);
}
