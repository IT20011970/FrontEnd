import * as React from "react";
import { styled, useTheme, makeStyles } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";

import "../Styles/SpareParts.css";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: "#FBFBFB",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  marginLeft: 0,
  border: "1px solid #D6E4EC",
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
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

const RequestButton = styled(Button)(({ theme }) => ({
  width: "auto",
  height: "auto",
  marginTop: "3px",
  backgroundColor: "#0091D5",
  borderRadius: "2px",
  cursor: "pointer",
  fontFamily: "Montserrat",
  fontSize: "14px",
  float: "right",
  boxShadow: "none",
}));

const Container = styled(Paper)(({ theme }) => ({
  padding: 3,
  paddingTop: "20px",
  border: "none",
  boxShadow: "none",
  backgroundColor: "transparent",
}));

const ControlButton = styled(Button)(({ theme }) => ({
  color: "#383838",
  backgroundColor: "transparent",
  boxShadow: "none",
  textTransform: "capitalize",
  fontFamily: "Montserrat",

  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#383838",
    backgroundColor: "#fff",
    fontWeight: 600,
    fontSize: 14,
    fontFamily: "Montserrat",
    textAlign: "left",
    borderBottom: "2px solid rgba(0, 65, 102, 0.2);",
    lineHeight: "1",
    borderLeft: "1px solid rgba(0, 65, 102, 0.2)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Segoe UI",
    color: "#383838",
    borderLeft: "1px solid rgba(0, 65, 102, 0.2)",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(0, 32, 51, 0.05)",
  },
  "&:last-child td, &:last-child th": {
    borderBottom: 0,
  },
  td: {
    borderBottom: 0,
  },
}));

const TablePaginationActions = (props: TablePaginationActionsProps) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handlePageSelection = (page: number) => {
    onPageChange(null, page - 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <Pagination
        count={Math.ceil(count / rowsPerPage)}
        variant="outlined"
        shape="rounded"
        onChange={(event, page) => handlePageSelection(page)}
      />
    </Box>
  );
};

const createData = (
  spid: string,
  description: string,
  type: string,
  remark: string,
  quantity: number,
  attachment: string
) => {
  return { spid, description, type, remark, quantity, attachment };
};

const rows = [
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
  createData(
    "ID_SD1234",
    "Item Description",
    "Type A",
    "Resolution 1",
    100,
    "Attachment"
  ),
].sort((a, b) => (a.quantity < b.quantity ? -1 : 1));

const SpareParts = () => {
  const [searchInput, setSearchInput] = React.useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div
        style={{
          color: "transparent",
          backgroundColor: "transparent",
          height: "0",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper
        diam at eratringilla luctus felis hendrerit sitringilla luctus felis
        hendrerit sit amet. Pellentesque interdum, nisl nec interdum maximus,
        augue d onPageChange amet. Pellentesque interdum, nisl nec interdum
        maximus, augue d onPageChange
      </div>
      <Stack spacing={6} direction="row">
        <Grid container rowSpacing={1}>
          <Grid item xs={6}>
            <Heading>Spare Parts</Heading>
          </Grid>
          <Grid item xs={3} sx={{ pr: 3 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search???"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Grid>
          <Grid item xs={3}>
            <RequestButton variant="contained">
              Create Spare Parts Request
            </RequestButton>
          </Grid>
        </Grid>
      </Stack>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <StyledTableCell>SP ID</StyledTableCell>
                <StyledTableCell align="right">
                  Item Description
                </StyledTableCell>
                <StyledTableCell align="right">Item Type</StyledTableCell>
                <StyledTableCell align="right">Remarks</StyledTableCell>
                <StyledTableCell align="right">
                  Available Quantity
                </StyledTableCell>
                <StyledTableCell align="right">Attachment</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row, i) => (
                <StyledTableRow key={row.spid}>
                  <StyledTableCell
                    sx={{
                      borderLeft: "none",
                    }}
                  >
                    {row.spid + " " + (i * Math.random() * 10).toFixed(3)}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.description +
                      " " +
                      (i * Math.random() * 10).toFixed(3)}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.type + " " + (i * Math.random() * 10).toFixed(3)}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.remark + " " + (i * Math.random() * 10).toFixed(3)}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.quantity + " " + (i * Math.random() * 10).toFixed(3)}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.attachment + " " + (i * Math.random() * 10).toFixed(3)}
                  </StyledTableCell>
                  <StyledTableCell>
                    <ControlButton disableRipple>
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        className="controlButton"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.5 13.125C11.9497 13.125 13.125 11.9497 13.125 10.5C13.125 9.05025 11.9497 7.875 10.5 7.875C9.05025 7.875 7.875 9.05025 7.875 10.5C7.875 11.9497 9.05025 13.125 10.5 13.125Z" />
                        <path d="M20.3046 10.2769C19.5327 8.28033 18.1928 6.55372 16.4503 5.31043C14.7078 4.06715 12.6392 3.36169 10.5002 3.28125C8.36117 3.36169 6.29259 4.06715 4.55012 5.31043C2.80766 6.55372 1.46769 8.28033 0.695834 10.2769C0.643706 10.4211 0.643706 10.5789 0.695834 10.7231C1.46769 12.7197 2.80766 14.4463 4.55012 15.6896C6.29259 16.9329 8.36117 17.6383 10.5002 17.7188C12.6392 17.6383 14.7078 16.9329 16.4503 15.6896C18.1928 14.4463 19.5327 12.7197 20.3046 10.7231C20.3567 10.5789 20.3567 10.4211 20.3046 10.2769ZM10.5002 14.7656C9.65655 14.7656 8.83183 14.5155 8.13036 14.0467C7.42888 13.578 6.88214 12.9118 6.55929 12.1324C6.23643 11.3529 6.15196 10.4953 6.31655 9.66782C6.48114 8.84037 6.8874 8.08031 7.48396 7.48375C8.08051 6.88719 8.84058 6.48093 9.66803 6.31634C10.4955 6.15175 11.3532 6.23622 12.1326 6.55908C12.912 6.88193 13.5782 7.42867 14.0469 8.13015C14.5157 8.83162 14.7658 9.65634 14.7658 10.5C14.7641 11.6308 14.3141 12.7148 13.5145 13.5143C12.715 14.3139 11.631 14.7639 10.5002 14.7656Z" />
                      </svg>
                    </ControlButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {/* {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={12}
        >
          <TablePagination
            rowsPerPageOptions={[10, 15, 20, { label: "All", value: -1 }]}
            colSpan={7}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            // onPageChanged={handlePageChanged}
            SelectProps={{
              inputProps: {
                "aria-label": "rows per page",
              },
              native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </Stack>
      </Container>
    </>
  );
};

export default SpareParts;
