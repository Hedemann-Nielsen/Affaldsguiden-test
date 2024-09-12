import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";

export const useArticlesTrueData = () => {
	const { supabase } = useSupabase();
	const [articlesData, setArticlesData] = useState([]);

	useEffect(() => {
		const getArticlesData = async () => {
			try {
				if (supabase) {
					const { data, error } = await supabase
						.from("articles") //henter fra tabellen articles
						.select("*") // henter alle kolonnen
						.eq("is_news", true); //henter kun de nyheder hvor is_news er true

					if (error) {
						console.error(
							"Fejl ved hentning af data fra categoriesData:",
							error.message
						);
					} else {
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
