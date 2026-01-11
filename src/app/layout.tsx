import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "썬텍 (Sun-tech) | 글로벌 자동차 부품 전문 기술 파트너",
  description: "썬텍은 자동차 부품 산업의 고정관념을 깨는 혁신적인 기술력과 안정적인 제조 기반을 갖춘 글로벌 기술 파트너입니다.",
  keywords: ["썬텍", "Sun-tech", "자동차 부품", "특허 기술", "고정관념을 깨다", "글로벌 B2B"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.variable} suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
