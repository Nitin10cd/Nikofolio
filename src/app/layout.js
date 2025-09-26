import "./globals.css";

export const metadata = {
  title: "Nikhil Saxena",
  description: "This is my Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
