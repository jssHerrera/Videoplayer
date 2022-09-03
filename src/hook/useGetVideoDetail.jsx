import { useEffect, useState } from "react";
import { getVideos } from "../services/getVideos";

const useGetVideoDetail = ({ id }) => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    getVideos(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setDetail(data.items[0])
    );
  }, [id]);

  return { detail };
};
export default useGetVideoDetail;
