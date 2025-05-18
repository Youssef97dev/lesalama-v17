import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Le Salama Marrakech",
  description: "Rooftop & Sky Bar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
