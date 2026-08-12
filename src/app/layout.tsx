import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Arfah Putra S — Link",
  description: "Semua link penting Arfah Putra S dalam satu halaman.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="min-h-full bg-background text-foreground antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var stored = localStorage.getItem('theme');
              var theme = stored === 'light' ? 'light' : 'dark';
              document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {}
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
