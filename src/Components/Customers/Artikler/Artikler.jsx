import { Link } from "react-router-dom";
import { useArticlesData } from "../../Hooks/ArticlesData";
import { formatDate } from "../../Utils/DateUtils.jsx";

import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Artikler.module.scss";

export const Artikler = () => {
	const articlesData = useArticlesData();
	// console.log(articlesData);

	return (
		<>
			<div className={style.artikler}>
				<h1 className={globalStyle.title}>Artikler</h1>
				<div className={style.articleWrapper}>
					{articlesData &&
						articlesData.map((article) => {
							return (
								<Link
									key={article.id}
									to={`/artikler/${article.id}`}
									className={`${style.articleContainer} ${globalStyle.Link}`}>
									<img
										src={article.image_url}
										alt={`${article.title} billede`}
									/>
									<div>
										<h2 className={globalStyle.subtitle2}>{article.title}</h2>
										<p className={globalStyle.text}>
											{formatDate(article.published_at)}
										</p>
										<p className={globalStyle.text}>{article.teaser}</p>
									</div>
								</Link>
							);
						})}
				</div>
			</div>
		</>
	);
};
