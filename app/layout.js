import './globals.css'

export const metadata = {
  title: "Offerwall",
  description: "Based on NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
