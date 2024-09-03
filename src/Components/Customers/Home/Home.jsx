import globalStyle from "../../../Styles/globalStyles.module.scss";
import style from "./Home.module.scss";

export const Home = () => {
	return (
		<>
			<main className={globalStyle.main}>
				<p className={style.main}>Her er main sektion fra home</p>
			</main>
		</>
	);
};
