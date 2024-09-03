import { Route, Router, Routes } from "react-router-dom";
import { LoginPage } from "../../Pages/LoginPage.jsx";
import { FallbackPage } from "../../Pages/FallbackPag.jsx";
// import { NewsPage } from "../../Pages/NewsPage.jsx";
// import { ContactPage } from "../../Pages/ContactPage.jsx";
// import { ProductsPage } from "../../Pages/ProductsPage.jsx";
import { CreateUser } from "../Customers/Login/CreateUser.jsx";
import { Login } from "../Customers/Login/Login.jsx";
// import { News } from "../Customers/News/News.jsx";
// import { Categorys } from "../Customers/Products/Categorys.jsx";
// import { Product } from "../Customers/Products/Product.jsx";
import { HomePage } from "../../Pages/HomePage.jsx";
// import { Contact } from "../Customers/Contact/Contact.jsx";

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="/" element={<HomePage />} />
			<Route path="/home" element={<HomePage />} />

			{/* <Route path="/katogori" element={<ProductsPage />}>
				<Route index element={<Categorys />} />
				<Route path=":katogori" element={<Categorys />} />
				<Route path=":katogori/:slug" element={<Product />} />
			</Route> */}

			<Route path="/login" element={<LoginPage />}>
				<Route index element={<Login />} />
				{/* <Route path="/login" element={<Login />} /> */}
				<Route path="/login/createUser" element={<CreateUser />} />
			</Route>

			{/* <Route path="/news" element={<NewsPage />}>
				<Route index element={<News />} />
				<Route path=":id" element={<News />} />
			</Route> */}
			{/* 
			<Route path="/contact" element={<ContactPage />}>
				<Route index element={<Contact />} />
			</Route> */}
			<Route path="*" element={<FallbackPage />} />
		</Routes>
	);
};
