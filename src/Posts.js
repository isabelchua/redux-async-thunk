import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./actions";

const Posts = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state);

	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	const renderPosts = () => {
		if (state.loading) {
			return <h1>loading</h1>;
		}

		return state.items.map(el => {
			return <h3>{el.title}</h3>;
		});
	};

	return <div>{renderPosts()}</div>;
};

export default Posts;
