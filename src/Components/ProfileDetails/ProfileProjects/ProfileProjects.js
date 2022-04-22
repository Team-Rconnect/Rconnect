import {
  Autocomplete,
  Box,
  Card,
  CardMedia,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  FormControlLabel,
  IconButton,
  MenuItem,
  Select,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Heading1 from "../../../Common/Heading1";
import Heading2 from "../../../Common/Heading2";
import Subtitle1 from "../../../Common/Subtitle1";
import Subtitle2 from "../../../Common/Subtitle2";
import TextButton from "../../../Common/TextButton";
import projectIcon from "../../../Assets/project_icon.png";
import TextIconButton from "../../../Common/TextIconButton";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PrimaryButton from "../../../Common/PrimaryButton";
import BootstrapDialogTitle from "../../../Common/BootstrapDialogTitle";

function ProfileProjects() {
  const initialValues = {
    project_name: "",
    project_url: "",
    start_month: "Month",
    end_month: "Month",
    start_year: "Year",
    end_year: "Year",
    currently_working: false,
    description: "",
  };
  const [formValues, setformValues] = useState(initialValues);
  const [isProfile, setIsProfile] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectsViewCount, setProjectsViewCount] = useState(3);
  const [open, setOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [years, setYears] = useState(["Year"]);
  const [descLen, setDescLen] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const bpSMd = theme.breakpoints.down("sm");

  const fetchProjects = async () => {
    const response = await fetch(`http://localhost:5000/projects`);
    const json = await response.json();
    setProjects([...json]);
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    // console.log(value);
    setformValues({ ...formValues, [name]: value });
    if (name === "description") {
      setDescLen(value.length);
    }
  };

  const openProjects = () => {
    console.log(location.pathname);
    navigate(`${location.pathname}/details/projects`);
  };

  const addProject = () => {
    setOpen(true);
    setProjectTitle("Add Project");
  };

  const editProject = () => {
    setOpen(true);
    setProjectTitle("Edit Project");
  };

  const yearsFn = () => {
    let yr = new Date().getFullYear();
    for (let index = yr; index >= yr - 100; index--) {
      years.push(index);
    }
  };

  const viewProjectsMore = () => {
    console.log(projects.length);
    let c =
      projects.length - projectsViewCount < 3 &&
      projects.length !== projectsViewCount
        ? projectsViewCount + (projects.length - projectsViewCount)
        : projectsViewCount + 3;
    setProjectsViewCount(c > projects.length ? 3 : c);
    console.log(c);
  };

  useEffect(() => {
    yearsFn();
    fetchProjects();
  }, []);

  return (
    <div>
      <Card sx={{ marginBottom: "15px", padding: "15px 20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isProfile && location.pathname.includes("projects") && (
              <>
                <IconButton onClick={() => navigate(-1)}>
                  <KeyboardBackspaceIcon />
                </IconButton>
                <Box sx={{ width: "10px" }}></Box>
              </>
            )}
            <Heading1 text={"Projects"} />
          </Box>
          {isProfile && (
            <Box>
              {isProfile && !location.pathname.includes("projects") ? (
                <>
                  <IconButton onClick={addProject}>
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={openProjects}>
                    <ModeEditOutlinedIcon />
                  </IconButton>
                </>
              ) : (
                <IconButton onClick={addProject}>
                  <AddIcon />
                </IconButton>
              )}
            </Box>
          )}
        </Box>
        {projects &&
          projects.slice(0, projectsViewCount).map((project, index) => {
            return (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  marginTop: "20px",
                  justifyContent: "space-between",
                }}
                key={project.id}
              >
                <Box>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      [bpSMd]: { width: 30, height: 30 },
                    }}
                    image={projectIcon}
                    alt={projectIcon}
                  />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    // backgroundColor: "#fffccc",
                    margin: "0px 20px",
                    [bpSMd]: { margin: "0px 10px" },
                  }}
                >
                  <Heading2 text={project.title} />
                  <Box sx={{ height: "5px" }}></Box>
                  <Subtitle1 text={project.description} />
                  <Box sx={{ height: "5px" }}></Box>
                  <Subtitle2 text={"Jun 2016 - Present"} />
                  <Box sx={{ display: "flex", marginBottom: "10px" }}>
                    <TextButton text={"View project"} />
                  </Box>
                  {index !== projectsViewCount - 1 && <Divider />}
                </Box>
                {isProfile && location.pathname.includes("projects") && (
                  <Box>
                    <IconButton onClick={editProject}>
                      <ModeEditOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
              </Box>
            );
          })}
        <TextIconButton
          text={projectsViewCount >= projects.length ? "SEE LESS" : "SEE MORE"}
          onClick={viewProjectsMore}
          endIcon={
            projectsViewCount >= projects.length ? (
              <KeyboardArrowUpIcon size={20} />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )
          }
        />
      </Card>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        scroll={"paper"}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="sm"
        aria-labelledby="title"
        aria-describedby="description"
      >
        <BootstrapDialogTitle id="title" onClose={() => setOpen(false)}>
          {projectTitle}
        </BootstrapDialogTitle>
        <DialogContent dividers={true}>
          <Subtitle2 text="*Indicates required" />
          {/* title */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <Subtitle1 text="Project name*" />
          </Box>
          <TextField
            size="small"
            fullWidth
            inputProps={{ maxLength: 300 }}
            value={formValues.project_name}
            name="project_name"
            onChange={handleChanges}
          />
          {/* currently working */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <FormControlLabel
              control={<Checkbox />}
              label="I'm currently working on this project"
            />
          </Box>
          {/* Start date */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <Subtitle1 text="Start date*" />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Select
              fullWidth
              size="small"
              name="start_month"
              value={formValues.start_month}
              onChange={handleChanges}
            >
              {[
                "Month",
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month, index) => {
                return (
                  <MenuItem value={month} key={index}>
                    {month}
                  </MenuItem>
                );
              })}
            </Select>
            <Box sx={{ width: "15px" }}></Box>
            <Select
              fullWidth
              size="small"
              name="start_year"
              value={formValues.start_year}
              onChange={handleChanges}
            >
              {years.map((year, index) => {
                return (
                  <MenuItem value={year} key={index}>
                    {year}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
          {/* End date */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <Subtitle1 text="End date*" />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Select
              fullWidth
              size="small"
              name="end_month"
              value={formValues.end_month}
              onChange={handleChanges}
            >
              {[
                "Month",
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month, index) => {
                return (
                  <MenuItem value={month} key={index}>
                    {month}
                  </MenuItem>
                );
              })}
            </Select>
            <Box sx={{ width: "15px" }}></Box>
            <Select
              fullWidth
              size="small"
              name="end_year"
              value={formValues.end_year}
              onChange={handleChanges}
            >
              {years.map((year, index) => {
                return (
                  <MenuItem value={year} key={index}>
                    {year}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
          {/* url */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <Subtitle1 text="Project URL" />
          </Box>
          <TextField
            size="small"
            fullWidth
            inputProps={{ maxLength: 300 }}
            value={formValues.project_url}
            name="project_url"
            onChange={handleChanges}
          />
          {/* Description */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <Subtitle1 text="Description" />
          </Box>
          <TextField
            multiline
            fullWidth
            rows={4}
            name="description"
            inputProps={{ maxLength: 2000 }}
            value={formValues.description}
            onChange={handleChanges}
          />
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Subtitle1 text={`${descLen} / 2000`} />
          </Box>
        </DialogContent>
        <DialogActions sx={{ margin: "8px" }}>
          <PrimaryButton text="Save" />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProfileProjects;
