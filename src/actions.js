import Axios from "axios";

export const fetchPosts = async () => {
	const response = await Axios.get(
		"https://jsonplaceholder.typicode.com/posts"
	);

	return {
		type: "FETCH_POSTS",
		payload: response.data
	};
};
