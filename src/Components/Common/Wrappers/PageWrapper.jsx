import globalStyle from "../../../Styles/GlobalStyles.module.scss";

//PageWrapper bruges til at sætte sidetitel ( i fanebladet)

export const PageWrapper = ({ title, children }) => {
	// Sætter page title
	document.title = title;

	return <section className={globalStyle.pageWrapper}>{children}</section>;
};
