import { useLocation } from "react-router-dom";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import { useTrachSections } from "../../Hooks/TrachSectionsData.jsx";

export const InnerWrapper = ({ children }) => {
	const trachSectionsData = useTrachSections();
	const location = useLocation();

	// Standard baggrundsfarve
	let background =
		"linear-gradient(180deg, #06682d 0%, #fff 734px, #ffffff 734px)";

	// Kontrollér, at vi er på en sti, der starter med "/sektioner"
	if (location.pathname.startsWith("/sektioner")) {
		// Få sektion ID fra stien
		const sectionId = parseInt(location.pathname.split("/").pop(), 10);

		// Tjek hvis trachSectionsData har data
		if (trachSectionsData && trachSectionsData.length > 0) {
			// Find den sektion, der matcher den nuværende rute
			const matchingSection = trachSectionsData.find(
				(section) => section.id === sectionId
			);

			// Hvis der er en matchende sektion, brug dens farve i gradientet
			if (matchingSection) {
				background = `linear-gradient(180deg, #${matchingSection.color} 0%, #fff 734px, #ffffff 734px)`;
			}
		}
	}

	return (
		<section className={globalStyle.innerWrapper} style={{ background }}>
			<div className={globalStyle.contentWrapper}>{children}</div>
		</section>
	);
};
