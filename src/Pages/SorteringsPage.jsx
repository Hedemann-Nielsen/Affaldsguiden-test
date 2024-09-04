import { PageWrapper } from "../Components/Common/Wrappers/PageWrapper.jsx";
import { Sortering } from "../Components/Customers/Sorteringsguide/Sortering.jsx";

export const SorteringsPage = () => {
	return (
		<>
			<PageWrapper title={"Sorteringsguide"}>
				<Sortering />
			</PageWrapper>
		</>
	);
};
