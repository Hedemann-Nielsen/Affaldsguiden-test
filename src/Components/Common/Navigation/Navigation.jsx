import { NavLink } from "react-router-dom";
import { MenuData } from "../../Static/MenuData.jsx";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

import style from "./Navigation.module.scss";

export default function Navigation() {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<div className={style.mobilNavWrapper}>
				{/* brugermenu fra react npm pakke */}
				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					rounded
					direction="right"
					color="#fff"
				/>

				<nav className={`${style.navigation} ${isOpen && style.activeMobil}`}>
					<ul></ul>
					{MenuData &&
						MenuData.map((menu) => {
							return (
								<ul key={menu.id}>
									<li>
										<NavLink to={menu.url}>{menu.title}</NavLink>
									</li>
								</ul>
							);
						})}
					<ul></ul>
				</nav>
			</div>
		</>
	);
}
