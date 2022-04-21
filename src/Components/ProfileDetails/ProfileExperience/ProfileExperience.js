import {
  Autocomplete,
  Box,
  Card,
  CardMedia,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
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
import { useLocation, useNavigate } from "react-router-dom";
import BootstrapDialogTitle from "../../../Common/BootstrapDialogTitle";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddIcon from "@mui/icons-material/Add";
import Heading1 from "../../../Common/Heading1";
import Heading2 from "../../../Common/Heading2";
import PrimaryButton from "../../../Common/PrimaryButton";
import Subtitle1 from "../../../Common/Subtitle1";
import Subtitle2 from "../../../Common/Subtitle2";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { countries, top100Films } from "../../../Common/Constants";

function ProfileExperience() {
  const initialValues = {
    title: "",
    employment_type: "Please select",
    company_name: "",
    location: "",
    start_month: "Month",
    end_month: "Month",
    start_year: "Year",
    end_year: "Year",
    currently_working: false,
    industry: "",
    description: "",
  };
  const [formValues, setformValues] = useState(initialValues);
  const [experiences, setExperiences] = useState([]);
  const [isProfile, setIsProfile] = useState(true);
  // const [isExperienceDetails, setIsExperienceDetails] = useState(false);
  const [open, setOpen] = useState(false);
  const [experienceTitle, setExperienceTitle] = useState("");
  const [years, setYears] = useState(["Year"]);
  const [descLen, setDescLen] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const bpSMd = theme.breakpoints.down("sm"); //max-width:599.95px

  const fetchExperiences = async () => {
    const response = await fetch(`http://localhost:5000/experience`);
    const json = await response.json();
    setExperiences([...json]);
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setformValues({ ...formValues, [name]: value });
    if (name === "description") {
      setDescLen(value.length);
    }
  };

  const openExperiences = () => {
    console.log(location.pathname);
    navigate(`${location.pathname}/details/experience`);
  };

  const addExperience = () => {
    setOpen(true);
    setExperienceTitle("Add Experience");
  };

  const editExperience = () => {
    setOpen(true);
    setExperienceTitle("Edit Experience");
  };

  const yearsFn = () => {
    let yr = new Date().getFullYear();
    for (let index = yr; index >= yr - 100; index--) {
      years.push(index);
    }
  };

  useEffect(() => {
    yearsFn();
    fetchExperiences();
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
            {isProfile && location.pathname.includes("experience") && (
              <>
                <IconButton onClick={() => navigate(-1)}>
                  <KeyboardBackspaceIcon />
                </IconButton>
                <Box sx={{ width: "10px" }}></Box>
              </>
            )}
            <Heading1 text={"Experience"} />
          </Box>
          {isProfile && (
            <Box>
              {isProfile && !location.pathname.includes("experience") ? (
                <>
                  <IconButton onClick={addExperience}>
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={openExperiences}>
                    <ModeEditOutlinedIcon />
                  </IconButton>
                </>
              ) : (
                <IconButton onClick={addExperience}>
                  <AddIcon />
                </IconButton>
              )}
            </Box>
          )}
        </Box>
        {experiences &&
          experiences.map((experience, index) => {
            return (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  marginTop: "20px",
                  justifyContent: "space-between",
                }}
                key={experience.id}
              >
                <Box>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 50,
                      height: 50,
                      objectFit: "contain",
                      [bpSMd]: { width: 30, height: 30 },
                    }}
                    image={experience.imageURL}
                    alt={experience.imageURL}
                  />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    // backgroundColor: "#fffccc",
                    margin: "0px 20px",
                  }}
                >
                  <Heading2 text={experience.title} />
                  <Box sx={{ height: "4px" }}></Box>
                  <Subtitle1
                    text={`${experience.company} - ${experience.position}`}
                  />
                  <Box sx={{ height: "4px" }}></Box>
                  <Subtitle2
                    text={`${experience.start_date} - ${experience.end_date}`}
                  />
                  <Box sx={{ marginBottom: "10px" }}></Box>
                  {index !== experiences.length - 1 && <Divider />}
                </Box>
                {isProfile && location.pathname.includes("experience") && (
                  <Box>
                    <IconButton onClick={editExperience}>
                      <ModeEditOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
              </Box>
            );
          })}
      </Card>
      {/* <Box sx={{ height: "20px" }}></Box> */}
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
          {experienceTitle}
        </BootstrapDialogTitle>
        <DialogContent dividers={true}>
          <Subtitle2 text="*Indicates required" />
          {/* title */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <Subtitle1 text="Title*" />
          </Box>
          <TextField
            size="small"
            fullWidth
            inputProps={{ maxLength: 300 }}
            value={formValues.title}
            name="title"
            onChange={handleChanges}
            placeholder="Ex: Full stack developer"
          />
          {/* employement type */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <Subtitle1 text="Employement type" />
          </Box>
          <Select
            fullWidth
            size="small"
            name="employment_type"
            value={formValues.employment_type}
            onChange={handleChanges}
          >
            <MenuItem value="Please select">Please select</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          {/* company name */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <Subtitle1 text="Company name*" />
          </Box>
          <Autocomplete
            options={countries}
            autoHighlight
            freeSolo
            size="small"
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                // label="Choose a country"
                placeholder="Ex: Google"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
          {/* location */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <Subtitle1 text="Location" />
          </Box>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            autoHighlight
            size="small"
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Ex: Hyderabad" />
            )}
          />
          {/* currently working */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <FormControlLabel
              control={<Checkbox />}
              label="I'm currently working here"
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

export default ProfileExperience;
