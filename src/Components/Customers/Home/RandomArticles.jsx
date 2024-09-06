import { FaArrowAltCircleRight } from "react-icons/fa";

import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Home.module.scss";
import { Link } from "react-router-dom";

export const RandomArticles = ({ articles }) => {
	if (!articles || articles.length === 0) return null;

	return (
		<div className={style.artikleWrapper}>
			{articles &&
				articles.map((article) => {
					const [firstPart, secondPart] = article.title.split("-");
					return (
						<Link
							to={`/artikler/${article.id}`}
							className={style.articleBox}
							key={article.id}>
							<h2 className={`${globalStyle.subtitle2} ${style.header}`}>
								{firstPart}-
								<span className={style.secondPartText}>{secondPart}</span>
							</h2>
							<p
								className={`${globalStyle.text} ${style.teaserText}`}
								dangerouslySetInnerHTML={{
									__html: `${article.teaser}`,
								}}></p>
							<div className={style.FaArrowAltCircleRightWrapper}>
								<FaArrowAltCircleRight
									className={style.FaArrowAltCircleRight}
								/>
							</div>
						</Link>
					);
				})}
		</div>
	);
};
