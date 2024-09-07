import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";

export const useArticlesData = () => {
	const { supabase } = useSupabase();
	const [articlesData, setArticlesData] = useState([]);

	useEffect(() => {
		const getArticlesData = async () => {
			try {
				if (supabase) {
					const { data, error } = await supabase
						.from("articles") //henter fra tabellen articles
						.select("*"); // henter alle kolonnen
					if (error) {
						console.error(
							"Fejl ved hentning af data fra categoriesData:",
							error.message
						);
					} else {
						// console.log(data);
						setArticlesData(data);
					}
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		getArticlesData();
	}, [supabase]);

	return articlesData;
};
