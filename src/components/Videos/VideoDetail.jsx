import { Box, Stack } from "@mui/system";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import useGetVideoDetail from "../../hook/useGetVideoDetail";
import { Typography } from "@mui/material";

const VideoDetail = () => {
  const { id } = useParams();
  const { detail } = useGetVideoDetail({ id });
  if (!detail?.snippet) return "loading";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = detail;

  return (
    <Box minHeight="92vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`http://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#fff",
              }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography>{channelTitle}</Typography>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
