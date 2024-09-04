import React from "react";
import { useLocation } from "react-router-dom";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import { useTrachSections } from "../../Hooks/TrachSectionsData.jsx";

// Bruges til at lave en "boks" hvor indholdet er indeni
export const InnerWrapper = ({ children }) => {
	const { trachSectionsData } = useTrachSections();
	console.log(trachSectionsData);

	const location = useLocation();

	// Definer farver baseret på ruten
	let backgroundColor = "linear-gradient(180deg, #06682d 0%, #ffffff 100%)"; // Standard farve

	// Tjek hvis ruten er /sortering/kategori og brug API-data til farver
	if (location.pathname === "/sortering/kategori" && trachSectionsData) {
		backgroundColor = `linear-gradient(180deg, #06682d 0%, #ffffff 100%)`;
	} else if (trachSectionsData) {
		// Tjek dynamisk mod alle sektioner i `trachSectionsData`
		const matchingSection = trachSectionsData.find(
			(section) => `/${section.title}` === location.pathname
		);

		if (matchingSection) {
			backgroundColor = `linear-gradient(180deg, ${matchingSection.color} 0%, #ffffff 100%)`;
		}
	}

	// // Definer farver baseret på ruten
	// let backgroundColor;

	// // Tjek hvis ruten er /sortering/kategori og brug API-data til farver
	// if (location.pathname === "/sortering/kategori" && trachSectionsData) {
	//   // Brug API-data til at bestemme farverne, antager at `trachSectionsData` har de nødvendige farver
	//   backgroundColor = `linear-gradient(180deg, #06682d 0%, #ffffff 100%)`;
	// } else {
	//   // Standard rute-baseret farvelogik
	//   switch (location.pathname) {
	//   case trachSectionsData && trachSectionsData.map((trachSections) => {
	// 		return(
	// 			`/${trachSections.title}:
	// 	  backgroundColor = "linear-gradient(180deg, ${trachSections.color} 0%, #ffffff 100%)";
	// 	  break;`
	// 		)
	// 	})
	//   }
	// }

	return (
		<section className={globalStyle.innerWrapper} style={{ backgroundColor }}>
			<div className={globalStyle.contentWrapper}>
				<p>innerwrapper</p>
				{children}
			</div>
		</section>
	);
};
