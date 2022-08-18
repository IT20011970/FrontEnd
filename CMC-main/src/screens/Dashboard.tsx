import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Header from "./../components/Header";
import {
  SparePartsData,
  ServiceCallData,
  ServiceTicketData,
} from "./../Types/Types";
import ServiceCallTab1 from "./TabScreens/ServiceCall/ServiceCallTab1";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#383838",
    backgroundColor: "#fff",
    fontWeight: 600,
    fontSize: 14,
    fontFamily: "Montserrat",
    textAlign: "left",
    borderBottom: "2px solid rgba(0, 65, 102, 0.2);",
    lineHeight: "1.5",
    padding: 7,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Segoe UI",
    color: "#383838",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(0, 32, 51, 0.05)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    borderBottom: 0,
  },
  td: {
    borderBottom: 0,
    padding: 7,
    // lineHeight: "0.5",
    // borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
  },
}));

const AddButton = styled(Button)(({ theme }) => ({
  color: "#383838",
  backgroundColor: "#fff",
  padding: "30px 30px",
  width: "33%",
  textTransform: "capitalize",
  fontSize: 16,
  fontWeight: 400,
  fontFamily: "Montserrat",
  "&:hover": {
    backgroundColor: "#fff",
  },
}));

const ManageButton = styled(Button)(({ theme }) => ({
  paddingTop: "10px",
  color: "#0091D5",
  backgroundColor: "transparent",
  fontSize: 14,
  fontWeight: 600,
  textTransform: "capitalize",
  fontFamily: "Montserrat",
  "&:hover": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  boxShadow: "none",
}));

const Card = styled(Paper)(({ theme }) => ({
  color: "#383838",
  backgroundColor: "#fff",
  padding: 1,
  width: "50%",
  textTransform: "capitalize",
  fontSize: 16,
  fontWeight: 400,
  textAlign: "center",
  fontFamily: "Montserrat",
  "&:hover": {
    backgroundColor: "#fff",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  border: "none",
  boxShadow: "none",
  width: "24%",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Heading = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  border: "none",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 20,
  fontWeight: 600,
  color: "#383838",
  backgroundColor: "transparent",
}));

const Value = styled(Paper)(({ theme }) => ({
  padding: 1,
  border: "none",
  boxShadow: "none",
  textAlign: "center",
  fontFamily: "Montserrat",
  fontSize: 24,
  fontWeight: 600,
  color: "#383838",
}));

const SubHeading = styled(Paper)(({ theme }) => ({
  padding: 1,
  border: "none",
  boxShadow: "none",
  textAlign: "center",
  fontFamily: "Montserrat",
  fontSize: "1rem",
  fontWeight: 600,
}));

const ItemContainer = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  paddingRight: 0,
  color: theme.palette.text.secondary,
  backgroundColor: "transparent",
  boxShadow: "none",
}));

const Container = styled(Paper)(({ theme }) => ({
  padding: 3,
  paddingTop: "20px",
  border: "none",
  boxShadow: "none",
  backgroundColor: "transparent",
}));

const ContainerHeading = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  paddingLeft: 0,
  border: "none",
  boxShadow: "none",
  fontFamily: "Montserrat",
  fontSize: 18,
  fontWeight: 700,
  color: "#383838",
  backgroundColor: "transparent",
}));

const createData = (
  itemCode: string,
  description: string,
  customer: string,
  status: string,
  createdDate: Date,
  priority: string,
  subject: string
) => {
  return {
    itemCode,
    description,
    customer,
    status,
    createdDate,
    priority,
    subject,
  };
};

const rows: any = [];
for (var i = 0; i < 5; i++) {
  rows.push(
    createData(
      "ITEM_SD",
      "Item Description ID",
      "Customer C",
      "Status S",
      new Date(),
      "Priority P",
      "Subject S"
    )
  );
}

const Dashboard = () => {
  return (
    <>
      <Header />
      <Stack spacing={6} direction="row">
        <AddButton
          variant="contained"
          startIcon={
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 4C23.1 4 28.5 9.4 28.5 16C28.5 22.6 23.1 28 16.5 28C9.9 28 4.5 22.6 4.5 16C4.5 9.4 9.9 4 16.5 4ZM16.5 2C8.8 2 2.5 8.3 2.5 16C2.5 23.7 8.8 30 16.5 30C24.2 30 30.5 23.7 30.5 16C30.5 8.3 24.2 2 16.5 2Z"
                fill="#0091D5"
              />
              <path
                d="M24.5 15H17.5V8H15.5V15H8.5V17H15.5V24H17.5V17H24.5V15Z"
                fill="#0091D5"
              />
            </svg>
          }
        >
          Create Service Call
        </AddButton>

        <AddButton
          variant="contained"
          startIcon={
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 4C23.1 4 28.5 9.4 28.5 16C28.5 22.6 23.1 28 16.5 28C9.9 28 4.5 22.6 4.5 16C4.5 9.4 9.9 4 16.5 4ZM16.5 2C8.8 2 2.5 8.3 2.5 16C2.5 23.7 8.8 30 16.5 30C24.2 30 30.5 23.7 30.5 16C30.5 8.3 24.2 2 16.5 2Z"
                fill="#0091D5"
              />
              <path
                d="M24.5 15H17.5V8H15.5V15H8.5V17H15.5V24H17.5V17H24.5V15Z"
                fill="#0091D5"
              />
            </svg>
          }
        >
          Create Service Ticket
        </AddButton>

        <AddButton
          variant="contained"
          startIcon={
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 4C23.1 4 28.5 9.4 28.5 16C28.5 22.6 23.1 28 16.5 28C9.9 28 4.5 22.6 4.5 16C4.5 9.4 9.9 4 16.5 4ZM16.5 2C8.8 2 2.5 8.3 2.5 16C2.5 23.7 8.8 30 16.5 30C24.2 30 30.5 23.7 30.5 16C30.5 8.3 24.2 2 16.5 2Z"
                fill="#0091D5"
              />
              <path
                d="M24.5 15H17.5V8H15.5V15H8.5V17H15.5V24H17.5V17H24.5V15Z"
                fill="#0091D5"
              />
            </svg>
          }
        >
          Assign Ticket
        </AddButton>
      </Stack>
      <br />
      <Stack spacing={6} direction="row">
        <Card>
          <Grid container rowSpacing={1}>
            <Grid item xs={12}>
              <Heading>Service Calls</Heading>
            </Grid>
            <Grid container rowSpacing={1} item xs={12}>
              <Item>
                <Value>25</Value>
                <SubHeading
                  sx={{
                    color: "#0074AB",
                  }}
                >
                  Open
                </SubHeading>
              </Item>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Item>
                <Value>25</Value>
                <SubHeading
                  sx={{
                    color: "#F98B4D",
                  }}
                >
                  Pending
                </SubHeading>
              </Item>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Item>
                <Value>25</Value>
                <SubHeading
                  sx={{
                    color: "#E74C4C",
                  }}
                >
                  Hold
                </SubHeading>
              </Item>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Item>
                <Value>25</Value>
                <SubHeading
                  sx={{
                    color: "#23C420",
                  }}
                >
                  Complete
                </SubHeading>
              </Item>
            </Grid>
          </Grid>
        </Card>

        <Card>
          <Grid container rowSpacing={1}>
            <Grid item xs={12}>
              <Heading>Service Tickets</Heading>
            </Grid>
            <Grid container rowSpacing={1} item xs={12}>
              <Item>
                <Value>25</Value>
                <SubHeading
                  sx={{
                    color: "#0074AB",
                  }}
                >
                  Open
                </SubHeading>
              </Item>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Item>
                <Value>25</Value>
                <SubHeading
                  sx={{
                    color: "#F98B4D",
                  }}
                >
                  Pending
                </SubHeading>
              </Item>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Item>
                <Value>25</Value>
                <SubHeading
                  sx={{
                    color: "#E74C4C",
                  }}
                >
                  Hold
                </SubHeading>
              </Item>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Item>
                <Value>25</Value>
                <SubHeading
                  sx={{
                    color: "#23C420",
                  }}
                >
                  Complete
                </SubHeading>
              </Item>
            </Grid>
          </Grid>
        </Card>
      </Stack>
      <Container>
        <ContainerHeading>Service Calls & Tickets Summary</ContainerHeading>
      </Container>
      <Container>
        <ContainerHeading>Task Calendar</ContainerHeading>
      </Container>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <ItemContainer>
              <ContainerHeading>Service Calls</ContainerHeading>
            </ItemContainer>
          </Grid>
          <Grid item xs={4}>
            <ItemContainer sx={{ textAlign: "right" }}>
              <ManageButton
                disableRipple
                variant="contained"
                startIcon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    style={{ marginRight: "-30px" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5167 17.36H7.48332C7.29326 17.36 7.1089 17.2951 6.96082 17.1759C6.81274 17.0568 6.70982 16.8906 6.66915 16.705L6.32999 15.135C5.87753 14.9367 5.44851 14.6888 5.05082 14.3958L3.51999 14.8833C3.33879 14.9411 3.14328 14.9351 2.96592 14.8665C2.78856 14.7978 2.64003 14.6705 2.54499 14.5058L1.02499 11.88C0.930939 11.7151 0.895637 11.5232 0.924854 11.3356C0.95407 11.148 1.04608 10.9759 1.18582 10.8475L2.37332 9.76413C2.31932 9.27339 2.31932 8.77821 2.37332 8.28747L1.18582 7.20663C1.04588 7.07811 0.953747 6.90586 0.924526 6.71812C0.895304 6.53037 0.930726 6.33827 1.02499 6.1733L2.54165 3.5458C2.63669 3.38106 2.78523 3.25379 2.96259 3.18512C3.13994 3.11645 3.33545 3.11052 3.51665 3.1683L5.04749 3.6558C5.25082 3.5058 5.46249 3.3658 5.68082 3.23913C5.89165 3.1208 6.10832 3.0133 6.32999 2.91747L6.66999 1.34913C6.71046 1.16346 6.81318 0.997205 6.96111 0.877922C7.10904 0.75864 7.29329 0.693498 7.48332 0.693298H10.5167C10.7067 0.693498 10.8909 0.75864 11.0389 0.877922C11.1868 0.997205 11.2895 1.16346 11.33 1.34913L11.6733 2.9183C11.9067 3.02163 12.135 3.13747 12.3558 3.26663C12.5617 3.3858 12.7608 3.51663 12.9525 3.65747L14.4842 3.16997C14.6652 3.1124 14.8606 3.11844 15.0377 3.1871C15.2149 3.25576 15.3633 3.38291 15.4583 3.54747L16.975 6.17497C17.1683 6.51413 17.1017 6.9433 16.8142 7.20747L15.6267 8.2908C15.6807 8.78154 15.6807 9.27672 15.6267 9.76747L16.8142 10.8508C17.1017 11.1158 17.1683 11.5441 16.975 11.8833L15.4583 14.5108C15.3633 14.6755 15.2147 14.8028 15.0374 14.8715C14.86 14.9401 14.6645 14.9461 14.4833 14.8883L12.9525 14.4008C12.5551 14.6936 12.1263 14.9412 11.6742 15.1391L11.33 16.705C11.2893 16.8905 11.1866 17.0565 11.0386 17.1757C10.8907 17.2948 10.7066 17.3598 10.5167 17.36ZM8.99665 5.6933C8.1126 5.6933 7.26475 6.04449 6.63963 6.66961C6.01451 7.29473 5.66332 8.14258 5.66332 9.02663C5.66332 9.91069 6.01451 10.7585 6.63963 11.3837C7.26475 12.0088 8.1126 12.36 8.99665 12.36C9.88071 12.36 10.7286 12.0088 11.3537 11.3837C11.9788 10.7585 12.33 9.91069 12.33 9.02663C12.33 8.14258 11.9788 7.29473 11.3537 6.66961C10.7286 6.04449 9.88071 5.6933 8.99665 5.6933Z"
                      fill="#0091D5"
                    />
                  </svg>
                }
              >
                Manage Service Calls
              </ManageButton>
            </ItemContainer>
          </Grid>
        </Grid>

        <TableContainer
          component={Paper}
          sx={{
            padding: "10px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Item Code
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Item Description
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Customer
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Status
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Created Date
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Priority
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Subject
                </StyledTableCell>
                <StyledTableCell>Blank</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: ServiceCallData) => (
                <StyledTableRow
                  key={row.itemCode + Math.round(i * Math.random() * 100)}
                >
                  <StyledTableCell
                    sx={{
                      borderLeft: "none",
                    }}
                  >
                    {row.itemCode + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.description + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.customer + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.status + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.createdDate.toString().substring(0, 24)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.priority + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.subject + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  ></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <ItemContainer>
              <ContainerHeading>Service Tickets</ContainerHeading>
            </ItemContainer>
          </Grid>
          <Grid item xs={4}>
            <ItemContainer sx={{ textAlign: "right" }}>
              <ManageButton
                disableRipple
                variant="contained"
                startIcon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    style={{ marginRight: "-30px" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5167 17.36H7.48332C7.29326 17.36 7.1089 17.2951 6.96082 17.1759C6.81274 17.0568 6.70982 16.8906 6.66915 16.705L6.32999 15.135C5.87753 14.9367 5.44851 14.6888 5.05082 14.3958L3.51999 14.8833C3.33879 14.9411 3.14328 14.9351 2.96592 14.8665C2.78856 14.7978 2.64003 14.6705 2.54499 14.5058L1.02499 11.88C0.930939 11.7151 0.895637 11.5232 0.924854 11.3356C0.95407 11.148 1.04608 10.9759 1.18582 10.8475L2.37332 9.76413C2.31932 9.27339 2.31932 8.77821 2.37332 8.28747L1.18582 7.20663C1.04588 7.07811 0.953747 6.90586 0.924526 6.71812C0.895304 6.53037 0.930726 6.33827 1.02499 6.1733L2.54165 3.5458C2.63669 3.38106 2.78523 3.25379 2.96259 3.18512C3.13994 3.11645 3.33545 3.11052 3.51665 3.1683L5.04749 3.6558C5.25082 3.5058 5.46249 3.3658 5.68082 3.23913C5.89165 3.1208 6.10832 3.0133 6.32999 2.91747L6.66999 1.34913C6.71046 1.16346 6.81318 0.997205 6.96111 0.877922C7.10904 0.75864 7.29329 0.693498 7.48332 0.693298H10.5167C10.7067 0.693498 10.8909 0.75864 11.0389 0.877922C11.1868 0.997205 11.2895 1.16346 11.33 1.34913L11.6733 2.9183C11.9067 3.02163 12.135 3.13747 12.3558 3.26663C12.5617 3.3858 12.7608 3.51663 12.9525 3.65747L14.4842 3.16997C14.6652 3.1124 14.8606 3.11844 15.0377 3.1871C15.2149 3.25576 15.3633 3.38291 15.4583 3.54747L16.975 6.17497C17.1683 6.51413 17.1017 6.9433 16.8142 7.20747L15.6267 8.2908C15.6807 8.78154 15.6807 9.27672 15.6267 9.76747L16.8142 10.8508C17.1017 11.1158 17.1683 11.5441 16.975 11.8833L15.4583 14.5108C15.3633 14.6755 15.2147 14.8028 15.0374 14.8715C14.86 14.9401 14.6645 14.9461 14.4833 14.8883L12.9525 14.4008C12.5551 14.6936 12.1263 14.9412 11.6742 15.1391L11.33 16.705C11.2893 16.8905 11.1866 17.0565 11.0386 17.1757C10.8907 17.2948 10.7066 17.3598 10.5167 17.36ZM8.99665 5.6933C8.1126 5.6933 7.26475 6.04449 6.63963 6.66961C6.01451 7.29473 5.66332 8.14258 5.66332 9.02663C5.66332 9.91069 6.01451 10.7585 6.63963 11.3837C7.26475 12.0088 8.1126 12.36 8.99665 12.36C9.88071 12.36 10.7286 12.0088 11.3537 11.3837C11.9788 10.7585 12.33 9.91069 12.33 9.02663C12.33 8.14258 11.9788 7.29473 11.3537 6.66961C10.7286 6.04449 9.88071 5.6933 8.99665 5.6933Z"
                      fill="#0091D5"
                    />
                  </svg>
                }
              >
                Manage Service Tickets
              </ManageButton>
            </ItemContainer>
          </Grid>
        </Grid>

        <TableContainer
          component={Paper}
          sx={{
            padding: "10px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Item Code
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Item Description
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Customer
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Status
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Created Date
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Priority
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Subject
                </StyledTableCell>
                <StyledTableCell>Blank</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: ServiceTicketData) => (
                <StyledTableRow
                  key={row.itemCode + Math.round(i * Math.random() * 100)}
                >
                  <StyledTableCell
                    sx={{
                      borderLeft: "none",
                    }}
                  >
                    {row.itemCode + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.description + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.customer + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.status + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.createdDate.toString().substring(0, 24)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.priority + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.subject + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  ></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <ItemContainer>
              <ContainerHeading>Spare Parts</ContainerHeading>
            </ItemContainer>
          </Grid>
          <Grid item xs={4}>
            <ItemContainer sx={{ textAlign: "right" }}>
              <ManageButton
                disableRipple
                variant="contained"
                startIcon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    style={{ marginRight: "-30px" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5167 17.36H7.48332C7.29326 17.36 7.1089 17.2951 6.96082 17.1759C6.81274 17.0568 6.70982 16.8906 6.66915 16.705L6.32999 15.135C5.87753 14.9367 5.44851 14.6888 5.05082 14.3958L3.51999 14.8833C3.33879 14.9411 3.14328 14.9351 2.96592 14.8665C2.78856 14.7978 2.64003 14.6705 2.54499 14.5058L1.02499 11.88C0.930939 11.7151 0.895637 11.5232 0.924854 11.3356C0.95407 11.148 1.04608 10.9759 1.18582 10.8475L2.37332 9.76413C2.31932 9.27339 2.31932 8.77821 2.37332 8.28747L1.18582 7.20663C1.04588 7.07811 0.953747 6.90586 0.924526 6.71812C0.895304 6.53037 0.930726 6.33827 1.02499 6.1733L2.54165 3.5458C2.63669 3.38106 2.78523 3.25379 2.96259 3.18512C3.13994 3.11645 3.33545 3.11052 3.51665 3.1683L5.04749 3.6558C5.25082 3.5058 5.46249 3.3658 5.68082 3.23913C5.89165 3.1208 6.10832 3.0133 6.32999 2.91747L6.66999 1.34913C6.71046 1.16346 6.81318 0.997205 6.96111 0.877922C7.10904 0.75864 7.29329 0.693498 7.48332 0.693298H10.5167C10.7067 0.693498 10.8909 0.75864 11.0389 0.877922C11.1868 0.997205 11.2895 1.16346 11.33 1.34913L11.6733 2.9183C11.9067 3.02163 12.135 3.13747 12.3558 3.26663C12.5617 3.3858 12.7608 3.51663 12.9525 3.65747L14.4842 3.16997C14.6652 3.1124 14.8606 3.11844 15.0377 3.1871C15.2149 3.25576 15.3633 3.38291 15.4583 3.54747L16.975 6.17497C17.1683 6.51413 17.1017 6.9433 16.8142 7.20747L15.6267 8.2908C15.6807 8.78154 15.6807 9.27672 15.6267 9.76747L16.8142 10.8508C17.1017 11.1158 17.1683 11.5441 16.975 11.8833L15.4583 14.5108C15.3633 14.6755 15.2147 14.8028 15.0374 14.8715C14.86 14.9401 14.6645 14.9461 14.4833 14.8883L12.9525 14.4008C12.5551 14.6936 12.1263 14.9412 11.6742 15.1391L11.33 16.705C11.2893 16.8905 11.1866 17.0565 11.0386 17.1757C10.8907 17.2948 10.7066 17.3598 10.5167 17.36ZM8.99665 5.6933C8.1126 5.6933 7.26475 6.04449 6.63963 6.66961C6.01451 7.29473 5.66332 8.14258 5.66332 9.02663C5.66332 9.91069 6.01451 10.7585 6.63963 11.3837C7.26475 12.0088 8.1126 12.36 8.99665 12.36C9.88071 12.36 10.7286 12.0088 11.3537 11.3837C11.9788 10.7585 12.33 9.91069 12.33 9.02663C12.33 8.14258 11.9788 7.29473 11.3537 6.66961C10.7286 6.04449 9.88071 5.6933 8.99665 5.6933Z"
                      fill="#0091D5"
                    />
                  </svg>
                }
              >
                Manage Spare Parts
              </ManageButton>
            </ItemContainer>
          </Grid>
        </Grid>

        <TableContainer
          component={Paper}
          sx={{
            padding: "10px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Item Code
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Item Description
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Customer
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Status
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Created Date
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Priority
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    borderRight: "1px solid rgba(0, 65, 102, 0.2);",
                  }}
                >
                  Subject
                </StyledTableCell>
                <StyledTableCell>Blank</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: SparePartsData) => (
                <StyledTableRow
                  key={row.itemCode + Math.round(i * Math.random() * 100)}
                >
                  <StyledTableCell
                    sx={{
                      borderLeft: "none",
                    }}
                  >
                    {row.itemCode + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.description + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.customer + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.status + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.createdDate.toString().substring(0, 24)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.priority + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  >
                    {row.subject + Math.round(i * Math.random() * 100)}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 65, 102, 0.2);",
                    }}
                  ></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
