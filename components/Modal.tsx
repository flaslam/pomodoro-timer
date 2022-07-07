import styles from "../styles/Modal.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface ModalProps {
  children?: JSX.Element;
  closeModal(status: boolean): void;
}

const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
  return (
    <div className={styles.modalBackground} onClick={() => closeModal(false)}>
      <div className={styles.modalContainer}>
        <button onClick={() => closeModal(false)} className={styles.close}>
          <CloseRoundedIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
