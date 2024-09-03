import { NavLink } from "react-router-dom";
import { MenuData } from "../../Static/MenuData.jsx";

import style from "./Navigation.module.scss";

export default function Navigation() {
	return (
		<nav className={style.navigation}>
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
	);
}
