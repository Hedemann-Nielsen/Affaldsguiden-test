import { useLocation } from "react-router-dom";
import { PageWrapper } from "../../Common/Wrappers/PageWrapper";
import { useTrashCategoriesData } from "../../Hooks/TrashCategoriesData";

import { IoIosArrowDown } from "react-icons/io";

import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Sortering.module.scss";

export const Kategorier = () => {
	const categoriesData = useTrashCategoriesData();

	const location = useLocation();
	const sectionTitle = location.state?.title || "Kategori"; // Fallback hvis ingen title er sendt

	// Logik til filtrering flyttet op over return
	const filteredCategories = categoriesData?.map((category) => {
		const allowedItems = category.trash_category_type_rel.filter(
			(item) => item.is_allowed === true
		);
		const notAllowedItems = category.trash_category_type_rel.filter(
			(item) => item.is_allowed === false
		);

		return {
			...category,
			allowedItems,
			notAllowedItems,
		};
	});

	return (
		<>
			<div className={style.KategorierWrapper}>
				<PageWrapper title={sectionTitle}>
					<h1 className={globalStyle.title}>{sectionTitle}</h1>
					<h2 className={` ${style.subtitle}  ${globalStyle.subtitle2}`}>
						Vælg en kategori
					</h2>
					{filteredCategories?.map((category) => {
						return (
							<details key={category.id}>
								{/* overskriften  */}
								<summary className={style.categoryBox}>
									<div className={style.leftAlign}>
										<img src={category.icon_url} alt={category.title} />
										<p className={globalStyle.subtitle2}>{category.title}</p>
									</div>
									<img
										src={category.image_url}
										alt={`${category.title} billede`}
									/>
									<div className={style.arrowWrapper}>
										<IoIosArrowDown className={style.IoIosArrowDown} />
									</div>
								</summary>
								{/* indholdet */}
								<div className={style.content}>
									<div>
										<p className={`${globalStyle.subtitle4} ${style.succes}`}>
											Ja tak
										</p>
										<hr />
										<ul>
											{category.allowedItems.map((item, index) => (
												<li key={index} className={globalStyle.text}>
													{item.trash_types.title}
												</li>
											))}
										</ul>
									</div>
									<div>
										<p className={`${globalStyle.subtitle4} ${style.error}`}>
											Nej tak
										</p>
										<hr />
										<ul>
											{category.notAllowedItems.map((item, index) => (
												<li key={index} className={globalStyle.text}>
													{item.trash_types.title}
												</li>
											))}
										</ul>
									</div>
								</div>
							</details>
						);
					})}
					<div></div>
				</PageWrapper>
			</div>
		</>
	);
};
