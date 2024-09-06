import style from "./Loader.module.scss";
import globalStyle from "../../Styles/GlobalStyles.module.scss";

export const Loader = () => {
	return (
		<sektion>
			<p className={`${globalStyle.subtitle2} ${style.text}`}>Loader</p>
			<div className={style.loader}></div>
		</sektion>
	);
};
