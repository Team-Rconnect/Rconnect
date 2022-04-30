import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import Navbar from "../Navbar/Navbar";
import HeadingMD from "../../Common/HeadingMD";
import { primary } from "../../Common/Pallete";
import UsersContext from "../../Context/UsersContext";
// import { Button } from "@mui/material";

function createData(name, university_id, batch, branch, email, phn_no) {
  return {
    name,
    university_id,
    batch,
    branch,
    email,
    phn_no,
  };
}

// const rows = [
//   createData("Cupcake", 305, 3.7, 67, 4.3, 8317566250),
//   createData("Donut", 452, 25.0, 51, 4.9, 8464953414),
//   createData("Eclair", 262, 16.0, 24, 6.0, 9989858466),
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 8317566250),
//   createData("Gingerbread", 356, 16.0, 49, 3.9, 8464953414),
//   createData("Honeycomb", 408, 3.2, 87, 6.5, 9989858466),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 8317566250),
//   createData("Jelly Bean", 375, 0.0, 94, 0.0, 8464953414),
//   createData("KitKat", 518, 26.0, 65, 7.0, 8317566250),
//   createData("Lollipop", 392, 0.2, 98, 0.0, 9989858466),
//   createData("Marshmallow", 318, 0, 81, 2.0, 8464953414),
//   createData("Nougat", 360, 19.0, 9, 37.0, 8317566250),
//   createData("Oreo", 437, 18.0, 63, 4.0, 9989858466),
// ];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Student Name",
  },
  {
    id: "university_id",
    numeric: true,
    disablePadding: false,
    label: "University ID",
  },
  {
    id: "batch",
    numeric: true,
    disablePadding: false,
    label: "Batch",
  },
  {
    id: "branch",
    numeric: true,
    disablePadding: false,
    label: "Branch",
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "phn_no",
    numeric: true,
    disablePadding: false,
    label: "Mobile",
  },
];

function GroupDashboardHead(props) {
  const {
    // onSelectAllClick,
    order,
    orderBy,
    // numSelected,
    // rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead
      sx={
        {
          // backgroundColor: primary,
          // color: "white",
          // "&:hover": {
          //   color: "white",
          // },
        }
      }
    >
      <TableRow>
        <TableCell
        // sx={{
        //   color: "white",
        //   "&:hover": {
        //     color: "white",
        //   },
        // }}
        >
          S. No
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            // sx={{
            //   color: "white",
            //   "&:hover": {
            //     color: "white",
            //   },
            // }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              // sx={{
              //   color: "white",
              //   "&:hover": {
              //     color: "white",
              //   },
              // }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

GroupDashboardHead.propTypes = {
  // numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  // onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  // rowCount: PropTypes.number.isRequired,
};

// const GroupDashboardToolbar = (props) => {
// const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//      ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(
//               theme.palette.primary.main,
//               theme.palette.action.activatedOpacity
//             ),
//         }),
//       }}
//     >
//    {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//        {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )}

//    {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// GroupDashboardToolbar.propTypes = {
// numSelected: PropTypes.number.isRequired,
// };

export default function GroupDashboard() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("university_id");
  // const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  // const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const userCtx = React.useContext(UsersContext);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = rows.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelected(newSelected);
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  // const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - userCtx?.users?.length)
      : 0;

  return (
    <div>
      <Navbar />
      <Box sx={{ padding: "25px" }}>
        {/* Header and create button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <HeadingMD text="Group Members" />
            <Box
              sx={{
                height: "4px",
                width: "60px",
                margin: "5px 0px 4px 0px",
                backgroundColor: primary,
              }}
            ></Box>
            <Box
              sx={{
                height: "4px",
                width: "35px",
                backgroundColor: primary,
              }}
            ></Box>
          </Box>
          {/* <Button variant="contained" startIcon={<AddIcon />}>
            Create group
          </Button> */}
        </Box>
        <Paper sx={{ width: "100%", marginTop: "30px" }}>
          {/* <GroupDashboardToolbar 
          // numSelected={selected.length} 
          /> */}
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={"medium"}
            >
              <GroupDashboardHead
                // numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                // onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                // rowCount={userCtx.users && userCtx.users.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                {userCtx.users &&
                  stableSort(userCtx?.users, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      // const isItemSelected = isSelected(row.name);
                      const labelId = `enhanced-table-checkbox-${index}`;
                      // console.log(row);

                      return (
                        <TableRow
                          hover
                          // onClick={(event) => handleClick(event, row.name)}
                          role="checkbox"
                          // aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={index}
                          // selected={isItemSelected}
                        >
                          {/* <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell> */}
                          <TableCell component="th" scope="row">
                            {index + 1}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {row.name.first + row.name.last}
                          </TableCell>
                          <TableCell align="right">
                            {row.university_id || 160000 + index + 1}
                          </TableCell>
                          <TableCell align="right">
                            {row.batch || 2015 + index + 1}
                          </TableCell>
                          <TableCell align="right">
                            {row.branch || "CSE"}
                          </TableCell>
                          <TableCell align="right">{row.email}</TableCell>
                          <TableCell align="right">{row.phone}</TableCell>
                        </TableRow>
                      );
                    })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={(userCtx.users && userCtx?.users.length) || 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        {/* <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        /> */}
      </Box>
    </div>
  );
}
