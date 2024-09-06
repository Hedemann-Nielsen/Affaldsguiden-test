import { PageWrapper } from "../../Common/Wrappers/PageWrapper.jsx";
import { useRecyclingSitesData } from "../../Hooks/RecyclingSitesData.jsx";
import { useNavigate } from "react-router-dom";
import { calculateAverageStars, renderStars } from "./StarReviews";

import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Stationer.module.scss";

export const Genbrugsstationer = () => {
	const recyclingSitesData = useRecyclingSitesData();
	const navigate = useNavigate();

	const goToStationDetails = (stationId) => {
		navigate(`/genbrugsstationer/${stationId}`);
	};

	return (
		<PageWrapper title="Genbrugsstationer">
			<div className={style.stations}>
				<h1 className={globalStyle.title}>Genbrugsstationer</h1>
				<div className={style.recyclingstations}>
					{recyclingSitesData &&
						recyclingSitesData.map((station) => {
							const averageStars = calculateAverageStars(station.reviews);

							return (
								<div
									key={station.id}
									className={style.recyclingstation}
									onClick={() => goToStationDetails(station.id)}>
									<iframe
										src={`https://www.google.com/maps?q=${station.longitude},${station.latitude}&z=14&output=embed`}></iframe>
									<div className={style.aboutStation}>
										<h2 className={globalStyle.subtitle2}>{station.name}</h2>
										<p className={globalStyle.text}>Beskrivelse</p>
										<div className={style.bottomBox}>
											<hr />
											<div className={style.reviewWrapper}>
												<div className={style.stars}>
													{renderStars(averageStars, style)}
												</div>
												<p>({station.reviews.length} anmeldelser)</p>
											</div>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</PageWrapper>
	);
};
