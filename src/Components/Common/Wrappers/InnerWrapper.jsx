import { useLocation } from "react-router-dom";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import { useTrachSections } from "../../Hooks/TrachSectionsData.jsx";

export const InnerWrapper = ({ children }) => {
	const trachSectionsData = useTrachSections();
	const location = useLocation();

	// Standard baggrundsfarve
	let background =
		"linear-gradient(180deg, #06682d 0%, #fff 734px, #ffffff 734px)";

	// Tjek hvis trachSectionsData har data
	if (trachSectionsData && trachSectionsData.length > 0) {
		// Find den sektion, der matcher den nuværende rute
		const matchingSection = trachSectionsData.find(
			(section) =>
				`/${section.title.toLowerCase()}` === location.pathname.toLowerCase()
		);

		// Hvis der er en matchende sektion, brug dens farve
		if (matchingSection) {
			background = `linear-gradient(180deg, #${matchingSection.color} 0%, #${matchingSection.color} 734px, #ffffff 734px)`;
		}
	}

	return (
		<section className={globalStyle.innerWrapper} style={{ background }}>
			<div className={globalStyle.contentWrapper}>{children}</div>
		</section>
	);
};
