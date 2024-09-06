import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";

export const useTrachSections = () => {
	const { supabase } = useSupabase();
	const [trachSectionsData, setTrachSectionsData] = useState([]);

	useEffect(() => {
		const getTrachSectionsData = async () => {
			try {
				if (supabase) {
					const { data, error } = await supabase
						.from("trash_sections") //henter fra tabellen trash_sections
						.select("*"); // henter alle kolonnen
					if (error) {
						console.error(
							"Fejl ved hentning af data fra categoriesData:",
							error.message
						);
					} else {
						console.log(data);
						setTrachSectionsData(data);
					}
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		getTrachSectionsData();
	}, [supabase]);

	return trachSectionsData;
};
