import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import VideoCard from "../VideoCard";

interface VideoArrDataProps {
  VideosArr: {
    id: string;
    title: string;
    description: string;
    vidKey: string;
    cat: string;
  }[];
}

const VideoGrid = ({ VideosArr }: VideoArrDataProps) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const distinctCat = [...new Set(VideosArr.map((item) => item.cat))];
    setCategories(distinctCat);
  }, [VideosArr]);

  return (
    <div>
      {categories.length > 0 ? (
        <Tabs defaultValue={categories[0]} className="">
          <TabsList className="gap-4 mb-4 flex-wrap h-auto">
            {categories.map((cat) => (
              <TabsTrigger value={cat}>{cat}</TabsTrigger>
            ))}
          </TabsList>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {VideosArr.map((vid) => (
              <TabsContent value={vid.cat}>
                <VideoCard {...vid} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      ) : (
        <p>videos not available</p>
      )}
    </div>
  );
};

export default VideoGrid;
