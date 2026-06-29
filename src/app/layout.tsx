import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coimbatore Medical College & Hospital — Our Location",
  description:
    "Coimbatore Medical College & Hospital (CMCH) — A premier government medical institution providing world-class healthcare in Coimbatore, Tamil Nadu since 1966.",
  keywords: [
    "Coimbatore Medical College",
    "CMCH",
    "Coimbatore hospital",
    "government hospital Coimbatore",
    "medical college Tamil Nadu",
  ],
  openGraph: {
    title: "Coimbatore Medical College & Hospital",
    description:
      "Premier government medical institution in Coimbatore, Tamil Nadu providing comprehensive healthcare since 1966.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
