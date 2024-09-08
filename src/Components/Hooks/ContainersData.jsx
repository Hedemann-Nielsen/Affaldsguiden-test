import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";

export const useContainersData = () => {
	const { supabase } = useSupabase();
	const [containersData, setContainersData] = useState([]);

	useEffect(() => {
		const getContainersData = async () => {
			try {
				if (supabase) {
					const { data, error } = await supabase
						.from("containers") //henter fra tabellen articles
						.select("*"); // henter alle kolonnen
					if (error) {
						console.error(
							"Fejl ved hentning af data fra categoriesData:",
							error.message
						);
					} else {
						// console.log(data);
						setContainersData(data);
					}
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		getContainersData();
	}, [supabase]);

	return containersData;
};
