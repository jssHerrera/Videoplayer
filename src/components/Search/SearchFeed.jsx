import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideos } from "../../services/getVideos";
import { Videos } from "../Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    getVideos(`search?q=${searchTerm}&part=snippet`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
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
          resultado de busqueda:{" "}
          <span style={{ color: "#f31503" }}> {searchTerm} </span>Videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default SearchFeed;
