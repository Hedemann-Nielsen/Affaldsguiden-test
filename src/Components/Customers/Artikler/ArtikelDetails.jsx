import { useLocation } from "react-router-dom";
import { useArticlesData } from "../../Hooks/ArticlesData";
import { useParams } from "react-router-dom";
import { formatDate } from "../../Utils/DateUtils";

import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Artikler.module.scss";

export const ArtikelDetails = () => {
	const { id } = useParams();
	const articlesData = useArticlesData();
	const article = articlesData.find((article) => article.id === parseInt(id));

	if (!article) {
		return <p>Artiklen findes ikke</p>;
	}

	return (
		<div className={style.articleDetails}>
			<h1 className={globalStyle.title}>{article.title}</h1>
			<h2 className={globalStyle.subtitle2}>{article.teaser}</h2>
			<p className={globalStyle.text}>{formatDate(article.published_at)}</p>
			<img
				src={article.image_url}
				alt={`${article.title} billede`}
				className={style.articleImage}
			/>

			{/* Bruger dangerouslySetInnerHTML til at fjerne alle tags*/}
			<div dangerouslySetInnerHTML={{ __html: article.html_content }} />

			{/* Inline styling for h2 og p tags */}
			<style jsx>{`
				h2 {
					margin-top: 20px;
					font-family: Open Sans;
					font-size: 16px;
					font-weight: 700;
					line-height: 21.79px;
				}
				p {
					font-family: Open Sans;
					font-size: 16px;
					font-weight: 400;
					line-height: 21.79px;
					text-align: left;
				}
			`}</style>
		</div>
	);
};
