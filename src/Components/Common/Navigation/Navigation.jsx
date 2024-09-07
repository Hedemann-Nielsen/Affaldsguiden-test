import { NavLink } from "react-router-dom";
import { MenuData } from "../../Static/MenuData.jsx";

import style from "./Navigation.module.scss";

export const Navigation = () => {
	return (
		<>
			<div className={style.NavWrapper}>
				<nav className={style.navigation}>
					<ul></ul>
					{MenuData &&
						MenuData.map((menu) => {
							return (
								<ul key={menu.id}>
									<NavLink to={menu.url}>
										<li>{menu.title}</li>
									</NavLink>
								</ul>
							);
						})}
					<ul></ul>
				</nav>
			</div>
		</>
	);
};
