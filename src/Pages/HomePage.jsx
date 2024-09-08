import { PageWrapper } from "../Components/Common/Wrappers/PageWrapper";
import { Home } from "../Components/Customers/Home/Home";

export const HomePage = () => {
	return (
		<>
			<PageWrapper title={"Affaldsguiden"}>
				<Home />
			</PageWrapper>
		</>
	);
};
