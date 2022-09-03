import { useEffect, useState } from "react";
import { getVideos } from "../services/getVideos";

const useGetVideos = ({ category = "odeza" } = {}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos(`search?q=${category}&part=snippet`).then((data) =>
      setVideos(data.items)
    );
  }, [category]);

  return { videos };
};
export default useGetVideos;

// const data = video.map((elem) => ({
//   videoId: elem.id.videoId,
//   imageCard: elem.snippet.thumbnails.high.url,
//   cardTitle: elem.snippet.title,
//   channelId: elem.snippet.channelId,
//   channelTitle: elem.snippet.channelTitle,
//   // Channel
//   id: elem.id.channelId,
// }));
