import { modularScale } from "polished";

const theme = {
  colors: {
    red: "#F44336",
    pink: "#E91E63",
    purple: "#9C27B0",
    amber: "#FFC107",
    indigo: "#3F51B5",
    blue: "#2196F3",
    lime: "#CDDC39",
    cyan: "#00BCD4",
    blueGrey100: "#CFD8DC",
    blueGrey600: "#546E7A",
    blueGrey700: "#455A64"
  },
  scale: {
    ninth: modularScale(9, 1, "goldenSection"),
    eigth: modularScale(8, 1, "goldenSection"),
    seventh: modularScale(7, 1, "goldenSection"),
    sixth: modularScale(6, 1, "goldenSection"),
    fifth: modularScale(5, 1, "goldenSection"),
    fourth: modularScale(4, 1, "goldenSection"),
    third: modularScale(3, 1, "goldenSection"),
    second: modularScale(2, 1, "goldenSection"),
    first: modularScale(1, 1, "goldenSection"),
    base: modularScale(0, 1, "goldenSection"),
    mFirst: modularScale(-1, 1, "goldenSection"),
    mSecond: modularScale(-2, 1, "goldenSection"),
    mThird: modularScale(-3, 1, "goldenSection")
  }
};

export default theme;
