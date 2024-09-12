import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";

export const useRecyclingSitesData = () => {
	const { supabase } = useSupabase();
	const [recyclingSitesData, setRecyclingSitesData] = useState([]);

	useEffect(() => {
		const getRecyclingSitesData = async () => {
			try {
				if (supabase) {
					const { data, error } = await supabase
						.from("recycling_sites") //henter fra tabellen trash_sections
						.select("*, reviews(*)"); // henter alle kolonnen
					if (error) {
						console.error(
							"Fejl ved hentning af data fra categoriesData:",
							error.message
						);
					} else {
						setRecyclingSitesData(data);
					}
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		getRecyclingSitesData();
	}, [supabase]);

	return recyclingSitesData;
};
