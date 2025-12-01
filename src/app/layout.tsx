import type { Metadata } from "next";
import "./globals.css";
import { Zen_Maru_Gothic } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import LoadingScreen from "@/features/loading";

const font = Zen_Maru_Gothic({
  weight: "400",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Sea Slug",
  description: "にるのプロフィールサイト的なやつ！！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${font.className} antialiased`}>
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
