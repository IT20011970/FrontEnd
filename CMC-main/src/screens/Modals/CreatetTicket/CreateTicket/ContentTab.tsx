import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../../../../Styles/Modal.css";
import "../../../../Styles/ServiceCall.css";

const ContentTab = (props: any) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <TextField
        id="outlined-multiline-static"
        // label="Multiline"
        multiline
        rows={6}
        sx={{ width: "100%" }}
        placeholder="Textarea (default)"
        // defaultValue="Default Value"
      />
    </Box>
  );
};

export default ContentTab;
