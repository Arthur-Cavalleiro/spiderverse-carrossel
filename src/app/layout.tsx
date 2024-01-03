import type { Metadata } from "next";
import Image from "next/image";

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
        <header>
          <Image
            src="/icons/menu.svg"
            alt="Opções de Menu"
            width={36}
            height={25}
          />
          <Image
            src="spider-logo.svg"
            alt="spider-man"
            width={260}
            height={70}
          />
          <Image src="/icons/user.svg" alt="Login" width={36} height={25} />
        </header>
        {children}
      </body>
    </html>
  );
}
