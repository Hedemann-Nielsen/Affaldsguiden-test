import { PageWrapper } from "../../Common/Wrappers/PageWrapper";
import { useParams } from "react-router-dom"; // Hent useParams til at få URL-parametre
import { useSationsData } from "../../Hooks/SationsData";
import { calculateAverageStars, renderStars } from "./StarReviews";

import { IoStar } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

// import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Stationer.module.scss";

export const StationsDetails = () => {
	const { id } = useParams(); // Hent 'id' fra URL-parametrene
	const sationsData = useSationsData();

	console.log(sationsData); // Nu vil 'id' blive logget korrekt

	const averageStars = calculateAverageStars(sationsData.reviews);

	return (
		<PageWrapper>
			<div className={style.stationsDetails}>
				<iframe
					src={`https://www.google.com/maps?q=${sationsData.longitude},${sationsData.latitude}&z=14&output=embed`}></iframe>
				<section className={style.contentWrapper}>
					<div>
						<h2>{sationsData.name}</h2>
						<p>{sationsData.address}</p>
						<p>{sationsData.zipcode}</p>
						<p>{sationsData.city}</p>
						<p>
							<IoMdMail />
							{sationsData.email}
						</p>
						<p>
							<FaPhone />
							{sationsData.phone}
						</p>
					</div>
					<div className={style.stars}>{renderStars(averageStars)}</div>
				</section>
			</div>
		</PageWrapper>
	);
};
