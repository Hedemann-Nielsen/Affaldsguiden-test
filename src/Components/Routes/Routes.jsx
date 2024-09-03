import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout.jsx";
import { HomePage } from "../../Pages/HomePage.jsx";
// import { TicketsPage } from "../../Pages/TicketsPage.jsx";
// import { LineupPage } from "../../Pages/LineupPage.jsx";
import { Login } from "../../Components/Customers/Login/Login.jsx";
// import { ProgramPage } from "../../Pages/ProgramPage.jsx";
// import { CampsPage } from "../../Pages/CampsPage.jsx";
import { FallbackPage } from "../../Pages/FallbackPag.jsx";
// import { InfoPage } from "../../Pages/InfoPage.jsx";
// import { StageDetailsPage } from "../../Pages/StageDetailsPage.jsx";
// import { Lineup } from "../LineupComponent/Lineup.jsx";
import { CreateUser } from "../Customers/Login/CreateUser.jsx";
import { LoginPage } from "../../Pages/LoginPage.jsx";
// import { BasketPage } from "../../Pages/BasketPage.jsx";

export const routes = createBrowserRouter([
	{
		path: "/",
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
			//nested router
			// {
			// 	path: "/tickets",
			// 	children: [
			// 		{
			// 			index: true,
			// 			element: <TicketsPage />,
			// 		},
			// 		{
			// 			path: "/tickets/basket",
			// 			element: <BasketPage />,
			// 		},
			// 	],
			// },

			//nested router
			// {
			// 	path: "/lineup",
			// 	element: <LineupPage />,
			// 	children: [
			// 		{
			// 			index: true,
			// 			element: <Lineup />,
			// 		},
			// 		{
			// 			path: "/lineup/:stage_id",
			// 			element: <StageDetailsPage />,
			// 		},
			// 	],
			// },

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

			// {
			// 	path: "/camps",
			// 	element: <CampsPage />,
			// },
			// {
			// 	path: "/info",
			// 	element: <InfoPage />,
			// },
			// {
			// 	path: "/program",
			// 	element: <ProgramPage />,
			// },
			{
				path: "*",
				element: <FallbackPage />,
			},
		],
	},
]);
