import { Outlet } from "react-router-dom";
import { PageWrapper } from "../Components/Common/Wrappers/PageWrapper.jsx";
// import { Genbrugsstationer } from "../Components/Customers/Stationer/Genbrugsstationer.jsx";

export const StationerPage = () => {
	return (
		<>
			<PageWrapper title={"Genbrugsstationer"}>
				<Outlet />
			</PageWrapper>
		</>
	);
};
