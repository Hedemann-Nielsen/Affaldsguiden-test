import { Outlet } from "react-router-dom";
import { PageWrapper } from "../Components/Common/Wrappers/PageWrapper";
import { Login } from "../Components/Customers/Login/Login";

export const LoginPage = () => {
	return (
		<>
			<PageWrapper title={"Login"}>
				<Outlet />
			</PageWrapper>
		</>
	);
};
