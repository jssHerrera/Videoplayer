import { Box, Stack } from "@mui/system";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import useGetVideoDetail from "../../hook/useGetVideoDetail";
import { Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoDetail = () => {
  const { id } = useParams();
  const { detail } = useGetVideoDetail({ id });
  if (!detail?.snippet) return "loading";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = detail;

  return (
    <Box minHeight="90vh">
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
                <Typography variant="subtitle1" color="#fff">
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
