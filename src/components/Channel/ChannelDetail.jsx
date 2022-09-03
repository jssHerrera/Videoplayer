import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideos } from "../../services/getVideos";
import ChannelCard from "./ChannelCard";
import Videos from "../Videos/Videos";
import useGetChannel from "../../hook/useGetChannel";

const ChannelDetail = () => {
  const { id } = useParams();

  const { elem, videos } = useGetChannel({ id });

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212, 255,1) 100%)",
            zIndex: 10,
            height: "250px",
          }}
        />

        <ChannelCard channelDetail={elem} marginTop="-110px" />
      </Box>
      <Box>
        <Box padding={2}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};
export default ChannelDetail;
