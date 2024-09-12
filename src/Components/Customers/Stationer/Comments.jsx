import { useState } from "react";
import { useAuth } from "../../../Providers/AuthProvider";
import { useReviewsData } from "../../Hooks/ReviewsData.jsx";
import { formatDate } from "../../Utils/DateUtils.jsx";
import { generateStars } from "./StarReviews.jsx";
import { useClearMessageHandler } from "../../Utils/ClearMessages";
import { useSupabase } from "../../../Providers/SupabaseProvider.jsx";
import { RatingStars } from "./RatingStars.jsx";

import userPhoto from "../../../Assets/DeafultUserPhoto.png";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Stationer.module.scss";

export const Comments = ({ sationsData }) => {
	const { supabase } = useSupabase();
	const { loginData } = useAuth();
	const [reviewsData, fetchReviews] = useReviewsData(sationsData); // Tilføj fetchReviews for at genindlæse data
	const [editingCommentId, setEditingCommentId] = useState(null); // Holder styr på redigeret kommentar
	const [updatedCommentText, setUpdatedCommentText] = useState(""); // Ny kommentar tekst
	const [selectedRating, setSelectedRating] = useState(0);
	const [commentText, setCommentText] = useState("");
	const { setErrorMessage, setSuccessMessage, clearMessages } =
		useClearMessageHandler();

	const handleRatingSelect = (rating) => {
		setSelectedRating(rating); // Gem den valgte vurdering
	};

	const handleSubmitReview = async () => {
		try {
			const { error } = await supabase.from("reviews").insert({
				site_id: sationsData,
				user_id: loginData.user.id,
				is_active: true,
				num_stars: selectedRating,
				comment: commentText, // Brug den gemte kommentar tekst
			});
			if (error) {
				setErrorMessage("Fejl ved oprettelse af anmeldelse");
				console.error("Fejl ved oprettelse af anmeldelse", error);
			} else {
				setSuccessMessage("Kommentar blev tilføjet");
				clearMessages();
			}
		} catch (error) {
			setErrorMessage("Fejl ved oprettelse af anmeldelse");
			console.error("Fejl ved oprettelse af anmeldelse", error);
		}
	};

	// Funktion til at starte redigering af kommentar
	const handleEditComment = (comment) => {
		setEditingCommentId(comment.id); // Sætter den kommentar, der redigeres
		setUpdatedCommentText(comment.comment); // Forudfyld tekstareafeltet med den eksisterende kommentar
	};

	// Funktion til at gemme redigeret kommentar
	const handleSaveComment = async (commentId) => {
		try {
			const { error } = await supabase
				.from("reviews")
				.update({ comment: updatedCommentText }) // Opdaterer kommentaren med ny tekst
				.eq("id", commentId);
			if (error) {
				setErrorMessage("Fejl ved opdatering af kommentar");
				console.error("Error updating comment:", error);
			} else {
				setSuccessMessage("Kommentaren blev opdateret");
				clearMessages();
				setEditingCommentId(null); // Stopper redigeringen
				await fetchReviews(); // Genindlæs kommentarer
			}
		} catch (error) {
			setErrorMessage("Fejl ved opdatering af kommentar");
			console.error("Error updating comment:", error);
		}
	};

	// Funktion til at slette kommentar
	const handleDeleteComment = async (comment) => {
		try {
			const { data, error } = await supabase
				.from("reviews")
				.update({ is_active: false })
				// .delete()
				.eq("id", comment.id);
			if (error) {
				setErrorMessage("Fejl ved sletning af kommentar");
				console.error("Error deleting comment:", error);
			} else {
				setSuccessMessage("Kommentaren blev slettet");
				clearMessages();
				alert("Kommentaren blev slettet");
				await fetchReviews();
				// fetchComments();
			}
		} catch (error) {
			setErrorMessage("Fejl ved sletning af kommentar");
			console.error("Error deleting comment:", error);
		}
	};

	return (
		<>
			<div className={style.commentsWrapper}>
				<h2 className={`${globalStyle.subtilte2} ${style.title}`}>
					Kommentarer
				</h2>

				{!loginData ? (
					<p>Du er ikke logget ind</p>
				) : (
					<form className={style.logedIn}>
						<div className={style.review}>
							<p>Skriv en anmeldelse</p>
							<div className={style.stars}>
								<RatingStars onRatingSelect={handleRatingSelect} />
							</div>
						</div>
						<textarea
							value={commentText}
							onChange={(e) => setCommentText(e.target.value)} // Opdater kommentar state
						></textarea>
						<div className={style.buttonContainer}>
							<button
								className={globalStyle.styledButton}
								onClick={handleSubmitReview}>
								Send
							</button>
						</div>
					</form>
				)}

				{/* Vis anmeldelserne */}
				{reviewsData && reviewsData.length > 0 ? (
					<div>
						<p></p>
						{reviewsData.map((comment) => (
							<figure key={comment.id} className={style.oneCommentWrapper}>
								<img src={userPhoto} alt="user photo" />
								<figcaption>
									<h3>
										{loginData && loginData.user.id === comment.user_id
											? loginData.user.email
											: "Anonym"}
									</h3>
									<div className={style.editWrapper}>
										<div className={style.dateWrapper}>
											<p>{formatDate(comment.created_at)}</p>
											<p className={style.starWrapper}>
												{generateStars(comment.num_stars)}
											</p>
										</div>

										{/* viser kun redigerings iconerne hvis det er den bruger som er logget ind, som har skrevet kommentaren */}
										{loginData && loginData.user.id === comment.user_id && (
											<div className={style.iconsWrapper}>
												<GrEdit
													className={style.GrEdit}
													onClick={() => handleEditComment(comment)}
												/>
												<MdDeleteForever
													className={style.MdDeleteForever}
													onClick={() => handleDeleteComment(comment)}
												/>
											</div>
										)}
									</div>
									{/* Hvis brugeren redigerer kommentaren, vises tekstareafelt */}
									{editingCommentId === comment.id ? (
										<div className={style.editCommentWrapper}>
											<textarea
												value={updatedCommentText}
												onChange={(e) => setUpdatedCommentText(e.target.value)}
											/>
											<div className={style.buttonContainer}>
												<button
													className={globalStyle.styledButton}
													onClick={() => handleSaveComment(comment.id)}>
													Gem kommentar
												</button>
											</div>
										</div>
									) : (
										<p>{comment.comment}</p>
									)}
								</figcaption>
							</figure>
						))}
					</div>
				) : (
					<p>Ingen kommentarer endnu.</p>
				)}
			</div>
		</>
	);
};
