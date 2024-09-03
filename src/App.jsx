// Imports til AppRouter
import { AppRouter } from "./Components/Routes/AppRouter";

// Imports til CreateBrowserRouter
import { RouterProvider } from "react-router-dom";
import { routes } from "./Components/Routes/Routes";

import "./App.css";

function App() {
	return (
		<>
			<p>her er en side</p>
			<p>ruter virker først når den aktiveres!</p>
			{/* Bruges til AppRouter */}
			{/* <AppRouter /> */}
			{/* Bruges til CreateBrowserRouyter uden loader */}
			{/* return <RouterProvider router={routes} />; */}
			{/* Bruges til CreateBrowserRouter med Loader */}
			{/* <div>{loading ? <Loader /> : <RouterProvider router={routes} />}</div>; */}
		</>
	);
}

export default App;
