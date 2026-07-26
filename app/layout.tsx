import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zagelsayed.com"),
  title: {
    default: "Zag ElSayed | AI, Neuroinformatics & Intelligent Systems",
    template: "%s | Zag ElSayed",
  },
  description:
    "The academic website of Zag ElSayed, featuring interdisciplinary research in artificial intelligence, neuroinformatics, brain-computer interfaces, cognitive cybersecurity, healthcare AI, and sustainable computing.",
  keywords: [
    "Zag ElSayed",
    "Artificial Intelligence",
    "Neuroinformatics",
    "Brain-Computer Interfaces",
    "EEG",
    "Cognitive Cybersecurity",
    "Healthcare AI",
    "Sustainable Computing",
    "Green AI",
  ],
  authors: [{ name: "Zag ElSayed" }],
  creator: "Zag ElSayed",
  openGraph: {
    title: "Zag ElSayed | Academic Research",
    description:
      "Building brain-inspired intelligent systems for healthcare, cybersecurity, and a sustainable digital future.",
    url: "https://zagelsayed.com",
    siteName: "Zag ElSayed",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zag ElSayed | Academic Research",
    description:
      "AI, neuroinformatics, brain-computer interfaces, cognitive cybersecurity, and sustainable computing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}