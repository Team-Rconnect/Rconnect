import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Heading2 from "../../Common/Heading2";
import TextButton from "../../Common/TextButton";
import Select from "react-select";
import Slider from "@mui/material/Slider";
import makeAnimated from "react-select/animated";
import { colourStyles } from "../../Common/Constants";
import Subtitle3 from "../../Common/Subtitle3";
import PrimaryButton from "../../Common/PrimaryButton";
import UsersContext from "../../Context/UsersContext";

function Filters({ filterUsers }) {
  const theme = useTheme();
  const bpMDd = theme.breakpoints.down("md"); //max-width:899.95px
  const animatedComponents = makeAnimated();

  // const [gender, setGender] = useState("both");
  const {
    searchGender,
    setSearchGender,
    setSearchSkills,
    searchBranches,
    setSearchBranches,
    setSearchYears,
    branchesList,
    setBranchesList,
    yearsList,
    setYearsList,
    skillsList,
    setSkillsList,
  } = useContext(UsersContext);

  const handleBranches = (selectedOptions) => {
    const ss = selectedOptions.map((option) => {
      return option.value;
    });
    setSearchBranches(ss);
    const a = [];
    const sb = ss.map((skill) => {
      a.push({ value: skill, label: skill });
    });
    setBranchesList(a);
    console.log(branchesList, ss, sb, a);
  };

  const handleYears = (selectedOptions) => {
    const ss = selectedOptions.map((option) => {
      return option.value;
    });
    setSearchYears(ss);
    const a = [];
    const sy = ss.map((skill) => {
      a.push({ value: skill, label: skill });
    });
    setYearsList(a);
    console.log(yearsList, ss, sy, a);
  };

  const handleSkills = (selectedOptions) => {
    const ss = selectedOptions.map((option) => {
      return option.value;
    });
    setSearchSkills(ss);
    const a = [];
    const ssk = ss.map((skill) => {
      a.push({ value: skill, label: skill });
    });
    setSkillsList(a);
    console.log(skillsList, ss, ssk, a);
  };

  const handleGenderChange = (event) => {
    // setGender(event.target.value);
    setSearchGender(event.target.value);
    console.log(event.target.value);
  };

  const resetFilters = () => {
    setSearchGender("Both");
    setSearchBranches([]);
    setSearchSkills([]);
    setSearchYears([]);
    setBranchesList([]);
    setSkillsList([]);
    setYearsList([]);
  };

  const branches = [
    { value: "Computer Science", label: "Computer Science" },
    {
      value: "Electronics & Communications",
      label: "Electronics & Communications",
    },
    { value: "Mechanical", label: "Mechanical" },
    { value: "Chemical", label: "Chemical" },
    { value: "Civil", label: "Civil" },
    {
      value: "Materials Science and Metallurgical",
      label: "Materials Science and Metallurgical",
    },
  ];

  const skills = [
    { value: ".NET Development", label: ".NET Development" },
    { value: "Android App Development", label: "Android App Development" },
    { value: "Angular.js Development", label: "Angular.js Development" },
    {
      value: "Artificial Intelligence (AI)",
      label: "Artificial Intelligence (AI)",
    },
    { value: "Backend Development", label: "Backend Development" },
    { value: "Blockchain Development", label: "Blockchain Development" },
    { value: "CAD Design", label: "CAD Design" },
    { value: "Campus Ambassador", label: "Campus Ambassador" },
    { value: "Cloud Computing", label: "Cloud Computing" },
    { value: "Computer Vision", label: "Computer Vision" },
    { value: "Content Writing", label: "Content Writing" },
    { value: "Data Science", label: "Data Science" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Embedded Systems", label: "Embedded Systems" },
    { value: "Flutter Development", label: "Flutter Development" },
    { value: "Front End Development", label: "Front End Development" },
    { value: "Full Stack Development", label: "Full Stack Development" },
    { value: "Game Development", label: "Game Development" },
    { value: "Graphic Design", label: "Graphic Design" },
    { value: "Human Resources (HR)", label: "Human Resources (HR)" },
    { value: "Industrial Design", label: "Industrial Design" },
    { value: "Internet of Things (IoT)", label: "Internet of Things (IoT)" },
    { value: "Java Development", label: "Java Development" },
    { value: "Javascript Development", label: "Javascript Development" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Mechatronics", label: "Mechatronics" },
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "Node.js Development", label: "Node.js Development" },
    { value: "PHP Development", label: "PHP Development" },
    { value: "Product Management", label: "Product Management" },
    { value: "Programming", label: "Programming" },
    { value: "Python/Django Development", label: "Python/Django Development" },
    { value: "Robotics", label: "Robotics" },
    {
      value: "Search Engine Optimization (SEO)",
      label: "Search Engine Optimization (SEO)",
    },
    { value: "Social Media Marketing", label: "Social Media Marketing" },
    { value: "Software Development", label: "Software Development" },
    { value: "Software Testing", label: "Software Testing" },
    { value: "Statistics", label: "Statistics" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    { value: "Volunteering", label: "Volunteering" },
    { value: "Web Development", label: "Web Development" },
    { value: "Wordpress Development", label: "Wordpress Development" },
  ];

  const years = [
    {
      value: "1st year",
      label: "1st Year",
    },
    {
      value: "2nd year",
      label: "2nd Year",
    },
    {
      value: "3rd year",
      label: "3rd Year",
    },
    {
      value: "4th year",
      label: "4th Year",
    },
  ];

  const experience = [
    { value: 0, label: "0" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
  ];

  function valuetext(value) {
    return `${value} months`;
  }

  return (
    <Box
      sx={{
        width: 350,
        maxHeight: "80vh",
        borderRadius: "15px",
        backgroundColor: "#fff",
        padding: "15px",
        overflow: "auto",
        boxShadow: "0 0 10px -2px #d1e3fa",
        [bpMDd]: { display: "none" },
      }}
    >
      {/* filters heading */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Heading2 text={"Filters"} />
        <TextButton text={"Reset Filter"} onClick={resetFilters} />
      </Box>
      <Divider sx={{ margin: "10px 0px" }} />
      {/* branches */}
      <Box>
        <Box sx={{ margin: "15px 0px" }} />
        <Subtitle3 text={"Branch"} />
        <Box sx={{ margin: "5px 0px" }} />
        <Select
          components={animatedComponents}
          options={branches}
          placeholder={"e.g. Computer science"}
          isMulti
          value={branchesList && [...branchesList]}
          onChange={handleBranches}
          styles={colourStyles}
        />
      </Box>
      {/* year */}
      <Box>
        <Box sx={{ margin: "15px 0px" }} />
        <Subtitle3 text={"Year"} />
        <Box sx={{ margin: "5px 0px" }} />
        <Select
          components={animatedComponents}
          options={years}
          placeholder={"e.g. 4th Year"}
          isMulti
          value={yearsList && [...yearsList]}
          onChange={handleYears}
          styles={colourStyles}
        />
      </Box>
      {/* skills */}
      <Box>
        <Box sx={{ margin: "15px 0px" }} />
        <Subtitle3 text={"Skills"} />
        <Box sx={{ margin: "5px 0px" }} />
        <Select
          components={animatedComponents}
          options={skills}
          placeholder={"e.g. IoT"}
          isMulti
          value={skillsList && [...skillsList]}
          onChange={handleSkills}
          styles={colourStyles}
        />
      </Box>
      {/* experience */}
      <Box sx={{ width: 300 }}>
        <Box sx={{ margin: "15px 0px" }} />
        <Subtitle3 text={"Experience(In months)"} />
        <Box sx={{ margin: "5px 0px" }} />
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={1}
          valueLabelDisplay="auto"
          marks={experience}
          min={0}
          max={12}
          sx={{ margin: "5px 5px" }}
        />
      </Box>
      {/* gender */}
      <Box sx={{ width: 300 }}>
        <Box sx={{ margin: "20px 0px" }} />
        <Subtitle3 text={"Gender"} />
        <Box sx={{ margin: "5px 0px" }} />
        <FormControl>
          {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
          <RadioGroup
            row
            // aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={searchGender}
            onChange={handleGenderChange}
          >
            <FormControlLabel
              value="Female"
              control={<Radio size="small" />}
              label="Female"
            />
            <FormControlLabel
              value="Male"
              control={<Radio size="small" />}
              label="Male"
            />
            <FormControlLabel
              value="Both"
              control={<Radio size="small" />}
              label="Both"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      {/* <Divider sx={{ margin: "10px 0px" }} />
      <Box sx={{ margin: "20px 0px 10px 0px" }}>
        <Button variant="contained" fullWidth={true}>
          Filter Profiles
        </Button>
      </Box> */}
    </Box>
  );
}

export default Filters;
