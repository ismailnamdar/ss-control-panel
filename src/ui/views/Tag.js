import React, { memo } from "react";
import { string } from "prop-types";
import styled from "styled-components";

const StyledTag = styled.span`
	padding: 0.3em;
  border-style: solid;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => props.theme.primaryColor.dark};
  font-size: 12px;
  background-color: rgba(0,0,0,0);
  margin-right: 0.4em;
`;
/**
 * simple tag for data display
 * @type {{compare, $$typeof, type}}
 */
const Tag = memo(({ children }) => {
	return <StyledTag>{children}</StyledTag>
});

Tag.propTypes = {
	backgroundColor: string,
	textColor: string
};

Tag.defaultProps = {
	backgroundColor: "lightgrey",
	textColor: "black"
};

export default Tag;