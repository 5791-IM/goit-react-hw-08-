import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";

import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact({ contact, filter }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { name, number } = contact;

  const highlightMatch = (text, filter) => {
    if (!filter) return text;

    const lowerText = text.toLowerCase();
    const lowerFilter = filter.toLowerCase();
    const startIndex = lowerText.indexOf(lowerFilter);

    if (startIndex === -1) return text;

    const endIndex = startIndex + filter.length;

    return (
      <>
        {text.slice(0, startIndex)}
        <strong style={{ backgroundColor: "#ffff0066" }}>
          {text.slice(startIndex, endIndex)}
        </strong>
        {text.slice(endIndex)}
      </>
    );
  };

  return (
    <Card
      sx={{
        minWidth: {
          md: "100%",
        },
        boxSizing: "border-box",
        // marginBottom: 2,
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <PersonIcon fontSize="small" />
              {highlightMatch(name, filter)}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <PhoneIcon fontSize="small" />
              {highlightMatch(number, filter)}
            </Typography>
          </Box>
          <IconButton aria-label="delete" onClick={handleOpen} color="error">
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>

      {/* Модалка подтверждения удаления */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete <strong>{name}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleDeleteContact();
              handleClose();
            }}
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
