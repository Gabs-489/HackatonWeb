
import FooterPunto6 from "@/components/footer_paragraphs";
import HeaderPunto6 from "@/components/header_paragraphs";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
      <body >
        <HeaderPunto6 />
        <main className="min-h-screen px-4 md:px-8">{children}</main>
        <FooterPunto6></FooterPunto6>
      </body>
    </html>
  );
}