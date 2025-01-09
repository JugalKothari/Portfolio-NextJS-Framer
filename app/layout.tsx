import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { color } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio Website",
  description: "Crazy portfolio of Jugal Kothari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <head>
      <meta name="google-site-verification" content="MiB0EoQsLG9HnB1qiD2YknXcc_9LHXblpl5kcEKMigo" />
      <meta name="description" content="Jugal Kothari's portfolio website!" />
      <meta name="robots" content="noindex"/>
      </head>
      <body className={`${inter.className} bg-yellow-50 overflow-auto w-full h-full`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
