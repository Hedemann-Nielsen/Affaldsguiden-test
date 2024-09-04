import { PageWrapper } from "../Components/Common/Wrappers/PageWrapper";
import { Artikler } from "../Components/Customers/Artikler/Artikler.jsx";

export const ArtikelPage = () => {
	return (
		<>
			<PageWrapper title={"Artikler"}>
				<Artikler />
			</PageWrapper>
		</>
	);
};
