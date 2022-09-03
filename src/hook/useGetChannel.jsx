import { useEffect, useState } from "react";
import { getVideos } from "../services/getVideos";

const useGetChannel = ({ id }) => {
  const [elem, setElem] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos(`channels?part=snippet&id=${id}`).then((data) =>
      setElem(data?.items[0])
    );

    getVideos(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return { elem, videos };
};
export default useGetChannel;
