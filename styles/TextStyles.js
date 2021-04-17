import { createTheme } from "baseui";

const primitives = {
  primaryFontFamily: "Varela Round",
};
const overrides = {
  typography: {
    DisplayLarge: {
      fontFamily: "Montserrat",
    },
    DisplayMedium: {
      fontFamily: "Montserrat",
    },
    DisplaySmall: {
      fontFamily: "Montserrat",
    },
    DisplayXSmall: {
      fontFamily: "Montserrat",
    },
  },
};
const theme = createTheme(primitives, overrides);
