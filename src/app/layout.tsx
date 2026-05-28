import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FixedQR - Fast UPI QR Generator",
  description: "Generate UPI QR codes instantly for any payment amount.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
