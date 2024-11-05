import { ThemeEnums } from "@/enums/theme";
import { themeState } from "@/recoils/theme";
import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";

export const useCustomTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const { LIGHT, DARK } = ThemeEnums;

  const onChangeTheme = useCallback(() => {
    setTheme(theme === ThemeEnums.LIGHT ? DARK : LIGHT);
  }, [setTheme, theme]);

  const isThemeLight = useMemo(() => {
    return theme === ThemeEnums.LIGHT;
  }, [theme]);

  return {
    isThemeLight,
    onChangeTheme,
  };
};
