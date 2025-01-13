import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

interface VideoProps {
  id: string;
  title: string;
  description: string;
  vidKey: string;
  cat: string;
}

const VideoCard = (video: VideoProps) => {
  return (
    <Link to={`video/${video.vidKey}`} className="group hover:bg-primary">
      <Card className="h-full flex flex-col group-hover:bg-primary">
        <CardHeader>
          <CardTitle className="group-hover:text-[#f8fafc]">
            {video.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="group-hover:text-[#f8fafc]">{video.description}</p>
        </CardContent>
        <Separator className="mb-2 mt-auto group-hover:text-[#f8fafc]" />
        <CardFooter>
          <p className="group-hover:text-[#f8fafc]">{video.cat}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default VideoCard;
