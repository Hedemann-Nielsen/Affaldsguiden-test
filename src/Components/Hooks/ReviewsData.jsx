import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";
import { useParams } from "react-router-dom";

export const useReviewsData = () => {
	const { id } = useParams(); // Hent id fra URL'en
	const { supabase } = useSupabase();
	const [reviewsData, setReviewsData] = useState([]);

	const fetchReviews = async () => {
		try {
			if (supabase && id) {
				const { data, error } = await supabase
					.from("reviews") // Henter fra tabellen reviews
					.select("*") // Henter alle kolonner
					.eq("site_id", id) // Filtrerer efter site_id
					.eq("is_active", true); // Filtrerer efter is_active = true

				if (error) {
					console.error(
						"Fejl ved hentning af data fra categoriesData:",
						error.message
					);
				} else {
					setReviewsData(data);
				}
			}
		} catch (error) {
			console.error("Generel fejl:", error.message);
		}
	};

	useEffect(() => {
		fetchReviews();
	}, [supabase, id]);

	return [reviewsData, fetchReviews];
};
