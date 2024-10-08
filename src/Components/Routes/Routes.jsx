import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout.jsx";
import { HomePage } from "../../Pages/HomePage.jsx";
import { LoginPage } from "../../Pages/LoginPage.jsx";
import { FallbackPage } from "../../Pages/FallbackPage.jsx";
import { BestilPage } from "../../Pages/BestilPage.jsx";
import { SektionerPage } from "../../Pages/SektionerPage.jsx";

import { Login } from "../../Components/Customers/Login/Login.jsx";
import { CreateUser } from "../Customers/Login/CreateUser.jsx";
import { Kategorier } from "../Customers/Sorteringsguide/Kategorier.jsx";
import { Genbrugsstationer } from "../Customers/Stationer/Genbrugsstationer.jsx";
import { StationsDetails } from "../Customers/Stationer/StationsDetails.jsx";
import { Artikler } from "../Customers/Artikler/Artikler.jsx";
import { ArtikelDetails } from "../Customers/Artikler/ArtikelDetails.jsx";

export const routes = createBrowserRouter([
	{
		path: "/",
		// Layout er placeret på alle pages i SiThreedotjs, flyttes EventTarget.
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/home",
				element: <HomePage />,
			},
			{
				path: "/sektioner",
				element: <SektionerPage />,
			},
			{
				path: "/sektioner/kategori/:id",
				// korrekt måde at bruge det, hentes ud med useParams som section_id
				// path: "/sektioner/kategori/:section_id",
				element: <Kategorier />,
			},

			//nested router til login
			{
				path: "/login",
				element: <LoginPage />,
				children: [
					{
						index: true,
						element: <Login />,
					},
					{
						path: "/login/createUser",
						element: <CreateUser />,
					},
				],
			},
			//nested router til genbrugsstationer
			{
				path: "/genbrugsstationer",
				element: <Genbrugsstationer />,
			},
			{
				path: "/genbrugsstationer/:id",
				element: <StationsDetails />,
			},

			//nested router til artikler
			{
				path: "/artikler",
				element: <Artikler />,
			},
			{
				path: "/artikler/:id",
				element: <ArtikelDetails />,
			},

			{
				path: "/bestil",
				element: <BestilPage />,
			},

			{
				path: "*",
				element: <FallbackPage />,
			},
		],
	},
]);
