import type { Metadata } from "next";
import "/src/styles/globals.scss";
import NavBar from "@/components/NavBar/NavBar";
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
            <div className="fixed w-full top-0 right-0 md:px-[50px] px-2 bg-white z-50">
              <NavBar />
            </div>

            <div className="pt-20 md:container px-6 py-6">{children}</div>
          </main>
          <Toaster />
        </AppContextProvider>
      </body>
    </html>
  );
}
