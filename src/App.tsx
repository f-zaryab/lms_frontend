import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import "./App.css";
import heroBanner from "@/assets/main-hero-banner.jpg";
import useStore from "./store/store";

function App() {
  const { user } = useStore();

  return (
    <main className="bg-slate-500 h-screen w-full flex flex-col justify-between gap-16">
      <img
        src={heroBanner}
        alt="hero-banner"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />

      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div
          className="flex flex-col justify-center items-center p-16 h-full w-full md:h-auto md:w-auto"
          style={{
            background: "rgba(255, 255, 255, 0.28)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(6.3px)",
          }}
        >
          <h1 className="text-primary text-5xl font-bold my-8">
            Welcome to Learning Platform
          </h1>
          <Button asChild variant="blue" size="lg" className="min-w-40">
            <Link to="/login">{user.token ? "My Dashboard" : "Sign up"}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default App;
