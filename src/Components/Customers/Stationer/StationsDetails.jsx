import { PageWrapper } from "../../Common/Wrappers/PageWrapper";
import { useParams } from "react-router-dom"; // Hent useParams til at få URL-parametre
import { useSationsData } from "../../Hooks/SationsData";
import { calculateAverageStars, renderStars } from "./StarReviews";
import { Comments } from "./Comments";

import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

import style from "./Stationer.module.scss";

export const StationsDetails = () => {
	const { stationId } = useParams(); // Hent stationId fra URL'en
	const sationsData = useSationsData();
	const averageStars = calculateAverageStars(sationsData.reviews);
	// console.log(sationsData);

	return (
		<PageWrapper>
			<div className={style.stationsDetails}>
				<iframe
					src={`https://www.google.com/maps?q=${sationsData.longitude},${sationsData.latitude}&z=14&output=embed`}></iframe>
				<section className={style.contentWrapper}>
					<div>
						<h2>{sationsData.name}</h2>
						<p>{sationsData.address}</p>
						<div className={style.cityWrapper}>
							<p>{sationsData.zipcode}</p>
							<p>{sationsData.city}</p>
						</div>
						<div className={style.emailWrapper}>
							<IoMdMail />
							<p className={style.email}>{sationsData.email}</p>
						</div>
						<div className={style.phoneWrapper}>
							<FaPhone />
							<p className={style.phone}>{sationsData.phone}</p>
						</div>
					</div>
					<div className={style.starsBig}>{renderStars(averageStars)}</div>
				</section>
				<Comments sationsData={sationsData.id} />
			</div>
		</PageWrapper>
	);
};
