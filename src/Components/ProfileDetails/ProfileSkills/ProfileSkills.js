import {
  Dialog,
  Box,
  Card,
  Chip,
  IconButton,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Heading1 from "../../../Common/Heading1";
import Select from "react-select";
import PrimaryButton from "../../../Common/PrimaryButton";
import BootstrapDialogTitle from "../../../Common/BootstrapDialogTitle";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { borderDark, primary } from "../../../Common/Pallete";
import makeAnimated from "react-select/animated";
import { colourStyles, Skills } from "../../../Common/Constants";

function ProfileSkills() {
  const [skills, setSkills] = useState([]);
  const [isProfile, setIsProfile] = useState(false);
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const [open, setOpen] = useState(false);
  const animatedComponents = makeAnimated();
  const [skillsList, setSkillsList] = useState([]);

  const fetchSkills = async () => {
    setIsProfile(userId === localStorage.getItem("userId"));
    const response = await fetch(`http://localhost:3001/users/${userId}`);
    const json = await response.json();
    console.log(json.skills);
    setSkills(json.skills);
    const skillarray = [];
    if (json.skills !== undefined) {
      json.skills.map((skill) =>
        skillarray.push({ value: skill, label: skill })
      );
    }
    // for (let index = 0; index < skills.length; index++) {
    //   const jskill = { value: skills[index], label: skills[index] };
    //   skillarray.push(jskill);
    // }
    // setSkills(skillarray);
    console.log(skills, skillarray);
  };

  const editSkills = () => {
    setOpen(true);
    const skillarray = [];
    // skills.map((skill) => skillarray.push({ value: skill, label: skill }));
    // for (let index = 0; index < skills.length; index++) {
    //   const jskill = { value: skills[index], label: skills[index] };
    //   skillarray.push(jskill);
    // }
    // setSkills(skillarray);
    console.log(skills, skillarray);
  };

  const handleSkills = (selectedOptions) => {
    const ss = selectedOptions.map((option) => {
      return option.value;
    });
    console.log(ss);
    setSkillsList(ss);
  };

  const handleSave = async (e) => {
    if (skillsList.length !== 0) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skills: skillsList }),
      };
      const response = await fetch(
        `http://localhost:3001/users/${userId}/skills`,
        requestOptions
      );
      const json = await response.json();
      console.log(json);
      if (json.status === true) {
        e.preventDefault();
        setOpen(false);
        fetchSkills();
      }
    }
  };

  useEffect(() => {
    fetchSkills();
    return () => {
      setSkills([]); // This worked for me
    };
  }, [userId]);

  return (
    <>
      <div>
        <Card sx={{ marginBottom: "15px", padding: "15px 20px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Heading1 text={"Skills"} />
            {isProfile && (
              <IconButton onClick={editSkills}>
                <ModeEditOutlinedIcon />
              </IconButton>
            )}
            {/* {isProfile && <EditIconBtn onClick={editSkills} />} */}
          </Box>
          <Box sx={{ margin: "15px 0px" }}>
            {skills &&
              skills.map((tag, index) => {
                return (
                  <Chip
                    key={index}
                    size="small"
                    label={tag}
                    sx={{
                      margin: "5px",
                      cursor: "pointer",
                      fontSize: "14px",
                      letterSpacing: 0.5,
                      backgroundColor: "white",
                      border: "1px solid " + borderDark,
                      "&:hover": {
                        backgroundColor: primary,
                        color: "white",
                      },
                    }}
                  />
                );
              })}
          </Box>
        </Card>
      </div>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          fetchSkills();
        }}
        scroll={"paper"}
        fullWidth={true}
        maxWidth="sm"
        aria-labelledby="title"
        aria-describedby="description"
      >
        <BootstrapDialogTitle
          id="title"
          onClose={() => {
            setOpen(false);
            fetchSkills();
          }}
        >
          Edit Skills
        </BootstrapDialogTitle>
        {/* <DialogTitle id="title">Edit About</DialogTitle> */}
        <DialogContent dividers={true}>
          <Box sx={{ margin: "5px 0px" }} />
          <Select
            components={animatedComponents}
            options={Skills}
            placeholder={"e.g. IoT"}
            isMulti
            defaultValue={[...skills]}
            menuPortalTarget={document.body}
            // menuPosition={"fixed"}
            onChange={handleSkills}
            styles={colourStyles}
          />
          <Box sx={{ height: "20px" }}></Box>
          {/* <TextField
            id="outlined-multiline-static"
            multiline
            fullWidth
            rows={6}
            inputProps={{ maxLength: 300 }}
            value={about}
            onChange={handleChange}
            placeholder="Enter your about..."
          /> */}
        </DialogContent>
        <DialogActions sx={{ margin: "8px" }}>
          <PrimaryButton text="Save" onClick={handleSave} />
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ProfileSkills;
