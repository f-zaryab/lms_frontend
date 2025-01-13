import useStore from "@/store/store";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UpdateProfile from "@/components/custom/UpdateProfile";

const Profile = () => {
  const navigate = useNavigate();
  const { user, deleteUser } = useStore();

  useEffect(() => {
    if (!user.token) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <section className="w-full h-full">
      <h1 className="text-primary text-2xl md:text-4xl font-bold text-left">
        Hello, {user.username}
      </h1>
      <p className="text-[1rem] font-medium text-black italic my-2 text-left opacity-90">
        {user.email}
      </p>

      <div className="flex justify-start gap-8 mt-8 border-2 border-primary rounded-md p-4 border-solid">
        <Sheet>
          <SheetTrigger asChild>
            <Button>Update My Details</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Want to update your details?</SheetTitle>
              <SheetDescription>
                You may update your username and password.
                <UpdateProfile />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger asChild>
            <Button>Deactivate Account</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>

              <div className="my-8">
                <Button variant="destructive" onClick={() => deleteUser()}>
                  Deactivate
                </Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export default Profile;
