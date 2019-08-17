import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
	height: 200px;
	width: 200px;
	border-radius: 5px;
  box-shadow: 0px 0px 32px 6px #474846;
  margin: 1em;
`;

const ImageCollectionItem = ({ src, alt }) => {
	console.log(src);
	return <StyledImg src={src} alt={alt}/>
};

export default ImageCollectionItem;