import styles from "../styles/Modal.module.css";
import { Stats } from "../lib/stats";

interface ReportProps {
  stats: Stats;
}

const Report: React.FC<ReportProps> = ({ stats }) => {
  return (
    <div>
      <div className={styles.title}>
        <h1>Report</h1>
      </div>
      <div className={styles.body}>
        <p>
          {stats.focusPeriodsTotal} sessions completed. This amounts to{" "}
          {stats.focusPeriodsTotal * 25} minutes of work!
        </p>
      </div>
    </div>
  );
};

export default Report;
