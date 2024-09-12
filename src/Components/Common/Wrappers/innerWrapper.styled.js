import styled from "styled-components";

export const InnerWrapperStyle = styled.section`
	border: solid 1px black;
	// background-color: red;
	background: linear-gradient(
		to bottom,
		#${(props) => props.$bgcolor || "119b1e"},
		#fff
	);
`;
