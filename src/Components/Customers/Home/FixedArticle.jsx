import { FaArrowAltCircleRight } from "react-icons/fa";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Home.module.scss";

export const FixedArticle = ({ article, imageAlt }) => {
	if (!article) return null;

	return (
		<div className={style.fixedartikleWrapper}>
			<div className={style.contentWrapper}>
				<div className={style.fixedNewsText}>
					<section className={style.fixedarticleBox} key={article.id}>
						<h2 className={`${globalStyle.subtitle2} ${style.header}`}>
							{article.title.split("-")[0]}-
							<span className={style.secondPartText}>
								{article.title.split("-")[1]}
							</span>
						</h2>
						<p
							className={`${globalStyle.text} ${style.teaserText}`}
							dangerouslySetInnerHTML={{
								__html: `${article.teaser}`,
							}}></p>
						<div>
							<FaArrowAltCircleRight className={style.FaArrowAltCircleRight} />
						</div>
					</section>
				</div>
				<img src={article.image_url} alt={imageAlt} />
			</div>
		</div>
	);
};
