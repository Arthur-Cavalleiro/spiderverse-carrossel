import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spideverse",
  description:
    "Criando um carrossel parallax do Aranhaverso com react, Next.js e framer motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header></header>
        {children}
      </body>
    </html>
  );
}
