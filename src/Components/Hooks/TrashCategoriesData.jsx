import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";
import { useParams } from "react-router-dom";

export const useTrashCategoriesData = () => {
	const { id } = useParams(); // Hent id fra URL'en

	const { supabase } = useSupabase();
	const [trashCategoriesData, setTrashCategoriesData] = useState([]);

	useEffect(() => {
		const getTrashCategoriesData = async () => {
			try {
				if (supabase) {
					const { data, error } = await supabase
						.from("trash_categories") // henter fra tabellen trash_categories
						.select(
							`id, title, icon_url, image_url, trash_category_type_rel("is_allowed",trash_types("title"))`
						)
						.eq("section_id", id);

					if (error) {
						console.error(
							"Fejl ved hentning af data fra categoriesData:",
							error.message
						);
					} else {
						// console.log(data);
						setTrashCategoriesData(data);
					}
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		getTrashCategoriesData();
	}, [supabase]);

	return trashCategoriesData;
};
