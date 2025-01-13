import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarLayout from "../SidebarLayout";

const MainDashboard = () => {
  return (
    <div>
      <SidebarProvider className="min-h-screen h-full">
        <SidebarLayout />
        <main className="p-4 min-h-screen">
          <div className="w-full flex justify-start py-4">
            <SidebarTrigger className="bg-primary text-[#f8fafc] text-[1.5rem] hover:bg-[#f8fafc] hover:text-primary hover:border-primary hover:border-1" />
          </div>
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default MainDashboard;
