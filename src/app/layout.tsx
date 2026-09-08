import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const display = Poppins({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sans = Inter({
  variable: "--font-sans-src",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My School Movie Club — Where Movies Meet Education",
  description:
    "A membership club where students watch curated, educational movie screenings at school — movies for a brighter tomorrow.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} scroll-smooth`}
    >
      <body className="min-h-full bg-white font-sans text-slate antialiased">
        {children}
      </body>
    </html>
  );
}
