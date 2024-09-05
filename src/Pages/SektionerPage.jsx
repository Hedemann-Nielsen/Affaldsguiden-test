import { PageWrapper } from "../Components/Common/Wrappers/PageWrapper.jsx";
import { Sektioner } from "../Components/Customers/Sorteringsguide/Sektioner.jsx";

export const SektionerPage = () => {
	return (
		<>
			<PageWrapper title={"Sorteringsguide"}>
				<Sektioner />
			</PageWrapper>
		</>
	);
};
