import { Link } from "react-router-dom";
import { useTrachSections } from "../../Hooks/TrachSectionsData.jsx";

import globalStyle from "./../../../Styles/GlobalStyles.module.scss";
import style from "./Sortering.module.scss";
import { useResizeHandler } from "../../Common/ResizeHandler/ResizeHandler.jsx";

export const Sektioner = () => {
	const trashSections = useTrachSections();
	const windowSize = useResizeHandler();

	// Bestem hvilken className der skal bruges baseret på vinduesbredden
	const getClassName = () => {
		return windowSize.width <= 768 ? globalStyle.text : globalStyle.subtitle2;
	};

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
								state={{
									title: section.title,
								}} // Send title videre via state
							>
								<div
									className={style.kategoriWrapper}
									style={{ backgroundColor }}>
									{/* Dynamisk className baseret på skærmstørrelse */}
									<h2 className={getClassName()}>{section.title}</h2>
									<img src={section.image_url} alt={section.title} />
								</div>
							</Link>
						);
					})}
			</figure>
		</main>
	);
};
