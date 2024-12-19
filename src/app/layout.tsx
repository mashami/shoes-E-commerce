import type { Metadata } from "next";
import "/src/styles/globals.scss";
import { cn } from "@/lib/utils";
import { Bricolage_Grotesque } from "next/font/google";
// import { Toaster } from "@/components/ui/sonner";
import { AppContextProvider } from "@/utils/context/AppContext";
import { Toaster } from "@/components/ui/toaster";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque"
});

export const metadata: Metadata = {
  title: "Shoes Platform",
  description:
    "This is platform which going to help customers to buy online shoes"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`${bricolage.variable} font-bricolage`)}>
        <AppContextProvider>
          <main>
            <div>{children}</div>
          </main>
          <Toaster />
        </AppContextProvider>
      </body>
    </html>
  );
}
