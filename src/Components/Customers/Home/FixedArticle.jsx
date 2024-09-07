import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Home.module.scss";

export const FixedArticle = ({ articleWithId2, imageAlt }) => {
	if (!articleWithId2) return null;

	return (
		<div className={style.fixedartikleWrapper}>
			<div className={style.contentWrapper}>
				<div className={style.fixedNewsText}>
					<section
						className={style.fixedarticleWithId2Box}
						key={articleWithId2.id}>
						<h2 className={`${globalStyle.subtitle2} ${style.header}`}>
							{articleWithId2.title.split("-")[0]}-
							<span className={style.secondPartText}>
								{articleWithId2.title.split("-")[1]}
							</span>
						</h2>
						<p
							className={`${globalStyle.text} ${style.teaserText}`}
							dangerouslySetInnerHTML={{
								__html: `${articleWithId2.teaser}`,
							}}></p>
						<Link to={`/artikler/${articleWithId2.id}`}>
							<FaArrowAltCircleRight className={style.FaArrowAltCircleRight} />
						</Link>
					</section>
				</div>
				<img src={articleWithId2.image_url} alt={imageAlt} />
			</div>
		</div>
	);
};
