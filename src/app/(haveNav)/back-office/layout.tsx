import { AppSidebar } from "@/components/Sidebar/AppSidebar";
import "/src/styles/globals.scss";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        {/* <SidebarTrigger position="right" /> */}
        <div className="w-full mt-5">{children}</div>
      </SidebarProvider>
    </div>
  );
}
