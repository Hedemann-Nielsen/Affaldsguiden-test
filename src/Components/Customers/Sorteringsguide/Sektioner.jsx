import { Link } from "react-router-dom";
import { useTrachSections } from "../../Hooks/TrachSectionsData.jsx";

import globalStyle from "./../../../Styles/GlobalStyles.module.scss";
import style from "./Sortering.module.scss";

export const Sektioner = () => {
	const trashSections = useTrachSections();

	return (
		<main className={style.sortering}>
			<h1 className={globalStyle.title}>Sorteringsguide</h1>
			<h2 className={` ${style.subtitle}  ${globalStyle.subtitle2}`}>
				Vælg section
			</h2>
			<figure>
				{trashSections &&
					trashSections.map((section) => {
						// Her bestemmes baggrundsfarven for hver sektion baseret på dens farve fra API'et
						const backgroundColor = `#${section.color}`
							? `#${section.color}`
							: "#ffffff"; // fallback farve

						return (
							<Link
								to={`/sektioner/kategori/${section.id}`}
								className={globalStyle.link}
								key={section.id}
								state={{ title: section.title }} // Send title videre via state
							>
								<div
									className={style.kategoriWrapper}
									style={{ backgroundColor }}>
									<h2 className={globalStyle.subtitle2}>{section.title}</h2>
									<img src={section.image_url} alt={section.title} />
								</div>
							</Link>
						);
					})}
			</figure>
		</main>
	);
};
