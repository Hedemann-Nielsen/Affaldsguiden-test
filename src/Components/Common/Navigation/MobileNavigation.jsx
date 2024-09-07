import { NavLink } from "react-router-dom";
import { MenuData } from "../../Static/MenuData.jsx";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

import style from "./Navigation.module.scss";

export const MobileNavigation = () => {
	const [isOpen, setOpen] = useState(false);

	const handleMenuClick = () => {
		setOpen(false);
	};

	return (
		<>
			<div className={style.mobilNavWrapper}>
				{/* brugermenu fra react npm pakke */}

				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					rounded
					direction="right"
				/>

				<nav className={`${style.navMobilMenu} ${isOpen && style.activeMobil}`}>
					<ul>
						{MenuData &&
							MenuData.map((menu) => {
								return (
									<li key={menu.id}>
										<NavLink
											to={menu.url}
											className={style.navText}
											onClick={handleMenuClick}>
											{menu.title}
										</NavLink>
									</li>
								);
							})}
					</ul>
				</nav>
			</div>
		</>
	);
};
