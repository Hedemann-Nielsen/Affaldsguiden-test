import { useState } from "react";
import { useSupabase } from "../../../Providers/SupabaseProvider";
import { Loader } from "../../Loader/Loader.jsx";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Login.module.scss";

export const ResetPassword = ({
	setResetEmail,
	setIsModalOpen,
	resetEmail,
}) => {
	const [resetError, setResetError] = useState("");
	const [resetSuccess, setResetSuccess] = useState("");
	const { supabase } = useSupabase();
	const [isLoading, setIsLoading] = useState(false);

	const handleResetPassword = async (e) => {
		e.preventDefault();
		setResetError("");
		setResetSuccess("");
		setIsLoading(true); //Aktivere loader imens den venter på svar fra serveren

		const { error } = await supabase.auth.resetPasswordForEmail(resetEmail);

		setIsLoading(false); //deaktivere loaderen igen.

		if (error) {
			setResetError("Der opstod en fejl: " + error.message);
		} else {
			setResetSuccess(
				"En email med instruktioner til at nulstille adgangskoden er sendt."
			);
		}
	};

	return (
		<>
			<sektion>
				<div className={style.modalForm}>
					<h2>Nulstil Adgangskode</h2>
					<form onSubmit={handleResetPassword}>
						<input
							type="email"
							placeholder="Indtast din email"
							value={resetEmail}
							onChange={(e) => setResetEmail(e.target.value)}
							className={globalStyle.input}
							required
						/>

						{resetError && (
							<span className={globalStyle.errorMessage}>{resetError}</span>
						)}

						{/* Hvis loaderen er aktiv, viser vi en loader */}
						<div className={style.buttonContainer}>
							<button
								type="submit"
								className={globalStyle.styledButton}
								disabled={isLoading} // Disable knappen mens loaderen er aktiv
							>
								{isLoading ? "Sender..." : "Send nulstillingslink"}
								{/* Skift knaptekst */}
							</button>
						</div>
					</form>

					{/* Hvis succes-beskeden er til stede, viser vi den */}
					{resetSuccess && (
						<span className={globalStyle.successMessage2}>{resetSuccess}</span>
					)}

					{/* Loader-indikator, mens vi venter */}
					{isLoading && (
						<div className={globalStyle.loader}>
							<Loader />
						</div>
					)}
					<div className={style.buttonButtomContainer}>
						<button
							onClick={() => setIsModalOpen(false)}
							className={`${globalStyle.unstyledButton} ${globalStyle.text} ${style.goBackButton}`}>
							Gå tilbage for at logge ind
						</button>
					</div>
				</div>
			</sektion>
		</>
	);
};
