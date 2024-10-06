import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SRMIST ACM SIGKDD STUDENT CHAPTER",
  description: "As an official student chapter of ACM SIGKDD (Special Interest Group on Knowledge Discovery in Data), we are committed to fostering a culture of innovation, learning, and collaboration in the field of data science and data related fields.",
  keywords: "SIGKDD, Data Scientist, Developer, Data Science, Business Systems, SRMIST, Machine Learning, Computer Vision, Web Development, ACM",
  authors: [{ name: "SRMSIGKDD" }], // Correct structure for authors
  robots: "index, follow", // Allow search engines to index the page and follow links
  openGraph: {
    title: "SRMIST ACM SIGKDD STUDENT CHAPTER",
    description: "As an official student chapter of ACM SIGKDD (Special Interest Group on Knowledge Discovery in Data), we are committed to fostering a culture of innovation, learning, and collaboration in the field of data science and data related fields.",
    url: "https://srmsgikdd.vercel.app/", // Your website URL
    siteName: "SRMSIGKDD Linktree",
    type: "website",
    images: [
      {
        url: "https://srmsigkdd.vercel.app/static/media/srmsigkdd.23f2521d9133f1a1056f.png", // Replace with an image URL for better social sharing
        width: 800,
        height: 600,
        alt: "SRMIST ACM SIGKDD STUDENT CHAPTER",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}