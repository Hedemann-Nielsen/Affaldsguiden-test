import ReactModal from "react-modal";
import style from "../../Styles/GlobalStyles.module.scss";

ReactModal.setAppElement("#root"); // Sættes for at sikre, at skærmlæsere ikke ser hovedindholdet(indholdet bag modalen), mens modalen er åben.

export function ForgotPasswordModal({ isOpen, onRequestClose, children }) {
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel="Modal"
			className={style.modal}
			overlayClassName={style.overlay}>
			{children}
		</ReactModal>
	);
}
