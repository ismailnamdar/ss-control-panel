import React from "react";
import styled from "styled-components";
import Spin from "./Spin";

const Centered = styled.div`
	width: 100vh,
	height: 100vh,
	display: flex,
	justify-content: center,
	align-items: center,
	background-color: #070707
`;

const CenteredSpin = () => <Centered>
	<Spin/>
</Centered>;

export default CenteredSpin;