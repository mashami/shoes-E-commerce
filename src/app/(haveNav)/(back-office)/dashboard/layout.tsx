import { AppSidebar } from "@/components/Sidebar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <SidebarProvider>
        <AppSidebar />

        {/* <SidebarTrigger position="right" /> */}
        <div className="w-full mt-5 relative">{children}</div>
      </SidebarProvider>
    </div>
  );
}
