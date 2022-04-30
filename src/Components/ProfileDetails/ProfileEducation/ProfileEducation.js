import { useTheme } from "@emotion/react";
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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Heading1 from "../../../Common/Heading1";
import Heading2 from "../../../Common/Heading2";
import Subtitle1 from "../../../Common/Subtitle1";
import Subtitle2 from "../../../Common/Subtitle2";
import educationIcon from "../../../Assets/education.png";
import { useLocation, useNavigate } from "react-router-dom";
import BootstrapDialogTitle from "../../../Common/BootstrapDialogTitle";
import { countries, top100Films } from "../../../Common/Constants";
import PrimaryButton from "../../../Common/PrimaryButton";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddIcon from "@mui/icons-material/Add";

function ProfileEducation() {
  const initialValues = {
    college: "",
    degree: "",
    fieldOfStudy: "",
    start_month: "Month",
    end_month: "Month",
    start_year: "Year",
    end_year: "Year",
    grade: "",
    description: "",
  };
  const [formValues, setformValues] = useState(initialValues);
  const [educations, setEducations] = useState([]);
  const [isProfile, setIsProfile] = useState(true);
  const [open, setOpen] = useState(false);
  const [educationTitle, setEducationTitle] = useState("");
  const [years, setYears] = useState(["Year"]);
  const [descLen, setDescLen] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  console.log(userId);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const bpSMd = theme.breakpoints.down("sm");

  const fetchEducations = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`);
    const json = await response.json();
    console.log(json.education);
    setEducations([...json.education]);
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setformValues({ ...formValues, [name]: value });
    if (name === "description") {
      setDescLen(value.length);
    }
  };

  const openEducations = () => {
    console.log(location.pathname);
    navigate(`${location.pathname}/details/education`);
  };

  const handleSave = async (e) => {
    if (
      formValues.college !== "" &&
      formValues.start_month !== "" &&
      formValues.start_year !== "" &&
      formValues.end_month !== "" &&
      formValues.end_year
    ) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          college: formValues.college,
          degree: formValues.degree,
          startDate: formValues.start_month + "," + formValues.start_year,
          endDate: formValues.end_month + "," + formValues.end_year,
          fieldOfStudy: formValues.fieldOfStudy,
          grade: formValues.grade,
          description: formValues.description,
        }),
      };
      const response = await fetch(
        `http://localhost:3001/users/${userId}/education`,
        requestOptions
      );
      const json = await response.json();
      console.log(json);
      if (json.status) {
        e.preventDefault();
        setOpen(false);
        fetchEducations();
      }
    }
  };

  const addEducation = () => {
    setOpen(true);
    setEducationTitle("Add Education");
    setformValues(initialValues);
  };

  const editEducation = (id) => {
    setOpen(true);
    console.log(id);
    setEducationTitle("Edit Education");
    fetchEducation(id);
  };

  const yearsFn = () => {
    let yr = new Date().getFullYear();
    for (let index = yr; index >= yr - 100; index--) {
      years.push(index);
    }
  };

  const fetchEducation = (id) => {
    const selectedEducation = educations.filter(
      (education) => (education._id = id)
    );
    console.log(selectedEducation[0]);
    setformValues({
      college: selectedEducation[0].college,
      degree: selectedEducation[0].degree,
      start_month: selectedEducation[0].startDate.split(",")[0],
      end_month: selectedEducation[0].endDate.split(",")[0],
      start_year: selectedEducation[0].startDate.split(",")[1],
      end_year: selectedEducation[0].endDate.split(",")[1],
      grade: selectedEducation[0].grade,
      description: selectedEducation[0].description,
      fieldOfStudy: selectedEducation[0].fieldOfStudy,
    });
  };

  useEffect(() => {
    yearsFn();
    fetchEducations();
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
            {isProfile && location.pathname.includes("education") && (
              <>
                <IconButton onClick={() => navigate(-1)}>
                  <KeyboardBackspaceIcon />
                </IconButton>
                <Box sx={{ width: "10px" }}></Box>
              </>
            )}
            <Heading1 text={"Education"} />
          </Box>
          {isProfile && (
            <Box>
              {isProfile && !location.pathname.includes("education") ? (
                <>
                  <IconButton onClick={addEducation}>
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={openEducations}>
                    <ModeEditOutlinedIcon />
                  </IconButton>
                </>
              ) : (
                <IconButton onClick={addEducation}>
                  <AddIcon />
                </IconButton>
              )}
            </Box>
          )}
        </Box>
        {educations &&
          educations.map((education, index) => {
            return (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  marginTop: "20px",
                  justifyContent: "space-between",
                }}
                key={index}
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
                    image={educationIcon}
                    alt={educationIcon}
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
                  <Heading2 text={education.college} />
                  <Box sx={{ height: "4px" }}></Box>
                  <Subtitle1
                    text={`${education.degree} ${education.fieldOfStudy}`}
                  />
                  <Box sx={{ height: "4px" }}></Box>
                  <Subtitle2
                    text={`${education.startDate} - ${education.endDate}`}
                  />
                  <Box sx={{ marginBottom: "10px" }}></Box>
                  {index !== educations.length - 1 && <Divider />}
                </Box>
                {isProfile && location.pathname.includes("education") && (
                  <Box>
                    <IconButton onClick={() => editEducation(education._id)}>
                      <ModeEditOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
              </Box>
            );
          })}
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
          {educationTitle}
        </BootstrapDialogTitle>
        <DialogContent dividers={true}>
          <Subtitle2 text="*Indicates required" />
          {/* School name */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <Subtitle1 text="School/College*" />
          </Box>
          <Autocomplete
            freeSolo
            autoHighlight
            size="small"
            // value={countries.filter(
            //   (country) => (country.label = formValues.college)
            // )}
            value={formValues.college || ""}
            name="college"
            onChange={(e, val) => {
              console.log(val);
              formValues.college = val;
            }}
            // getOptionLabel={(option) => option.title || "ss"}
            // renderOption={(props, option) => (
            //   <Box
            //     component="li"
            //     sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            //     {...props}
            //   >
            //     <img
            //       loading="lazy"
            //       width="20"
            //       src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            //       srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            //       alt=""
            //     />
            //     {option.label}({option.code}) +{option.phone}
            //   </Box>
            // )}
            options={countries.map((option) => option.label)}
            renderInput={(params) => (
              <TextField
                {...params}
                // label="Choose a country"
                placeholder="Ex: IIIT Srikakulam"
                // inputProps={{
                //   ...params.inputProps,
                //   autoComplete: "new-password", // disable autocomplete and autofill
                // }}
              />
            )}
          />
          {/* Degree */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <Subtitle1 text="Degree" />
          </Box>
          <Autocomplete
            freeSolo
            autoHighlight
            size="small"
            value={formValues.degree || ""}
            name="degree"
            onChange={(e, val) => {
              console.log(val);
              formValues.degree = val;
            }}
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Ex: Bachelor's" />
            )}
          />
          {/* field of study */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <Subtitle1 text="Field of study" />
          </Box>
          <Autocomplete
            freeSolo
            autoHighlight
            size="small"
            value={formValues.fieldOfStudy || ""}
            name="fieldOfStudy"
            onChange={(e, val) => {
              console.log(val);
              formValues.fieldOfStudy = val;
            }}
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Ex: Business" />
            )}
          />

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
          {/* Grade */}
          <Box sx={{ margin: "15px 0px 5px 0px" }}>
            <Subtitle1 text="Grade" />
          </Box>
          <TextField
            size="small"
            fullWidth
            inputProps={{ maxLength: 300 }}
            value={formValues.grade}
            name="grade"
            onChange={handleChanges}
            placeholder="Ex: 8.5"
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
          <PrimaryButton text="Save" onClick={handleSave} />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProfileEducation;
