import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/assets/logo01.png";
import useStore from "@/store/store";

const SidebarLayout = () => {
  const { open } = useSidebar();
  const { user } = useStore();

  return (
    <Sidebar collapsible="icon" variant="inset" className="bg-primary">
      <SidebarHeader className="bg-primary">
        <img
          src={Logo}
          alt="logo"
          width={"100%"}
          height={"100%"}
          style={{
            width: open ? "8rem" : "2rem",
            height: open ? "8rem" : "2rem",
            marginBottom: "1rem",
          }}
        />
      </SidebarHeader>
      <Separator className="bg-[#f9d205] h-1" />
      <SidebarContent className="bg-primary text-left">
        <SidebarGroup>
          <Link to="/dashboard" className="text-[#f8fafc] text-2xl my-4">
            {open ? "My Dashboard" : "MD"}
          </Link>
          <Link to="profile" className="text-[#f8fafc] text-2xl my-4">
            {open ? "My Profile" : "MP"}
          </Link>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="rounded-xl bg-[#f9d205] flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {open && (
          <p className="text-black font-bold">{user.email || user.username}</p>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarLayout;
