import { useLocation, useParams } from "react-router-dom";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import { useTrachSections } from "../../Hooks/TrachSectionsData.jsx";
import { InnerWrapperStyle } from "./innerWrapper.styled.js";
import { useState } from "react";
import { useEffect } from "react";

//innerWrapper bruges til at lave margin og farve baggrunden

export const InnerWrapper = ({ children }) => {
	const { id } = useParams();
	const trachSectionsData = useTrachSections();
	const [currentSection, setCurrentSection] = useState();

	useEffect(() => {
		if (trachSectionsData && trachSectionsData.length > 0) {
			setCurrentSection(trachSectionsData.find((s) => s.id === parseInt(id)));
		}
	}, [id]);

	return (
		<InnerWrapperStyle $bgcolor={currentSection && currentSection.color}>
			{children}
		</InnerWrapperStyle>
	);
};
