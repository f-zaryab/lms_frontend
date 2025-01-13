"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Signup from "@/components/custom/Signup";
import Login from "@/components/custom/Login";
import { Separator } from "@/components/ui/separator";

const LoginPage = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-start align-top"
      style={{
        backgroundImage:
          "linear-gradient(to right bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
      }}
    >
      <Tabs
        defaultValue="signup"
        className="w-[400px] mt-4 md:mt-24 mx-4 md:mx-0"
      >
        <TabsList className="gap-2">
          <TabsTrigger value="signup">Sign up</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>Create your account to proceed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Signup />
            </CardContent>
            <Separator className="mb-6" />
            <CardFooter>
              <Button asChild variant="invBlue">
                <Link to="/">Go back to home page</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Login to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Login />
            </CardContent>
            <Separator className="mb-6" />
            <CardFooter>
              <Button asChild variant="invBlue">
                <Link to="/">Go back to home page</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginPage;
