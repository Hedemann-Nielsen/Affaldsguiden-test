import { useForm } from "react-hook-form";
import { useSupabase } from "../../../Providers/SupabaseProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PageWrapper } from "../../Common/Wrappers/PageWrapper";

import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Login.module.scss";

export const CreateUser = () => {
	const { supabase } = useSupabase();
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	//tjekker om password og confirmPassword er det samme, hvis de er ens kan opret bruger køre
	const onSubmit = (data, error) => {
		const { password, confirmPassword, email } = data;
		if (password !== confirmPassword) {
			console.error("Passwords matcher ikke");
			setErrorMessage("Der opstod en fejl: " + error.message);

			return;
		}
		handleCreateUser({ password, email });
	};

	//opret bruger
	const handleCreateUser = async ({ password, email }) => {
		try {
			const { data, error } = await supabase.auth.signUp({
				password,
				email,
			});
			if (error) {
				setErrorMessage("Der opstod en fejl: " + error.message);
				console.error("Kunne ikke oprette bruger:", error);
			} else {
				// console.log("Bruger oprettet:", data);
				sessionStorage.setItem("supabase.auth.token", JSON.stringify(data));
				navigate("/login", {
					state: {
						userCreatedMessage: "Brugeren blev oprettet, du kan nu logge ind.",
					},
				});
			}
		} catch (error) {
			setErrorMessage("Der opstod en fejl: " + error.message);
			console.error("Der opstod en fejl:", error);
		}
	};

	return (
		<PageWrapper title="Opret bruger">
			<div className={style.createUserWrapper}>
				<form className={style.createUser} onSubmit={handleSubmit(onSubmit)}>
					<h1 className={globalStyle.title}>Opret bruger</h1>
					<input
						className={`${globalStyle.input} ${
							errors.email ? globalStyle.errorInput : ""
						}`}
						type="email"
						placeholder="Email"
						{...register("email", { required: "Email er påkrævet" })}
					/>
					{errors.email && (
						<span className={globalStyle.errorMessage}>
							{errors.email.message}
						</span>
					)}

					<input
						className={`${globalStyle.input} ${
							errors.email ? globalStyle.errorInput : ""
						}`}
						type="password"
						placeholder="Password"
						{...register("password", { required: true })}
					/>
					{errors.password && (
						<span className={globalStyle.errorMessage}>
							Password er påkrævet
						</span>
					)}
					<input
						className={`${globalStyle.input} ${
							errors.email ? globalStyle.errorInput : ""
						}`}
						type="password"
						placeholder="Bekræft Password"
						{...register("confirmPassword", { required: true })}
					/>
					{errors.confirmPassword && (
						<span className={globalStyle.errorMessage}>
							Bekræft password er påkrævet
						</span>
					)}
					<div>
						{errorMessage && (
							<span className={globalStyle.errorMessage}>{errorMessage}</span>
						)}
					</div>
					<div className={style.buttonContainer}>
						<button type="submit" className={globalStyle.styledButton}>
							Opret bruger
						</button>
					</div>
				</form>
			</div>
		</PageWrapper>
	);
};
