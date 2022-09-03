import { Grid } from "@mui/material";
import { ChannelCard, VideoCard } from "..";

const Videos = ({ videos }) => {
  return (
    <Grid container spacing={2} columns={{ xs: 1, sm: 4, md: 6, lg: 12 }}>
      {videos.map((elem, idx) => (
        <Grid item key={idx} xs={1} sm={2} md={2} lg={3}>
          {elem.id.videoId && <VideoCard video={elem} />}
          {elem.id.channelId && <ChannelCard channelDetail={elem} />}
        </Grid>
      ))}
    </Grid>
  );
};
export default Videos;
