// import { Layout } from "../Components/Layout/Layout";
import { PageWrapper } from "../Components/Common/Wrappers/PageWrapper";
import { Home } from "../Components/Customers/Home/Home";
import { Layout } from "../Components/Layout/Layout";

export const HomePage = () => {
	return (
		<>
			<PageWrapper title={"Home"}>
				<Layout />
			</PageWrapper>
		</>
	);
};
