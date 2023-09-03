import { extendTheme } from '@chakra-ui/react';
import { BottomNavigationStyleConfig as BottomNavigation } from 'chakra-ui-bottom-navigation';


/* ------------------------COLOR ------------------------ */

const colors = {
  primary: {
    50: "#e3f9e5",
    100: "#c1eac5",
    200: "#a3da9c",
    300: "#85c973",
    400: "#66b74a",
    500: "#4da031",
    600: "#408026",
    700: "#33601b",
    800: "#253c10",
    900: "#19290a",
  },
  secondary: {
    50: "#ffe4e6",
    100: "#fab2b6",
    200: "#f08088",
    300: "#e6555d",
    400: "#dc2b34",
    500: "#c2181b",
    600: "#991215",
    700: "#700d0f",
    800: "#46080a",
    900: "#210405",
  },
  accent: {
    50: "#ffe5d9",
    100: "#ffccb3",
    200: "#ffb38e",
    300: "#ff9969",
    400: "#ff8045",
    500: "#ff6621",
    600: "#e54e1b",
    700: "#cc3815",
    800: "#b3230e",
    900: "#8a170a",
  },  
};

/* -----------------------------BREAKPOINTS----------------- */

const breakpoints = {
  base: "0px",
  sm: "428px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  '2xl': "1536px",
};

  /* --------------------------BUTTONS------------------------ */
  
  const components = {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: {
          bg: "primary.500",
          color: "white",
          _hover: {
            bg: "primary.400",
          },
        },
      },
      defaultProps: {
        variant: "solid",
      },
    },
  };
  
  
  const theme = extendTheme({
    colors,
    breakpoints,
    components,
  });

  export default theme