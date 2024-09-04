import AppStore from "../../../Assets/App iconer/App-Store.png";
import GooglePlay from "../../../Assets/App iconer/Google-Play.png";

import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Footer.module.scss";

export const Footer = () => {
	return (
		<>
			<footer className={globalStyle.footer}>
				<div className={style.footerWrapper}>
					<div className={style.addresse}>
						<h2 className={globalStyle.subtitle2}>AffaldsGuiden</h2>
						<p className={globalStyle.text}>Øster Uttrupvej 1A</p>
						<p className={globalStyle.text}>9000 Aalborg</p>
					</div>
					<div>
						<img src={AppStore} alt="Link til appstore" />
						<img src={GooglePlay} alt="Link til Play butik" />
					</div>
					<div className={style.socialIcons}>
						<AiOutlineFacebook className={style.icon} />
						<AiOutlineLinkedin className={style.icon} />
						<AiOutlineInstagram className={style.icon} />
					</div>
				</div>
			</footer>
		</>
	);
};
