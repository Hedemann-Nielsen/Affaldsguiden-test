import { useEffect } from "react";
import { useSupabase } from "../../../Providers/SupabaseProvider";
import { useAuth } from "../../../Providers/AuthProvider";
import { PageWrapper } from "../../Common/Wrappers/PageWrapper";
import { NotLogedin } from "./NotLogedin";
import { ChangePassword } from "./ChangePassword";
import { LogoutButton } from "./LogoutButton";

import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Login.module.scss";

export const Login = () => {
	const { supabase } = useSupabase();
	const { loginData, setLoginData } = useAuth();

	// console.log(loginData);

	// Funktion som håndtere log ud ved hjælp af supabase
	const handleLogout = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			setLoginData("");
			sessionStorage.removeItem("supabase.auth.token");
			if (error) throw error;
		} catch (error) {
			console.error("Error logging out:", error.message);
		}
	};

	useEffect(() => {
		document.title = loginData ? `Velkommen ${loginData.user.email}` : "Login";
	}, [loginData]);

	return (
		<>
			{!loginData ? (
				<PageWrapper title="Login">
					<NotLogedin />
				</PageWrapper>
			) : (
				<PageWrapper title="Min side">
					<div className={style.loginWrapper}>
						<h1 className={globalStyle.title}>Hej {loginData.user.email}</h1>
						<LogoutButton handleLogout={handleLogout} />
						<ChangePassword />
					</div>
				</PageWrapper>
			)}
		</>
	);
};
