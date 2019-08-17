import React from "react";
import routes from "../../configs/routes";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Nav = styled.ul`
	list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.primaryColor.dark};
  border-bottom: white;
  border-style: solid;
  border-width: 1px;
  text-decoration: none;
  a {
    color: white;
    text-decoration: none;
  }
`;

const NavItem = styled.li`
	float: left;
	display: block;
	color: white;
	text-align: center;
	padding: 1em;
	&:hover {
    background-color: ${(props) => props.theme.primaryColor.light};
  }
`;
/**
 * contains localization toggle item and routes
 * @returns {*}
 * @constructor
 */
const NavigationBar = () => <Nav>
	{routes.map(({name, path}) =>
		name != null && <Link key={path} to={path}><NavItem key={name + path}>{name}</NavItem></Link>)}
</Nav>;

export default NavigationBar;