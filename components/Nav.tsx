import styles from "../styles/Nav.module.css";
import { useState } from "react";
import { Stats } from "../lib/stats";
import { NavButton } from "./buttons";
import { ColorScheme } from "../lib/themes";
import Report from "./Report";
import Modal from "./Modal";
import Settings from "./Settings";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

interface NavProps {
  progress: number;
  theme: ColorScheme;
  stats: Stats;
}
const Nav: React.FC<NavProps> = ({ progress, theme, stats }) => {
  const [openReport, setOpenReport] = useState<boolean>(false);
  const [openSettings, setOpenSettings] = useState<boolean>(false);

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.title}>
          <CheckCircleRoundedIcon />
          Pomodoro Timer
        </li>
        <li>
          <NavButton
            onClick={() => setOpenReport(true)}
            style={{ backgroundColor: theme.light }}
          >
            <InsertChartOutlinedIcon />
            Report
          </NavButton>
          {!openReport ? null : (
            <Modal closeModal={setOpenReport}>
              <Report stats={stats} />
            </Modal>
          )}
        </li>
        <li>
          <NavButton
            onClick={() => setOpenSettings(true)}
            style={{ backgroundColor: theme.light }}
          >
            <SettingsIcon />
            Settings
          </NavButton>
          {!openSettings ? null : (
            <Modal closeModal={setOpenSettings}>
              <Settings closeModal={setOpenSettings} />
            </Modal>
          )}
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
