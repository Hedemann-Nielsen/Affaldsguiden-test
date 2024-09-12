import { useState } from "react";
import { useSupabase } from "../../../Providers/SupabaseProvider";
import { useForm } from "react-hook-form";
import { useContainersData } from "../../Hooks/ContainersData.jsx";

import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Bestil.module.scss";

export const Bestil = () => {
	const { supabase } = useSupabase();
	const [message, setMessage] = useState(""); // Til fejlhåndtering og beskeder
	const containers = useContainersData();
	const [selectedContainer, setSelectedContainer] = useState(null);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// Asynkron funktion der håndterer bestillings-processen
	const PosthandleOrder = async ({
		fullname,
		address,
		zipcode,
		city,
		email,
		phone,
		container_id,
	}) => {
		try {
			if (supabase) {
				const { data, error } = await supabase.from("orders").insert([
					{
						fullname,
						address,
						zipcode,
						city,
						email,
						phone,
						container_id: selectedContainer,
					},
				]);
				if (error) {
					//fejl håndtering, hvis der ikke kunne indsættes data i databasen
					console.error(
						"Fejl ved indsættelse af data i PosthandleOrder:",
						error.message
					);
					return { success: false, message: error.message };
				} else {
					return { success: true, data };
				}
			}
			// Returnér generel fejlmeddelelse
		} catch (error) {
			console.error("Generel fejl:", error.message);
			return { success: false, message: error.message };
		}
	};

	const handleSendOrder = async (data) => {
		if (!selectedContainer) {
			alert("Du skal vælge en container.");
			return;
		}
		try {
			// Kalder updateContactMessage med data fra formularen
			const response = await PosthandleOrder(data);

			if (response.success) {
				// Nulstil formen efter succesfuld indsendelse
				reset();
				// sender en alert boks til brugeren om at meddelelsen er sendt.
				const container = containers.find((c) => c.id === selectedContainer);
				alert(`Bestillingen er sendt! 
Du har bestilt denne type container: ${container?.name}
Den bliver leveret på følgende adresse:
${data.fullname} 
${data.address}
${data.zipcode} ${data.city}`);
				setSelectedContainer(null);
			} else {
				setMessage(response.message);
			}
			// Håndterer eventuelle fejl, der opstår under kaldet til
		} catch (error) {
			console.error("Der opstod en fejl:", error.message);
			alert("Der opstod en fejl. Prøv igen."); // Opdater beskeden
		}
	};

	// Håndterer valg af container
	const handleContainerSelect = (containerId) => {
		setSelectedContainer(containerId); // Opdaterer state med valgt container-ID
	};

	return (
		<div className={style.bestil}>
			<h1 className={globalStyle.title}>Bestil affaldscontainer</h1>
			<h2 className={globalStyle.subtitle2}>
				Hvis I mangler en affaldscontainer i din husstand kan du bestille en ved
				at udfylde og sende formularen herunder.
			</h2>
			<p className={style.containerType}>
				Vælg en af følgende container typer:
			</p>
			<div className={style.iconWrapper}>
				{containers &&
					containers.map((container) => {
						return (
							<div
								key={container.id}
								className={`${style.iconContainer} ${
									selectedContainer === container.id ? style.selected : ""
								}`}
								onClick={() => handleContainerSelect(container.id)}>
								{" "}
								<p>{container.name}</p>
								<div className={style.imageContainer}>
									<span
										dangerouslySetInnerHTML={{ __html: container.icon_svg }}
									/>
									{/* <img src={containers.icon_svg} alt={containers.name} /> */}
								</div>
							</div>
						);
					})}
			</div>
			<div className={style.deleveryInfo}>
				<p>Containeren leveres til</p>
				<form className={style.form} onSubmit={handleSubmit(handleSendOrder)}>
					{/* navn flet */}
					<input
						type="text"
						name="fullname"
						placeholder="Indtast dit navn"
						className={`${globalStyle.input} ${
							errors.fullname ? globalStyle.errorInput : ""
						}`}
						//validering af navn feltet, det skal være udfyldt, hvis ikke kommer der en besked
						{...register("fullname", { required: "Navn er påkrævet" })}
					/>
					{/* et element som kun vises hvis der skal skrives en fejl meddelse  */}
					{errors.fullname && (
						<span className={globalStyle.errorMessage}>
							{errors.fullname.message}
						</span>
					)}
					{/* adresse felt */}
					<input
						type="address"
						placeholder="Indtast din addresse"
						className={`${globalStyle.input} ${
							errors.address ? globalStyle.errorInput : ""
						}`}
						//validering af email feltet, det skal være udfyldt, og med korekt email syntax, hvis ikke kommer der en besked
						{...register("address", {
							required: "Adresse er påkrævet",
						})}
					/>
					{/* et element som kun vises hvis der skal skrives en fejl meddelse  */}

					{errors.address && (
						<span className={globalStyle.errorMessage}>
							{errors.email.message}
						</span>
					)}
					{/* postnummer felt */}
					<input
						type="zipcode"
						placeholder="Indtast dit postnummer"
						className={`${globalStyle.input} ${
							errors.zipcode ? globalStyle.errorInput : ""
						}`}
						//validering af email feltet, det skal være udfyldt, og med korekt email syntax, hvis ikke kommer der en besked
						{...register("zipcode", {
							required: "Postnummer er påkrævet",
						})}
					/>
					{/* et element som kun vises hvis der skal skrives en fejl meddelse  */}

					{errors.zipcode && (
						<span className={globalStyle.errorMessage}>
							{errors.zipcode.message}
						</span>
					)}

					{/* by felt */}
					<input
						type="city"
						placeholder="Indtast din by"
						className={`${globalStyle.input} ${
							errors.city ? globalStyle.errorInput : ""
						}`}
						//validering af email feltet, det skal være udfyldt, og med korekt email syntax, hvis ikke kommer der en besked
						{...register("city", {
							required: "By er påkrævet",
						})}
					/>
					{/* et element som kun vises hvis der skal skrives en fejl meddelse  */}

					{errors.city && (
						<span className={globalStyle.errorMessage}>
							{errors.city.message}
						</span>
					)}

					{/* email felt */}
					<input
						type="email"
						placeholder="Indtast din email"
						className={`${globalStyle.input} ${
							errors.email ? globalStyle.errorInput : ""
						}`}
						//validering af email feltet, det skal være udfyldt, og med korekt email syntax, hvis ikke kommer der en besked
						{...register("email", {
							required: "Email er påkrævet",
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: "Ugyldig emailadresse",
							},
						})}
					/>
					{errors.email && (
						<span className={globalStyle.errorMessage}>
							{errors.email.message}
						</span>
					)}
					{/* telefonnummer felt */}
					<input
						type="phone"
						placeholder="Indtast dit telefonnummer"
						className={`${globalStyle.input} ${
							errors.phone ? globalStyle.errorInput : ""
						}`}
						//validering af email feltet, det skal være udfyldt, og med korekt email syntax, hvis ikke kommer der en besked
						{...register("phone", {
							required: "Telefonnumer er påkrævet",
						})}
					/>
					{/* et element som kun vises hvis der skal skrives en fejl meddelse  */}

					{errors.phone && (
						<span className={globalStyle.errorMessage}>
							{errors.phone.message}
						</span>
					)}
					{/* et element som kun vises hvis der skal skrives en fejl meddelse  */}

					<div className={style.buttonWrapper}>
						<button type="submit" className={globalStyle.styledButton}>
							Send
						</button>
					</div>
					{message && <p className={globalStyle.message}>{message}</p>}
				</form>
			</div>
		</div>
	);
};
