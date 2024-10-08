import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";
import { useParams } from "react-router-dom";

export const useSationsData = () => {
	const { id } = useParams(); // Hent id fra URL'en

	const { supabase } = useSupabase();
	const [sationsData, setSationsData] = useState([]);

	useEffect(() => {
		const getSationsData = async () => {
			try {
				if (supabase) {
					const { data, error } = await supabase
						.from("recycling_sites") // henter fra tabellen recycling_sites (stationer)
						.select("*, reviews(*)") // henter alle kolonnen
						.eq("id", id)
						.single();

					if (error) {
						console.error(
							"Fejl ved hentning af data fra categoriesData:",
							error.message
						);
					} else {
						setSationsData(data);
					}
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		getSationsData();
	}, [supabase]);

	return sationsData;
};
