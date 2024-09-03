import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Logo/logo.png";
import { useAuth } from "../../../Providers/AuthProvider";

import { IoMdLogIn } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import style from "./Header.module.scss";

export const Header = () => {
	const { loginData, setLoginData } = useAuth();
	const [username, setUsername] = useState("");

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
				<img src={logo} alt="Logo" />
				{!loginData ? (
					<Link to="/login">
						<button className={style.loginButton}>
							Login <IoMdLogIn className={style.logInIcon} />
						</button>
					</Link>
				) : (
					<>
						<p>Du er logget ind som {username}</p>
						<button onClick={handleLogout} className={style.loginButton}>
							Log ud <IoMdLogOut className={style.logOutIcon} />
						</button>
					</>
				)}
			</header>
		</>
	);
};
