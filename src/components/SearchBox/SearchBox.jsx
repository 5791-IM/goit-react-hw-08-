import { useDispatch, useSelector } from "react-redux";
import { TextField, Box } from "@mui/material";
import { selectNameFilter } from "../../redux/filters/selectors.js";
import { setFilter } from "../../redux/filters/slice.js";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box sx={{ maxWidth: 300, mt: 3, mb: 3 }}>
      <TextField
        label="Find contacts"
        variant="outlined"
        fullWidth
        value={filter}
        onChange={handleChange}
      />
    </Box>
  );
}
