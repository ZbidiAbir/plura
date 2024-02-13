import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ClerkProvider } from '@clerk/nextjs'
import { DM_Sans } from 'next/font/google'
import { dark } from '@clerk/themes'
import { ThemeProvider } from "@/components/theme-provider"
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "@/components/ui/toaster";
const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Plura",
  description: "All in one Agency Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider appearance={{ baseTheme: dark }}>
    <html lang="en" suppressContentEditableWarning>

      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            {children}
            <Toaster />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
    // </ClerkProvider>
  );
}
