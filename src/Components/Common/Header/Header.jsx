import { useSupabase } from "../../../Providers/SupabaseProvider";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Logo/logo.png";
import { useAuth } from "../../../Providers/AuthProvider";

import { IoMdLogIn } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import style from "./Header.module.scss";

export const Header = () => {
	const { supabase } = useSupabase();
	const { loginData, setLoginData } = useAuth();

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

	return (
		<>
			<header className={style.header}>
				<Link to="/home">
					<img src={logo} alt="" />
				</Link>
				{!loginData ? (
					<Link to="/login">
						<button className={style.loginButton}>
							Login <IoMdLogIn className={style.logInIcon} />
						</button>
					</Link>
				) : (
					<>
						<p>Du er logget ind som {loginData.user.email}</p>
						<button onClick={handleLogout} className={style.loginButton}>
							Log ud <IoMdLogOut className={style.logOutIcon} />
						</button>
					</>
				)}
			</header>
		</>
	);
};
