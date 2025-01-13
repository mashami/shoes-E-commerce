import { NavBar } from "@/components/NavBar";
import "/src/styles/globals.scss";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-20 md:container px-6 py-6">
      <div className="fixed w-full top-0 right-0 xl:px-[50px] px-2 bg-white z-50">
        <NavBar />
      </div>

      <div>{children}</div>
    </div>
  );
}
