/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import VideoGrid from "@/components/custom/VideoGrid";
import useStore from "@/store/store";
import VideoCard from "@/components/custom/VideoCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// const API_BASE_URL =
//   import.meta.env.VITE_API_BASE_URL_VIDEO ||
//   "https://j1nldfvzy8.execute-api.us-east-1.amazonaws.com/vidapi";

const DashboardPage = () => {
  const { videos, fetchVideoAll, recommendedVid, fetchRecomVid, user } =
    useStore();

  useEffect(() => {
    fetchVideoAll();
    fetchRecomVid();
  }, [fetchVideoAll, fetchRecomVid]);

  if (!user.token) {
    return (
      <section>
        <h1>Sorry your are not authorized, please login first</h1>
        <Button asChild variant="blue" size="lg" className="min-w-40 my-4">
          <Link to="/login">Sign up</Link>
        </Button>
      </section>
    );
  }

  return (
    <section className="text-left">
      <h1 className="text-[1.5rem] font-extrabold md:text-[3.5rem] md:font-bold text-primary my-4 md:my-12">
        All Videos
      </h1>

      <VideoGrid VideosArr={videos} />

      <h2 className="text-[1.5rem] font-extrabold md:text-[3.5rem] md:font-bold text-primary my-4 md:my-12">
        Recommended Videos
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {recommendedVid.map((vid: any) => (
          <VideoCard {...vid} />
        ))}
      </div>
    </section>
  );
};

export default DashboardPage;
