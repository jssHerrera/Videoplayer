import { Stack } from "@mui/material";
import { categories } from "../../utils/constants";
import ListCategories from "./ListCategories";
const Sidebar = ({ category, setCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((elem) => (
        <ListCategories
          key={elem.name}
          elem={elem}
          category={category}
          setCategory={setCategory}
        />
      ))}
    </Stack>
  );
};
export default Sidebar;
