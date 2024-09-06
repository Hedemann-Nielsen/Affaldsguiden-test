import style from "./Stationer.module.scss";
import { IoStar } from "react-icons/io5";

// Funktion til at beregne gennemsnittet af stjernerne
export const calculateAverageStars = (reviews) => {
	//tager først lidten af anmeldelser
	if (!reviews || reviews.length === 0) return 0;

	//beregner gennemsnittet af stjerner
	const totalStars = reviews.reduce(
		//ligger alle num_stars sammen
		(sum, review) => sum + review.num_stars,
		0
	);
	//dividere med antallet af anmeldelser
	const averageStars = totalStars / reviews.length;
	//afrundes til nærmeste hele tal
	return Math.round(averageStars);
};

// Funktion til at generere stjerner baseret på vurderingen
export const renderStars = (averageStars) => {
	//start med et tomt array
	const stars = [];
	// Kører en løkke 5 gange for at lave 5 stjerner
	for (let i = 1; i <= 5; i++) {
		// For hver iteration tjekker vi om stjernens nummer (i) er mindre end eller lig med gennemsnittet (averageStars).
		stars.push(
			<span
				//unik nøgle til hver stjerne
				key={i}
				// Hvis stjernens nummer er <= gennemsnittet, tilføjer vi klassen for en gul stjerne. Ellers tilføjer vi klassen for en grå stjerne.
				className={i <= averageStars ? style.filledStar : style.emptyStar}>
				{/* ★ */}
				<IoStar />
			</span>
		);
	}
	return stars;
};
