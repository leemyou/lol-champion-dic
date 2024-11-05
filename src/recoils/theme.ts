import { atom } from "recoil";
import { getUserTheme } from "@utils/theme";

export const themeState = atom({
  key: "themeState",
  default: getUserTheme(),
});
