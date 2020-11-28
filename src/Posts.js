import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./actions";

const Posts = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, []);
	return <div>posts</div>;
};

export default Posts;
