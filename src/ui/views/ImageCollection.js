import React from "react";
import Collection from "./Collection";
import ImageCollectionItem from "./ImageCollectionItem";
import  { API_BASE_URL } from "../../configs/constants";

const ImageCollection = ({ data }) => {
	return <Collection>
		{data.map((url) => <ImageCollectionItem key={url} src={API_BASE_URL + "/" + url} alt={url}/>)}
	</Collection>
};

export default ImageCollection;