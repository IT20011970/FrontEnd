import React, {useContext} from "react"
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import { withStyles } from "@material-ui/core/styles";
import Select from "@mui/material/Select";
import "../../../Styles/Modal.css";
import {number, string} from "prop-types";
import Autocomplete from '@mui/material/Autocomplete';
import {useEffect, useState} from "react";
import MuiMenuItem from "@material-ui/core/MenuItem";
import {ServiceContext} from "../../../api/api"
import {CustomerList, Item, ServiceCallData2} from "../../../Types/Types"
import {FormLabel} from "@mui/material"

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
  borderRadius: "8px",
  // minWidth: "250px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    height: "40px",
    width: "auto",
    // padding: "10px",
  },
}));

const TextSearch = styled(Autocomplete)(({ theme }) => ({
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
  boxSizing: "content-box",
  // "& .MuiSelect-select": {
  //   borderRadius: "4px",
  //   height: "40px",
  //   width: "auto",
  //   // padding: "10px",
  // },
}));


const SelectBox = styled(Select)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "left",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: 400,
  color: "#383838",
  borderRadius: "4px",
  height: "40px",
  boxSizing: "content-box",
  // "& .MuiSelect-select": {
  //   borderRadius: "4px",
  //   height: "40px",
  //   width: "auto",
  //   // padding: "10px",
  // },
}));

const MenuItem = withStyles({
  root: {
    justifyContent: "left"
  }
})(MuiMenuItem);

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

const Modal = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalTittle = styled("text")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: 24,
  fontWeight: 700,
}));

const CreateServiceCallModal1 = (props: any) => {
  const [fields, setfields] = useState<any>({});
  const [errors,seterrors]=useState<any>({})
  const [next,setnext]=useState("")
  const [flag,setFlag]=useState("0")
  const [category, setCategory] = useState('');
  const Service =useContext(ServiceContext)
  const [data, setData] =React.useState<ServiceCallData2[]>([]);
  const tags = ["perimeter", "Algebra", "equation", "square root"];
  const [arr,setArray]=useState<CustomerList[]>([])
  const [arrItem,setArrayItem]=useState<Item[]>([])
 
  
  const [formInput, setFormInput] = useState({
    email: "a",
    password: "a",
  });

  // React.useEffect(() => {
  //   getData()
  // });

  function getData (){
    if(Service !==undefined){
      Service.getCustomerList().then((result)=>{
        console.log(result)
        setArray(result)
      })
      Service.getItemList().then((result)=>{
        console.log(result)
        setArrayItem(result)
      })
    }
    
  }

  useEffect (()=>{
   // arr.push("sss")
    //setArray("sss")
    console.log(fields)
    fields["ServiceCallId"]= Math.floor(Math.random()*1000000)
    props.setfields({fields})
    if(props.valueNext==="true"){
      setnext("true")
      // handleValidation()
    }
    // const requestOptions = {
    //   method: 'GET',
    //   headers: {'Content-Type': 'application/json'}
    // };
    // fetch('http://localhost:3000/service-calls/list',requestOptions)
    //     .then(response=>{ return response.json()})
    //     .then(data=>{
    //       setArray(data)
    //     })
    getData()
   
  },[])


  function handleChange(e:any,f:any) {
    // let field=fields
    fields[f] = e.target.value;
    //setfields( fields )
    handleValidation()
    console.log(typeof fields["ContactPerson"])
    console.log(typeof fields["CustomerName"])
    console.log(  fields["ContactPerson"])
    console.log(  fields["CustomerName"])
    console.log( fields)
  }
  // function hc(){
  //   console.log("d")
  // }
  const handleInput = (e: React.SyntheticEvent, value: string[]) => {
    console.log(value);
  };
  const hc = (e:any,field: any,value:any) => {
    console.log(value)
    if(value!=null){
      fields["CustomerName"]=value.label
      const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      };
      fetch('http://localhost:3000/service-calls/name/'+ fields["CustomerName"],requestOptions)
          .then(response=>{ return response.json()})
          .then(data=>{
            console.log(data)
            console.log(data.error==="NotFound")
            if(data.error){
              console.log(data)
              fields["CustomerID"] = ""
              fields["ContactPerson"] =""
              fields["TelephoneNo"] = ""
              fields["AddressId"] = ""
              setfields( fields )
              props.setfields({fields})
              console.log(data.statusCode)
            }
            else{
              // console.log(data)
              fields["CustomerID"] = data.CustomerId
              fields["ContactPerson"] = data.ContactPerson
              fields["TelephoneNo"] = data.TelephoneNo
              fields["AddressId"] = data.CustomerAddressId
              setfields(fields)
              // setfields( {CustomerID:data.CustomerId,ContactPerson:data.ContactPerson,CustomerName:data.CustomeName,TelephoneNo:data.TelephoneNo,AddressId:data.CustomerAddressId} )
              props.setfields({fields})
            }

          })
    }
   
    else{
      fields["CustomerName"]=""
      fields["CustomerID"] = ""
      fields["ContactPerson"] =""
      fields["TelephoneNo"] = ""
      fields["AddressId"] = ""
      setfields( fields )
    }
    
   // setCategory(value);
  };


  const hc1 = (e:any,field: any,value:any) => {
    console.log(value)
    if (value != null) {
      fields["ItemDescription"] = value.label
      const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      };
      fetch('http://localhost:3000/service-calls/itemName/' + fields["ItemDescription"], requestOptions)
          .then(response => {
            return response.json()
          })
          .then(data => {
            console.log(data)
            console.log(data.error === "NotFound")
            if (data.error) {
              console.log(data)
              fields["ItemCode"] = ""
              fields["MrfSerialNumber"] = ""
              fields["SerialNumber"] = ""
              fields["ItemDescription"] = ""
              fields["ItemGroup"] = ""
              setfields(fields)
              props.setfields({fields})
              console.log(data.statusCode)
            } else {
               console.log(data)
              fields["ItemCode"] = data.ItemCode
              fields["MrfSerialNumber"] = data.MrfSerialNumber
              fields["SerialNumber"] = data.SerialNumber
              fields["ItemDescription"] = data.ItemDescription
              fields["ItemGroup"] = data.ItemGroup
              setfields(fields)
              // setfields( {CustomerID:data.CustomerId,ContactPerson:data.ContactPerson,CustomerName:data.CustomeName,TelephoneNo:data.TelephoneNo,AddressId:data.CustomerAddressId} )
              props.setfields({fields})
            }

          })
    }
    else {
      fields["ItemCode"] = ""
      fields["MrfSerialNumber"] = ""
      fields["SerialNumber"] = ""
      fields["ItemDescription"] = ""
      fields["ItemGroup"] = ""
      setfields( fields )
    }
  }
  
  function select() {
    let field=fields
    if(!fields["Status"])
    field["Status"] = "0";
    // setfields({Status:"0"})
    handleValidation()
  }

 function handleValidation(){
    console.log("............"+typeof fields["CustomerID"])
   // console.log(fields["MRF"])
   // let errors: any = {};
   let formIsValid = true;
   // console.log( typeof fields["Status"])
   //  console.log( fields["Status"])
   //   //ItemCode
    if(typeof fields["ItemCode"] === "string"){
      if (fields["ItemCode"] === "") {
        errors["ItemCode"] = "Please Enter Item Code";
        seterrors(errors)
      }  else {
        errors["ItemCode"] = ""
        seterrors(errors)
        const requestOptions = {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
        };
        fetch('http://localhost:3000/service-calls/item/'+fields["ItemCode"],requestOptions)
            .then(response=>{ return response.json()})
            .then(data=>{
              if(data.error==="NotFound"){
                setfields(fields)
                props.setfields({fields})
              }
              else{
                 console.log(data)
                fields["ItemCode"] = data.ItemCode
                fields["MrfSerialNumber"] = data.MrfSerialNumber
                fields["SerialNumber"] = data.SerialNumber
                fields["ItemDescription"] = data.ItemDescription
                fields["ItemGroup"] = data.ItemGroup
                setfields(fields)
                // setfields( {CustomerID:data.CustomerId,ContactPerson:data.ContactPerson,CustomerName:data.CustomeName,TelephoneNo:data.TelephoneNo,AddressId:data.CustomerAddressId} )
                props.setfields({fields})
              }

            })
      }

     }

  // MRF
   if(typeof fields["MRF"] === "string"){
     if (fields["MRF"]==="") {
       errors["MRF"] = "Please Enter MRF ";
       seterrors(errors)
     }
     else{
       errors["MRF"] = ""
       setfields( fields )
        props.setfields({fields})
       seterrors(errors)
     }
   }

    //SerialNumber
   if(typeof fields["SerialNumber"] === "string"){
     if (fields["SerialNumber"]==="") {
       errors["SerialNumber"] = "Please Enter Serial Number ";
       seterrors(errors)
     }
     else{
       errors["SerialNumber"] = ""
       setfields( fields )
       props.setfields({fields})
       seterrors(errors)
     }
   }
    //ItemDescription
   if(typeof fields["ItemDescription"] === "string"){
     if (fields["ItemDescription"]==="") {
       errors["ItemDescription"] = "Please Enter Item Description ";
       seterrors(errors)
     }
     else{
       errors["ItemDescription"] = ""
       setfields( fields )
       props.setfields({fields})
       seterrors(errors)
     }
   }
  //ItemGroup
   if(typeof fields["ItemGroup"] === "string"){
     if (fields["ItemGroup"]==="") {
       errors["ItemGroup"] = "Please Enter Item Group ";
       seterrors(errors)
     }
     else if (!fields["ItemGroup"].match(/^[a-zA-Z]+$/)) {
       errors["ItemGroup"] = "Only letters ";
       seterrors(errors)
     }
     else{
       errors["ItemGroup"] = ""
       setfields( fields )
       props.setfields({fields})
       seterrors(errors)
     }
   }
   //CustomerID
   if(typeof fields["CustomerID"] === "string") {
     // setfields( {ContactPerson:'',CustomerName:'',TelephoneNo:'',AddressId:''} )
     if (fields["CustomerID"] === "") {
       errors["CustomerID"] = "Please Enter Customer ID ";
       seterrors(errors)
     }  else {
       errors["CustomerID"] = ""
       seterrors(errors)
       const requestOptions = {
         method: 'GET',
         headers: {'Content-Type': 'application/json'}
       };
       fetch('http://localhost:3000/service-calls/'+fields["CustomerID"],requestOptions)
           .then(response=>{ return response.json()})
           .then(data=>{
             console.log(data.error==="NotFound")
             if(data.error){
               console.log(data)
               setfields(fields)
               props.setfields({fields})
               console.log(data.statusCode)
             }
             else{
               // console.log(data)
               fields["CustomerID"] = data.CustomerId
               fields["ContactPerson"] = data.ContactPerson
               // fields["CustomerName"] = data.CustomeName
               fields["TelephoneNo"] = data.TelephoneNo
               fields["AddressId"] = data.CustomerAddressId
               setfields(fields)
               // setfields( {CustomerID:data.CustomerId,ContactPerson:data.ContactPerson,CustomerName:data.CustomeName,TelephoneNo:data.TelephoneNo,AddressId:data.CustomerAddressId} )
                props.setfields({fields})
               }
           })
     }
   }
    //CustomerName
   if(typeof fields["CustomerName"] === "string"){
     if (fields["CustomerName"]==="") {
       errors["CustomerName"] = "Please Enter Customer Name ";
       seterrors(errors)
     }
     else{
       errors["CustomerName"] = ""
       setfields( fields )
       props.setfields({fields})
       seterrors(errors)
     }
   }
   //ContactPerson
   if(typeof fields["ContactPerson"] === "string"){
     if (fields["ContactPerson"]==="") {
       errors["ContactPerson"] = "Please Enter Contact Person ";
       seterrors(errors)
     }
     else{
       errors["ContactPerson"] = ""
       setfields( fields )
       props.setfields({fields})
       seterrors(errors)
     }
   }
    //TelephoneNo
   if(typeof fields["TelephoneNo"] === "string"){
       // if(fields["TelephoneNo"].length===3){
       //   fields["TelephoneNo"]=fields["TelephoneNo"]+"-"
       // }
       // else if(fields["TelephoneNo"].length===4) {
       //   setfields({TelephoneNo: ""})
       // }
     if (fields["TelephoneNo"]==="") {
       errors["TelephoneNo"] = "Please Enter Telephone No";
       seterrors(errors)
     }
     else if (fields["TelephoneNo"].match(/^[0-9]{9}$/)) {
       errors["TelephoneNo"] = "";
       seterrors(errors)
     }
     else{
       errors["TelephoneNo"] = "Invalid Telephone No"
       seterrors(errors)
       setfields( fields )
       props.setfields({fields})
       seterrors(errors)
     }
   }
    //AddressId
   if(typeof fields["AddressId"] === "string"){
     if (fields["AddressId"]==="") {
       errors["AddressId"] = "Please Enter Address Id ";
       seterrors(errors)
     }
     else{
       errors["AddressId"] = ""
       setfields( fields )
       props.setfields({fields})
       seterrors(errors)
     }
   }
  //ServiceCallId
   if(typeof fields["ServiceCallId"] === "string"){
     // fields["ServiceCallId"]= Math.floor(Math.random()*1000000)
     // props.setfields({fields})
     // errors["ServiceCallId"] = ""
     // if (fields["ServiceCallId"]==="") {
     //   errors["ServiceCallId"] = "Please Enter ServiceCall Id ";
     //   seterrors(errors)
     // }
     // else{
     //   fields["ServiceCallId"]= Math.floor(Math.random()*1000000)
     //   errors["ServiceCallId"] = ""
     //   setfields( fields )
     //   props.setfields({fields})
     //   seterrors(errors)
     // }
   }
    //Status
   if(typeof fields["Status"] !== "undefined"){
     if (fields["Status"]==="0") {
      // errors["Status"] = "Please Enter Status";
       seterrors(errors)
     }
     else{
       errors["Status"] = ""
       setfields( fields )
       props.setfields({fields})
       seterrors(errors)
     }
   }
   //Priority
   if(typeof fields["Priority"] === "string"){
     if (fields["Priority"]==="") {
       errors["Priority"] = "Please Enter Priority ";
       seterrors(errors)
     }
     // else if (!fields["Priority"].match(/^[a-zA-Z]+$/)) {
     //   errors["Priority"] = "Only letters ";
     //   seterrors(errors)
     // }
     else{
       errors["Priority"] = ""
       setfields( fields )
       props.setfields({fields})
       seterrors(errors)
     }
   }
   //Begin
   console.log(props.valueNext)
    if(props.valueNext==="true") {
     if(typeof fields["ItemCode"] !== "string") {
       errors["ItemCode"] = "Please Enter Item Code ";
       seterrors(errors)
     }
     if(typeof fields["MRF"] !== "string") {
       errors["MRF"] = "Please Enter MRF ";
       seterrors(errors)
     }
      if(typeof fields["SerialNumber"] !== "string") {
        errors["SerialNumber"] = "Please Enter Serial Number ";
        seterrors(errors)
      }
      if(typeof fields["ItemDescription"] !== "string") {
        errors["ItemDescription"] = "Please Enter Item Description ";
        seterrors(errors)
      }
      if(typeof fields["ItemGroup"] !== "string") {
        errors["ItemGroup"] = "Please Enter Item Group ";
        seterrors(errors)
      }
      if(typeof fields["CustomerID"] !== "string") {
        errors["CustomerID"] = "Please Enter Customer ID ";
        seterrors(errors)
      }
      if(typeof fields["CustomerName"] !== "string") {
        errors["CustomerName"] = "Please Enter Customer Name ";
        seterrors(errors)
      }
      if(typeof fields["ContactPerson"] !== "string") {
        errors["ContactPerson"] = "Please Enter Contact Person ";
        seterrors(errors)
      }
      if(typeof fields["TelephoneNo"] !== "string") {
        errors["TelephoneNo"] = "Please Enter Telephone No ";
        seterrors(errors)
      }
      if(typeof fields["AddressId"] !== "string") {
        errors["AddressId"] = "Please Enter Address Id ";
        seterrors(errors)
      }
      if(typeof fields["CustomerName"] !== "string") {
        errors["CustomerName"] = "Please Enter Customer Name ";
        seterrors(errors)
      }
      // if(typeof fields["ServiceCallId"] !== "string") {
      //   errors["ServiceCallId"] = "Please Enter ServiceCall Id";
      //   seterrors(errors)
      // }
      if(typeof fields["Status"] !== "string") {
        errors["Status"] = "Please Enter Status ";
        seterrors(errors)
      }
      if(typeof fields["Priority"] !== "string") {
        errors["Priority"] = "Please Enter Priority ";
        seterrors(errors)
      }
   }
 }

  // @ts-ignore
  return (
    <>
    <form  className="needs-validation" noValidate>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Customer Name <span style={{color:'red'}}>*</span></TextBoxHeader>
            <Autocomplete
                id="combo-box-demo"
                disablePortal
                options={arr}
                onChange={(e,value) => hc(e,"CustomerName",value)}
                renderInput={(params) => <TextBox
                    {...params}
                    variant="outlined"
                    // value={fields["CustomerName"]}
                     onChange={(e) => handleChange(e,"CustomerName")}
                 //   onFocus={(e) => handleChange(e,"CustomerName")}
                      placeholder="Text (default)"
                    sx={{ width: "99%" ,input: {
                        height: '0rem',
                      },}}
                /> }
            />
            {/*<Autocomplete*/}
            {/*    disablePortal*/}
            {/*    id="combo-box-demo"*/}
            {/*    options={arr}*/}
            {/* //   onChange={hc}*/}
            {/*    sx={{ width: 300 }}*/}
            {/*    renderInput={(params) => <TextBox {...params}  label="Movie" />}*/}
            {/*/>*/}
            <span style={{color: "red"}}>{errors["CustomerName"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Customer ID <span style={{color:'red'}}>*</span></TextBoxHeader>
            <TextBox
                InputLabelProps={{ required: false }}
                required={true}
               id="outlined-basic2"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              value={fields["CustomerID"]}
              onChange={(e) => handleChange(e,"CustomerID") }
              onFocus={(e) => handleChange(e,"CustomerID") }
                />
           
            <span style={{color: "red"}}>{errors["CustomerID"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Contact Person <span style={{color:'red'}}>*</span></TextBoxHeader>
            <TextBox
              id="outlined-basic3"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              value={fields["ContactPerson"]}
              onChange={(e) => handleChange(e,"ContactPerson") }
              onFocus={(e) => handleChange(e,"ContactPerson") }
            />
            <span style={{color: "red"}}>{errors["ContactPerson"]}</span>
        </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Telephone No</TextBoxHeader>
            <TextBox
              id="outlined-basic4"
              variant="outlined"
              placeholder="Text (default)"
              value={fields["TelephoneNo"]}
              sx={{ width: "99%" }}
              onChange={(e) => handleChange(e,"TelephoneNo") }
              onFocus={(e) => handleChange(e,"TelephoneNo") }
            />
            <span style={{color: "red"}}>{errors["TelephoneNo"]}</span>
            </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Customer Address ID</TextBoxHeader>
            <TextBox
              id="outlined-basic"
              variant="outlined"
              placeholder="Text (default)"
              sx={{ width: "99%" }}
              value={fields["AddressId"]}
              onChange={(e) => handleChange(e,"AddressId") }
              onFocus={(e) => handleChange(e,"AddressId") }
            />
            <span style={{color: "red"}}>{errors["AddressId"]}</span>
        </Grid>
        </Grid>
        <Divider
            orientation="horizontal"
            variant="middle"
            flexItem
            sx={{ marginTop: "30px" }}
        />
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <TextBoxHeader>Item Description</TextBoxHeader>
            <Autocomplete
                id="combo-box-demo"
                disablePortal
                options={arrItem}
                onChange={(e,value) => hc1(e,"ItemDescription",value)}
                renderInput={(params) => <TextBox
                    {...params}
                    variant="outlined"
                    // value={fields["CustomerName"]}
                     onChange={(e) => handleChange(e,"ItemDescription")}
                    //   onFocus={(e) => handleChange(e,"CustomerName")}
                    placeholder="Text (default)"
                    sx={{ width: "99%" ,input: {
                        height: '0rem',
                      },}}
                /> }
            />
            {/*<TextBox*/}
            {/*    id="outlined-basic"*/}
            {/*    variant="outlined"*/}
            {/*    placeholder="Text (default)"*/}
            {/*    value={fields["ItemDescription"]}*/}
            {/*    sx={{ width: "99%" }}*/}
            {/*    onChange={(e) => handleChange(e,"ItemDescription") }*/}
            {/*    onFocus={(e) => handleChange(e,"ItemDescription") }*/}
            {/*/>*/}
            <span style={{color: "red"}}>{errors["ItemDescription"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Item Code</TextBoxHeader>
            <TextBox
                id="outlined-basic"
                variant="outlined"
                placeholder="Text (default)"
                sx={{ width: "99%" }}
                value={fields["ItemCode"]}
                name="ItemCode"
                onChange={(e) => handleChange(e,"ItemCode") }
                onFocus={(e) => handleChange(e,"ItemCode") }
            />
            <span style={{color: "red"}}>{errors["ItemCode"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>MRF Serial Number</TextBoxHeader>
            <TextBox
                id="outlined-basic"
                variant="outlined"
                placeholder="Text (default)"
                value={fields["MrfSerialNumber"]}
                sx={{ width: "99%" }}
                onChange={(e) => handleChange(e,"MRF") }
                onFocus={(e) => handleChange(e,"MRF") }
            />
            <br/>
            <span style={{ color: "red" }}>{errors["MRF"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Serial Number</TextBoxHeader>
            <TextBox
                id="outlined-basic"
                variant="outlined"
                value={fields["SerialNumber"]}
                sx={{ width: "99%" }}
                onChange={(e) => handleChange(e,"SerialNumber") }
                onFocus={(e) => handleChange(e,"SerialNumber") }
            />
            <span style={{color: "red"}}>{errors["SerialNumber"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Item Group</TextBoxHeader>
            <TextBox
                id="outlined-basic"
                variant="outlined"
                placeholder="Text (default)"
                sx={{ width: "99%" }}
                value={fields["ItemGroup"]}
                onChange={(e) => handleChange(e,"ItemGroup") }
                onFocus={(e) => handleChange(e,"ItemGroup") }
            />
            <span style={{color: "red"}}>{errors["ItemGroup"]}</span>
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
              sx={{ width: "99%" }}
              value={fields["ServiceCallId"]}
              onChange={(e) => handleChange(e,"ServiceCallId") }
              onFocus={(e) => handleChange(e,"ServiceCallId") }
            />
            <span style={{color: "red"}}>{errors["ServiceCallId"]}</span>
              </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Status</TextBoxHeader>
            <SelectBox
              labelId="demo-simple-select-label"
              id="demo-simple-select1"
              sx={{ width: "99%" }}
              defaultValue="Pending"
                onChange={(e) => handleChange(e,"Status") }
                onFocus={ select }
            >
              <MenuItem value={"Pending"}>Pending</MenuItem>
            </SelectBox>
            <span style={{color: "red"}}>{errors["Status"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Priority</TextBoxHeader>
            <SelectBox
                labelId="demo-simple-select-label"
                id="demo-simple-select1"
                sx={{ width: "99%" }}
                defaultValue=""
                onChange={(e) => handleChange(e,"Priority") }
            >
              <MenuItem value={"High"}>High</MenuItem>
              <MenuItem value={"Medium"}>Medium</MenuItem>
              <MenuItem value={"Low"}>Low</MenuItem>
            </SelectBox>
            <span style={{color: "red"}}>{errors["Priority"]}</span>
          </Grid>
        </Grid>
      </Box>
    </form>
    </>
  );
};

export default CreateServiceCallModal1;
