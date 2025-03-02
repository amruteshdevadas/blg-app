import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6F61", // Soft warm red
    },
    secondary: {
      main: "#6B705C", // Earthy green
    },
    background: {
      default: "#FAF3E0", // Warm beige
      paper: "#FFFFFF",
    },
    text: {
      primary: "#403D39", // Dark brown
      secondary: "#77736B", // Muted gray-brown
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Inter', sans-serif",
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
      color: "#403D39",
    },
    button: {
      textTransform: "none",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
});

export default theme;
