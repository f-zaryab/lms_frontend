import { Button } from "@/components/ui/button";
import useStore from "@/store/store";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PlayVideo = () => {
  const { id } = useParams();
  const { videos, updateLikes } = useStore();
  const [currentLikes, setCurrentLikes] = useState(0);

  const currentVidLikes = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentVid = videos.filter((vid: any) => vid.vidKey === id)[0].likes;
    setCurrentLikes(currentVid);
  };

  const currentVidID = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentVid = videos.filter((vid: any) => vid.vidKey === id)[0].id;
    return currentVid;
  };

  const currentVidTitle = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentVid = videos.filter((vid: any) => vid.vidKey === id)[0].title;
    return currentVid;
  };

  const handleLikeVideo = () => {
    const data = {
      id: currentVidID(),
      incrementBy: 1,
    };

    updateLikes(data);
    setCurrentLikes((prev) => prev + 1);
  };

  useEffect(() => {
    currentVidLikes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-full h-screen p-4 flex flex-col">
      <h1 className="text-primary text-left font-semibold mb-4">
        {currentVidTitle()}
      </h1>

      <video
        src={`https://lmsreactvideos.s3.us-east-1.amazonaws.com/${id}.mp4`}
        width={800}
        height={500}
        controls
        loop
        autoPlay
        onError={() => console.log("Error playing video. Debug it pls.")}
      />

      <p className="text-black font-medium">Current Likes: {currentLikes}</p>

      <div>
        <Button onClick={handleLikeVideo} className="my-4 w-auto">
          Like this video
        </Button>

        <Button asChild variant="blue" className="mt-8 w-auto">
          <Link to="/dashboard">Go back to dashboard</Link>
        </Button>
      </div>
    </section>
  );
};

export default PlayVideo;
