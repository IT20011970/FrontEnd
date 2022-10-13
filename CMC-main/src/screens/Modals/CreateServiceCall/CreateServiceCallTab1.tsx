import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "../../../Styles/Modal.css";
import {number, string} from "prop-types";
import Autocomplete from '@mui/material/Autocomplete';
import {useEffect, useState} from "react";


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
  const [formInput, setFormInput] = useState({
    email: "a",
    password: "a",
  });

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
      label: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      label: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
      label: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
      label: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
      label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
      label: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
      label: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
  ];


  useEffect (()=>{
    fields["ServiceCallId"]= Math.floor(Math.random()*1000000)
    props.setfields({fields})
    if(props.valueNext==="true"){
      setnext("true")
      handleValidation()
    }
  },[])


  function handleChange(e:any,f:any) {
    // let field=fields
    fields[f] = e.target.value;
    handleValidation()
  }
  function select() {
    let field=fields
    if(!fields["Status"])
    field["Status"] = "0";
    // setfields({Status:"0"})
    handleValidation()
  }

 function handleValidation(){
    console.log(typeof fields["ItemGroup"])
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
              if(data.statusCode===404){
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
             if(data.statusCode===404){
               setfields(fields)
               props.setfields({fields})
               console.log(data.statusCode)
             }
             else{

               // console.log(data)
               fields["CustomerID"] = data.CustomerId
               fields["ContactPerson"] = data.ContactPerson
               fields["CustomerName"] = data.CustomeName
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
       errors["Status"] = "Please Enter Status";
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
            <TextBoxHeader>Customer Name</TextBoxHeader>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                renderInput={(params) => <TextField
                    variant="outlined"
                    placeholder="Text (default)"
                    sx={{ width: "99%" }}
                    value={fields["CustomerID"]}
                    onChange={(e) => handleChange(e,"CustomerID") }
                    onFocus={(e) => handleChange(e,"CustomerID") }{...params} label="Movie"
                /> }
            />
            <span style={{color: "red"}}>{errors["CustomerName"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Customer ID</TextBoxHeader>
            <TextBox
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
            <TextBoxHeader>Contact Person</TextBoxHeader>
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
        </Grid>
        <Grid container spacing={2}>
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
            <TextBoxHeader>Item Description</TextBoxHeader>
            <TextBox
                id="outlined-basic"
                variant="outlined"
                placeholder="Text (default)"
                value={fields["ItemDescription"]}
                sx={{ width: "99%" }}
                onChange={(e) => handleChange(e,"ItemDescription") }
                onFocus={(e) => handleChange(e,"ItemDescription") }
            />
            <span style={{color: "red"}}>{errors["ItemDescription"]}</span>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextBoxHeader>Item Group</TextBoxHeader>
            <SelectBox
                labelId="demo-simple-select-label"
                id="demo-simple-select1"
                sx={{ width: "99%" }}
                defaultValue=""
                onChange={(e) => handleChange(e,"ItemGroup") }
            >
              <MenuItem value={"High"}>High</MenuItem>
              <MenuItem value={"Medium"}>Medium</MenuItem>
              <MenuItem value={"Low"}>Low</MenuItem>
            </SelectBox>
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
              defaultValue=""
                onChange={(e) => handleChange(e,"Status") }
                onFocus={ select }
            >
              <MenuItem value={"Pending"}>Pending</MenuItem>
              <MenuItem value={"Complete"}>Complete</MenuItem>
              <MenuItem value={"Hold"}>Hold</MenuItem>
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
