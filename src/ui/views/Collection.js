import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-around;
`;

const Collection = ({children}) => {
	return <StyledDiv>{children}</StyledDiv>
};

export default Collection;