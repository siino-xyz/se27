import { createGlobalTheme } from "@vanilla-extract/css";
export const vars = createGlobalTheme(":root", {
  space: {
    none: "0",
    small: "4px",
    medium: "8px",
    large: "16px",
    "1/2": "50%",
    "1/5": "20%",
  },
  color: {
    white: "#e0e0e0",
    black: "#1a1a1a",
    main: "#7e8bef",
    accent: "#f39423",
    lightGray: "#bbbbbb",
    midGray: "#6d6d6d",
    deepGray: "#444444",
  },
  fontFamily: {
    body: '-apple-system, "Segoe UI", Verdana, Arial',
  },
  fontSize: {
    paragraph: "1rem",
  },
  gridRepeat: {
    "4x": "repeat(4, 1fr)",
  },
});
