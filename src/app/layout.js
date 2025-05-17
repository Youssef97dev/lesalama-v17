import "./globals.css";

export const metadata = {
  title: "Le Salama",
  description: "Le Salama Marrakech Rooftop & Sky Bar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
