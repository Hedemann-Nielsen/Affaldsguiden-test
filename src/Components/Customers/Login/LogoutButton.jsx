import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Login.module.scss";

export const LogoutButton = ({ handleLogout }) => {
	return (
		<div className={style.logOutButtonContainer}>
			<button onClick={handleLogout} className={globalStyle.styledButton}>
				Log ud
			</button>
		</div>
	);
};
