import NavMenu from "@/components/custom/Navbar";
import { Outlet } from "react-router-dom";

const GeneralLayout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <NavMenu />
      <Outlet />
    </div>
  );
};

export default GeneralLayout;
