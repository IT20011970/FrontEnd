import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Header from "../../../components/Header";
import "../../../Styles/Modal.css";

import CreateServiceCallModal2 from "./CreateServiceCallModal2";

const TextBoxHeader = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  border: "none",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 16,
  fontWeight: 600,
  color: "#383838",
  backgroundColor: "transparent",
  marginTop: "17px",
}));

const TextBox = styled(TextField)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: 400,
  color: "#383838",
  // borderRadius: "8px",
  // minWidth: "250px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    height: "40px",
    width: "auto",
    // padding: "10px",
  },
}));

const SelectBox = styled(Select)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: 400,
  color: "#383838",
  borderRadius: "4px",
  height: "40px",
  width: "100%",
  boxSizing: "content-box",
  // "& .MuiSelect-select": {
  //   borderRadius: "4px",
  //   height: "40px",
  //   width: "auto",
  //   // padding: "10px",
  // },
}));

const SelectInput = styled(Select)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: 400,
  color: "#383838",
  borderRadius: "8px",
  // minWidth: "250px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    height: "40px",
    width: "auto",
    // padding: "10px",
  },
}));

const ModalButton = styled(Button)(({ theme }) => ({
  width: "90px",
  height: "auto",
  borderRadius: "2px",
  cursor: "pointer",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 600,
  float: "right",
  padding: "7px",
  boxShadow: "none",
}));

const Modal = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ModalTittle = styled("text")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: 24,
  fontWeight: 700,
}));

const CreateServiceCallModal1 = (props: any) => {
  const { open, setOpen } = props;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  //Modal
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <Modal
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{ sx: { maxWidth: "75%", height: "80%" } }}
        // maxWidth={"md"}
        // disableBackdropClick
        // disableEscapeKeyDown
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <ModalTittle>Create Service Call</ModalTittle>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            {/* <CloseIcon /> */}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.064 8.81567C16.064 8.71255 15.9797 8.62817 15.8765 8.62817L14.3297 8.63521L12 11.4125L9.67263 8.63755L8.12341 8.63052C8.02029 8.63052 7.93591 8.71255 7.93591 8.81802C7.93591 8.86255 7.95232 8.90474 7.98044 8.93989L11.0297 12.5727L7.98044 16.2032C7.95212 16.2375 7.93641 16.2805 7.93591 16.3251C7.93591 16.4282 8.02029 16.5126 8.12341 16.5126L9.67263 16.5055L12 13.7282L14.3273 16.5032L15.8742 16.5102C15.9773 16.5102 16.0617 16.4282 16.0617 16.3227C16.0617 16.2782 16.0453 16.236 16.0172 16.2008L12.9726 12.5704L16.0219 8.93755C16.05 8.90474 16.064 8.86021 16.064 8.81567Z"
                fill="black"
              />
              <path
                d="M12 2.02344C6.20156 2.02344 1.5 6.725 1.5 12.5234C1.5 18.3219 6.20156 23.0234 12 23.0234C17.7984 23.0234 22.5 18.3219 22.5 12.5234C22.5 6.725 17.7984 2.02344 12 2.02344ZM12 21.2422C7.18594 21.2422 3.28125 17.3375 3.28125 12.5234C3.28125 7.70938 7.18594 3.80469 12 3.80469C16.8141 3.80469 20.7188 7.70938 20.7188 12.5234C20.7188 17.3375 16.8141 21.2422 12 21.2422Z"
                fill="black"
              />
            </svg>
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Header />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <TextBoxHeader>Item Code</TextBoxHeader>
                <TextBox
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Text (default)"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextBoxHeader>MRF Serial Number</TextBoxHeader>
                <TextBox
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Text (default)"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextBoxHeader>Serial Number</TextBoxHeader>
                <TextBox
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Text (default)"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextBoxHeader>Item Description</TextBoxHeader>
                <TextBox
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Text (default)"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextBoxHeader>Item Group</TextBoxHeader>
                <TextBox
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Text (default)"
                />
              </Grid>
            </Grid>
            <Divider
              orientation="horizontal"
              variant="middle"
              flexItem
              sx={{ marginTop: "30px" }}
            />

            <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <TextBoxHeader>Customer ID</TextBoxHeader>
                <TextBox
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Text (default)"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextBoxHeader>Customer Name</TextBoxHeader>
                <TextBox
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Text (default)"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextBoxHeader>Contact Person</TextBoxHeader>
                <TextBox
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Text (default)"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <TextBoxHeader>Telephone No</TextBoxHeader>
                <TextBox
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Text (default)"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextBoxHeader>Customer Address ID</TextBoxHeader>
                <TextBox
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Text (default)"
                />
              </Grid>
            </Grid>
            <Divider
              orientation="horizontal"
              variant="middle"
              flexItem
              sx={{ marginTop: "30px" }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6} md={3} spacing={12}>
                <TextBoxHeader>Service Call ID</TextBoxHeader>
                <TextBox
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Text (default)"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <TextBoxHeader>Status</TextBoxHeader>
                <SelectBox
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </SelectBox>
              </Grid>
              <Grid item xs={6} md={3}>
                <TextBoxHeader>Priority</TextBoxHeader>
                <TextBox
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Text (default)"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Box sx={{ flexGrow: 1, py: 1 }}>
            <Grid container spacing={10}>
              <Grid item xs={8} md={10}></Grid>
              <Grid item xs={2} md={1}>
                <ModalButton
                  variant="contained"
                  className="cancelButton"
                  onClick={handleClose}
                >
                  Cancel
                </ModalButton>
              </Grid>
              <Grid item xs={2} md={1}>
                <ModalButton
                  variant="contained"
                  className="ModalCommonButton"
                  onClick={() => {
                    {
                      setOpenModal(true);
                      handleClose();
                    }
                  }}
                >
                  Next
                </ModalButton>
              </Grid>
            </Grid>
          </Box>
        </DialogActions>
      </Modal>

      <CreateServiceCallModal2 open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default CreateServiceCallModal1;
