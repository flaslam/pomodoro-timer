import styles from "../styles/Nav.module.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTheme } from "@emotion/react";
import { ColorScheme } from "../lib/themes";

interface NavProps {
  progress: number;
  theme: ColorScheme;
}
const Nav: React.FC<NavProps> = ({ progress, theme }) => {
  // const theme = useTheme();

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.title}>
          <CheckCircleRoundedIcon />
          Pomodoro Timer
        </li>
        <li>
          <InsertChartOutlinedIcon />
          Report
        </li>
        <li>
          <SettingsIcon />
          Settings
        </li>
      </ul>

      <div
        className={styles.progressContainer}
        style={{ backgroundColor: theme.darkest }}
      >
        <div
          className={styles.progress}
          style={{
            background: `linear-gradient(to right, #ffffff ${progress}%,rgba(0,0,0,0) ${progress}%)`,
          }}
        ></div>
      </div>
    </nav>
  );
};

export default Nav;
