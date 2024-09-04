import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout.jsx";
import { HomePage } from "../../Pages/HomePage.jsx";
import { SorteringsPage } from "../../Pages/SorteringsPage.jsx";
import { LoginPage } from "../../Pages/LoginPage.jsx";
import { FallbackPage } from "../../Pages/FallbackPage.jsx";
import { StationerPage } from "../../Pages/StationerPage.jsx";
import { ArtikelPage } from "../../Pages/ArtikelPage.jsx";
import { BestilPage } from "../../Pages/BestilPage.jsx";

import { Login } from "../../Components/Customers/Login/Login.jsx";
import { CreateUser } from "../Customers/Login/CreateUser.jsx";
import { Sortering } from "../Customers/Sorteringsguide/Sortering.jsx";
import { Kategori } from "../Customers/Sorteringsguide/Kategori.jsx";
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
			//nested router til sorteringsguide
			{
				path: "/sortering",
				element: <Sortering />,

				children: [
					{
						index: true,
						element: <Sortering />,
					},
					{
						path: "/sortering/kategori/:id",
						element: <Kategori />,
					},
				],
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
				element: <StationerPage />,

				children: [
					{
						index: true,
						element: <Genbrugsstationer />,
					},
					{
						path: "/genbrugsstationer/:id",
						element: <StationsDetails />,
					},
				],
			},

			//nested router til artikler
			{
				path: "/artikler",
				element: <ArtikelPage />,

				children: [
					{
						index: true,
						element: <Artikler />,
					},
					{
						path: "/artikler/:id",
						element: <ArtikelDetails />,
					},
				],
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
