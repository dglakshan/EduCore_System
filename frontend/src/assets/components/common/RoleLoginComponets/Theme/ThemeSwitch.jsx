import { useTheme } from "../../../hooks/useTheme";
import { MoonIcon, SunIcon } from "../../Icons";

export const ThemeSwitch = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 flex items-center justify-center rounded-btn-sm border border-border text-muted hover:border-border-2 hover:text-text"
    >
      {theme === "light" ? <SunIcon size={14} /> : <MoonIcon size={14} />}
    </button>
  );
};
