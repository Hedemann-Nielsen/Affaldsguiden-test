import globalStyle from "../../../Styles/GlobalStyles.module.scss";

// Bruges til at lave en "boks" hvor indholdet er indeni
export const InnerWrapper = ({ children }) => {
	return <section className={globalStyle.InnerWrapper}>{children}</section>;
};
