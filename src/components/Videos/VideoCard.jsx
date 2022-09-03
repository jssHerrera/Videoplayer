import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "0px",
      }}
    >
      <CardActionArea>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            component="img"
            height="140"
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
          />
        </Link>
        <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="#fff"
              sx={{ fontSize: "15px" }}
            >
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>

          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="gray"
              sx={{ fontSize: "14px", display: "flex", alignItems: "center" }}
            >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default VideoCard;
