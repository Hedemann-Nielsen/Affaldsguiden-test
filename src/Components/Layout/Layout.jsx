import { Outlet, useLocation } from "react-router-dom";
import { CookieBanner } from "../CookieBanner/CookieBanner.jsx";
import { Footer } from "../Common/Footer/Footer.jsx";
import { Header } from "../Common/Header/Header.jsx";
import { MobileNavigation } from "../Common/Navigation/MobileNavigation.jsx";
import { InnerWrapper } from "../Common/Wrappers/InnerWrapper.jsx";
import { useResizeHandler } from "../Common/ResizeHandler/ResizeHandler.jsx";
import { Navigation } from "../Common/Navigation/Navigation.jsx";

export const Layout = () => {
	const { width } = useResizeHandler();

	return (
		<>
			<Header />
			{/* tjekker om viduetsstørrelse er under 768px, hvis den er det vises mobil	navigation, hvis den er over vises default subnavigatio  */}
			{width <= 768 ? <MobileNavigation /> : <Navigation />}
			<InnerWrapper>
				<Outlet />
			</InnerWrapper>
			{/* cookie banneret vises kun på siden, hvis der ikke er registreret om cookies må gemmes eller ej i localStorage */}
			<CookieBanner />
			<Footer />
		</>
	);
};
