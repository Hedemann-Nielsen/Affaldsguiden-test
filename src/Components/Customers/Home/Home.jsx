import { useEffect, useState } from "react";
import { useArticlesTrueData } from "../../Hooks/ArticlesTrueData";

import { RandomArticles } from "./RandomArticles";
import { FixedArticle } from "./FixedArticle";

import malerspande from "../../../Assets/Images/malerSpande.webp";
import affaldssortering from "../../../Assets/Images/affaldssortering.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";

import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Home.module.scss";
import { Link } from "react-router-dom";
import { useArticlesData } from "../../Hooks/ArticlesData";

export const Home = () => {
	const articlesTrue = useArticlesTrueData();
	const articles = useArticlesData();
	const [randomArticles, setRandomArticles] = useState([]);
	const [articleWithId2, setArticleWithId2] = useState(null);
	const [articleWithId4, setArticleWithId4] = useState(null);

	useEffect(() => {
		//fin random artikler
		if (articlesTrue && articlesTrue.length > 1) {
			const articlesCopy = [...articlesTrue];

			const getRandomArticle = () => {
				const randomIndex = Math.floor(Math.random() * articlesCopy.length);
				return articlesCopy.splice(randomIndex, 1)[0];
			};

			const selectedArticles = [getRandomArticle(), getRandomArticle()];
			setRandomArticles(selectedArticles);

			//find artikel med id 2
			const foundArticle2 = articles.find((article) => article.id === 2);
			setArticleWithId2(foundArticle2);

			//find artikel med id 4
			const foundArticle4 = articles.find((article) => article.id === 4);
			setArticleWithId4(foundArticle4);
		}
	}, [articles]);

	return (
		<>
			<main className={style.home}>
				<div className={style.innerGradient}>
					<img src={malerspande} alt="malerspande" />
				</div>
				<RandomArticles randomArticles={randomArticles} />
			</main>

			<main>
				<FixedArticle
					articleWithId2={articleWithId2}
					imageAlt={articleWithId2?.title}
				/>

				<div className={style.fixedartikleButtomWrapper}>
					<div className={style.fixedartikleButtomContainer}>
						<img src={affaldssortering} alt="affalds sortering" />
						<div>
							{articleWithId4 && (
								<section
									className={style.fixedarticleButtomBox}
									key={articleWithId4.id}>
									<h2 className={globalStyle.subtitle2}>
										Få gode idéer til, hvordan du gør det nemt at sortere
										affaldet hjemme hos dig.
									</h2>
									<Link
										to={`/artikler/${articleWithId4.id}`}
										className={style.tipsogTricksWrapper}>
										<h3 className={`${globalStyle.subtitle2}`}>
											{articleWithId4.title.split("-")[0]}-
											<span className={style.secondPartText}>
												{articleWithId4.title.split("-")[1]}
											</span>
										</h3>
										<div className={style.FaArrowAltCircleRightWrapperButtom}>
											<FaArrowAltCircleRight
												className={style.FaArrowAltCircleRight}
											/>
										</div>
									</Link>
								</section>
							)}
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
