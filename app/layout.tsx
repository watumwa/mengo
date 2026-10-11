import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Mengo Chamber of Commerce | Connecting Commerce. Building Prosperity.", description: "Connecting commercial centres, traders, enterprises and market opportunities in Buganda and beyond." };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
