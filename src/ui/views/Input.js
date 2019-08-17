import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
		height: 30px;
		width: ${props => props.width};;
		margin: ${props => props.margin};
		border-radius: 4px;
		border-style: solid;
		border-color: white;
		font-size: 18px;
	`;

const Input = ({ type = "text", value, width = 250, margin = 0, onChange }) => {
	return <StyledInput type={type} width={width} margin={margin} onChange={onChange} value={value}/>;
};

export default Input;