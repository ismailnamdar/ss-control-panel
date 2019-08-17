import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Button from "../views/Button";
import Input from "../views/Input";
import Tag from "../views/Tag";
import ImageCollection from "../views/ImageCollection";

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1em;
	background-color: ${props => props.theme.secondaryColor.light};
`;
const CheckboxGroup  = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	border-radius: 5px;
`;
const StyledLabel = styled.label`
	border-radius: 1px;
	border-bottom-style: solid;
	border-bottom-color: #e8e8e8;
	border-bottom-width: 2px;
	padding: 1em;
	color: ${props => props.theme.textColor.light}
	background-color: ${props => props.theme.secondaryColor.dark};
	&:hover {
		color: ${props => props.theme.textColor.dark}
		background-color: ${props => props.theme.secondaryColor.light}
		border-style: solid;
	}
`;
const StyledSpan = styled.span`
	font-size: 18px;
	border-radius: 2px;
	margin: 0.2em;
	padding: 0.2em;
`;

const SSControlPanel = ({ data, dataMapById = {}, onRead, onCreate, onDelete }) => {
	const [checkedId, setCheckedId] = useState();
	const [url, setUrl] = useState("");
	const [period, setPeriod] = useState(0);
	useEffect(() => {
		onRead();
	}, [onRead]);
	const handleSelect = useCallback((id) => {
		setCheckedId(id);
		setUrl(dataMapById[id].url);
		setPeriod(dataMapById[id].period);
	}, [setCheckedId, setUrl, setPeriod, dataMapById]);
	const handleDelete = useCallback(() => onDelete(checkedId), [onDelete, checkedId]);
	const handleCreate = useCallback(() => onCreate({url, period: Number(period)}), [url, period, onCreate]);
	const handleUrlChange = useCallback((e) => setUrl(e.target.value), [setUrl]);
	const handlePeriodChange = useCallback((e) => setPeriod(e.target.value), [setPeriod]);
	const handleReset = useCallback(() => setCheckedId(null), [setCheckedId]);
	return <StyledDiv>
		<div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "1em" }}>
			<Input onChange={handleUrlChange} width={"250px"} value={url}/>
			<Input type={"number"} onChange={handlePeriodChange} width={"80px"} margin={"0px 0px 0px 8px"} value={period}/>
			<div style={{ marginLeft: "1em" }}>
				<Button onClick={handleCreate}>{"ADD"}</Button>
				<Button onClick={handleDelete}>{"DELETE"}</Button>
				<Button onClick={handleReset}>{"RESET"}</Button>
			</div>
		</div>
		<CheckboxGroup>
			{data.map(({ _id, url = "" , period }) => <StyledLabel key={url}>
				<input type={"radio"} name={"radio"} checked={checkedId === _id} onChange={() => handleSelect(_id)}/>
				<StyledSpan>{url}</StyledSpan>
				<Tag>{period}</Tag>
				<Tag>{"Active"}</Tag>
			</StyledLabel>)}
		</CheckboxGroup>
		{checkedId && <div>
			<ImageCollection data={dataMapById[checkedId].images.length > 0 ? dataMapById[checkedId].images : []}/>
		</div>}
	</StyledDiv>
};

export default SSControlPanel;