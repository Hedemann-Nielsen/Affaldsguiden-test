import React, { useEffect, useState } from "react";
import style from "./CookieBanner.module.scss";
import globalStyle from "../..//Styles/GlobalStyles.module.scss";

//cookieBanner uden google analytics. Vises hvis brugeren ikke har taget stilling tidligere. Brugeren kan acceptere eller afvise cookies, valget gemmes i localStorage

export const CookieBanner = () => {
	const [showBanner, setShowBanner] = useState(false);

	const cookieOK = () => {
		localStorage.setItem("cookies", JSON.stringify(true));
		setShowBanner(false);
	};

	const cookieDeny = () => {
		localStorage.setItem("cookies", JSON.stringify(false));
		setShowBanner(false);
	};

	useEffect(() => {
		//tager strængen fra localStorage og gemmer den som et JS object i en konstant variabel cookieConsent
		const cookieConsent = JSON.parse(localStorage.getItem("cookies"));
		if (cookieConsent !== true && cookieConsent !== false) {
			setShowBanner(true);
		}
	}, []);

	return (
		<>
			{showBanner && (
				<div className={style.bannerWrapper}>
					<section className={style.banner}>
						<h3>Cookie Meddelelse:</h3>
						<p>
							Vi bruger cookies til at tilpasse indhold og annoncer, tilbyde en
							hurtigere og bedre tingængelig side. Er det okay med dig?
						</p>
						<button onClick={cookieOK} className={globalStyle.styledButton}>
							Ja
						</button>
						<button onClick={cookieDeny} className={globalStyle.styledButton}>
							Nej
						</button>
					</section>
				</div>
			)}
		</>
	);
};
