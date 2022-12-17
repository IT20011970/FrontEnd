import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../../../../Styles/Modal.css";
import "../../../../Styles/ServiceCall.css";
import Grid from "@mui/material/Grid";
import {useContext, useState} from "react";
import {ServiceContext} from "../../../../api/api";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
const ModalButton = styled(Button)(({ theme }) => ({
    width: "85px",
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
const RemarksTab = (props: any) => {
    const Service =useContext(ServiceContext)
    const [fields, setfields] = useState<any>({})
    function post (){
        console.log(fields)
        if(Service !==undefined){
            Service.addRemark(props.props.serviceCallData.fields.ServiceCallId,fields)
        }
    }
    function handleChangeField(event:any,data:any) {
        fields[data] = event.target.value;
        setfields(fields)
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <TextField
        id="outlined-multiline-static"
        // label="Multiline"
        multiline
        rows={6}
        sx={{ width: "100%" }}
        placeholder="Textarea (default)"
        onChange={e=>handleChangeField(e,"remark")}
        // defaultValue="Default Value"
      />
        <Box sx={{ flexGrow: 1, py: 1 }}>
            <Grid container spacing={10}>
                <Grid item xs={8} md={10}></Grid>
                <Grid item xs={4} md={2}>
                    <ModalButton
                        variant="contained"
                        className="ModalCommonButton"
                        onClick={post}
                        sx={{ width: "300px", mt: 2 }}
                    >
                        Add Remark
                    </ModalButton>
                </Grid>
            </Grid>
        </Box>
    </Box>
  );
};

export default RemarksTab;
