import styles from "../styles/Modal.module.css";

interface ReportProps {
  closeModal?(status: boolean): void;
}

const Settings: React.FC<ReportProps> = ({ closeModal }) => {
  return (
    <div>
      <div className={styles.title}>
        <h1>Settings</h1>
      </div>
      <div className={styles.body}>{}</div>
      <p>To be added!</p>
      {!closeModal ? null : (
        <div>
          <button onClick={() => closeModal(false)} className={styles.confirm}>
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default Settings;
