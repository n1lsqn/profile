import type { Metadata } from "next";
import "./globals.css";
import { Zen_Maru_Gothic } from 'next/font/google'

const font = Zen_Maru_Gothic({
  weight: "400",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "にる / n1lsqn",
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
			</body>
		</html>
	);
}
