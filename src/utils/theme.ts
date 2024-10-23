import { ThemeEnums } from "@enums/theme";

// 현재 사용자의 시스템 테마를 확인
export const getUserTheme = (): ThemeEnums => {
  const { LIGHT, DARK } = ThemeEnums;

  const isBrowserDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return isBrowserDarkMode ? DARK : LIGHT;
};
