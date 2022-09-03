import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  // const { id, imageCard, cardTitle } = elem;

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "0px",
        background: "transparent",
        marginTop,
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          padding: "25px",
        }}
      >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
        </Link>
        <CardContent sx={{ padding: 0 }}>
          <Typography
            variant="subtitle1"
            color="#fff"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString("en-US")}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ChannelCard;
