import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1em;
  border-radius: 5px;
  border-width: 2px;
  padding: 0.6em;
  text-align: center;
  background-color: ${props => props.theme.secondaryColor.dark};
  color: ${props => props.theme.textColor.light};
  &:hover {
  	background-color: ${props => props.theme.secondaryColor.light};
  	color: ${props => props.theme.textColor.dark};
  }
`;

const Button = ({ onClick, label, placeholder, children }) => <StyledButton onClick={onClick}>
	{children}
</StyledButton>;

export default Button;