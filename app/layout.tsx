import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import { Sedgwick_Ave_Display } from 'next/font/google';
import ArtisticFooter from "./component/Footer";

const sedgwick = Sedgwick_Ave_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sedgwick'
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"], // Bắt buộc có vietnamese
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  subsets: ['latin', 'vietnamese'], // Bắt buộc có vietnamese để hiển thị dấu chuẩn
  display: 'swap',
  weight: ['400', '500', '600', '700'], // Các độ đậm nhạt bạn muốn dùng
  style: ['normal', 'italic'],          // Cho phép dùng chữ nghiêng
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${sedgwick.variable} h-full antialiased`}
    >
      <body className={lora.className}>
        <Header />
        {children}
        <ArtisticFooter />
      </body>
    </html>
  );
}