import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Raynox NDT Solutions | Non-Destructive Testing Equipment Supplier",
    template: "%s | Raynox NDT Solutions",
  },
  description:
    "Raynox NDT Solutions is a leading supplier and reseller of Non-Destructive Testing (NDT) equipment, inspection instruments, and industrial testing solutions for quality control, maintenance, and asset integrity.",
  keywords:
    "NDT equipment, non-destructive testing, ultrasonic testing, thickness gauges, eddy current, magnetic particle inspection, borescopes, hardness testers, radiography, industrial inspection",
  openGraph: {
    title: "Raynox NDT Solutions | Non-Destructive Testing Equipment",
    description:
      "Premium NDT equipment supplier serving industrial inspection, quality control, and asset integrity sectors.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
