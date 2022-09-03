import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import useGetVideos from "../../hook/useGetVideos";
import { Sidebar } from "../Sidebar";
import { Videos } from "../Videos";

const Feed = () => {
  const [category, setCategory] = useState("New");

  const { videos } = useGetVideos({ category });

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: {
            xs: "auto",
            md: "90vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar category={category} setCategory={setCategory} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff", display: { xs: "none", md: "block" } }}
        >
          Denis Herrera
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "85vh",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {category} <span style={{ color: "#f31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Feed;
