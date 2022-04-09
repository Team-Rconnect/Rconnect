import { createTheme } from "@mui/material";
import { bgSecondary, primary } from "./Pallete";

export const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = primary;
    return {
      ...styles,
      fontSize: "14px",
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? bgSecondary
        : isFocused
        ? bgSecondary
        : undefined,
      color: isDisabled ? "#ccc" : isSelected ? bgSecondary : data.color,
      cursor: isDisabled ? "not-allowed" : "default",
      ":active": {
        ...styles[":active"],
        color: "#fff",
        backgroundColor: color,
      },
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: primary,
      color: "#fff",
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "#fff",
  }),

  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data,
    opacity: 0.7,
    ":hover": {
      backgroundColor: data,
      color: "white",
      opacity: 1,
    },
  }),
};

export const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: "#ffa500",
    },
  },
  typography: {
    subtitle1: {
      fontSize: "14px",
      letterSpacing: 0.5,
      fontWeight: "500",
    },
    subtitle2: {
      fontSize: "14px",
    },
    body1: {
      fontSize: "16px",
      letterSpacing: 0.4,
    },
    h1: {
      fontSize: "18px",
      fontWeight: "bold",
      letterSpacing: 0.5,
    },
  },
  components: {
    FormControlLabel: {
      root: {
        fontWeight: "400",
        color: "#ff0000",
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            fontWeight: "600",
            letterSpacing: 0.7,
            fontSize: "14px",
            textTransform: "none",
          },
        },
        {
          props: { variant: "contained" },
          style: {
            textTransform: "none",
            fontSize: "15px",
            letterSpacing: 0.5,
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "none",
            fontSize: "15px",
            letterSpacing: 0.5,
          },
        },
      ],
    },
    MuiChip: {
      styles: {
        fontSize: "20px",
      },
    },
  },
});

export const companies = [
  { id: 1, url: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
  { id: 2, url: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
  { id: 3, url: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
  { id: 4, url: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
  {
    id: 5,
    url: "https://profoundedutech.com/blog/wp-content/uploads/2020/11/Wipro_Logo_New.png",
  },
  { id: 6, url: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
  { id: 7, url: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
  { id: 8, url: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
  {
    id: 9,
    url: "https://profoundedutech.com/blog/wp-content/uploads/2020/11/Wipro_Logo_New.png",
  },
  { id: 10, url: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
  { id: 11, url: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
  {
    id: 12,
    url: "https://profoundedutech.com/blog/wp-content/uploads/2020/11/Wipro_Logo_New.png",
  },
  { id: 13, url: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
  { id: 14, url: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
  {
    id: 15,
    url: "https://profoundedutech.com/blog/wp-content/uploads/2020/11/Wipro_Logo_New.png",
  },
  { id: 16, url: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
  { id: 17, url: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
  {
    id: 18,
    url: "https://profoundedutech.com/blog/wp-content/uploads/2020/11/Wipro_Logo_New.png",
  },
];
