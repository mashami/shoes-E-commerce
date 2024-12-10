import type { Metadata } from "next";
import "/src/styles/globals.scss";
import NavBar from "@/components/NavBar/NavBar";
import { cn } from "@/lib/utils";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  title: "Shoes Platform",
  description:
    "This is platform which going to help customers to buy online shoes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`${bricolage.variable} font-bricolage`)}>
        <main>
          <div className="fixed w-full top-0 right-0 px-[50px] bg-white z-50">
            <NavBar />
          </div>

          <div className="pt-20 container py-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
