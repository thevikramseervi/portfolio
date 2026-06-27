import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vikramseervi.com"),
  title: "B Vikram Seervi | Full-Stack Developer & Software Engineer",
  description:
    "Computer Science and Engineering student focused on full-stack development, backend systems, and competitive programming.",
  keywords: [
    "B Vikram Seervi",
    "Vikram Seervi",
    "Full-Stack Developer",
    "Software Engineer",
    "Computer Science",
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Competitive Programming",
    "Samsung PRISM",
    "Portfolio",
  ],
  alternates: {
    canonical: "https://vikramseervi.com",
  },
  openGraph: {
    title: "B Vikram Seervi | Full-Stack Developer & Software Engineer",
    description:
      "Computer Science and Engineering student focused on full-stack development, backend systems, and competitive programming.",
    url: "https://vikramseervi.com",
    siteName: "B Vikram Seervi",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "B Vikram Seervi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B Vikram Seervi | Full-Stack Developer & Software Engineer",
    description:
      "Computer Science and Engineering student focused on full-stack development, backend systems, and competitive programming.",
    images: ["/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
