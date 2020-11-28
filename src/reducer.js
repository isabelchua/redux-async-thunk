const initialState = { items: [], loading: false, error: null };

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_POSTS_REQUEST":
			return {
				...state,
				loading: true,
				error: null
			};
		case "FETCH_POSTS_SUCCESS":
			return {
				...state,
				loading: false,
				items: action.payload
			};
		case "FETCH_POSTS_FAIL":
			return {
				...state,
				loading: false,
				error: action.error
			};
		case "FETCH_POSTS":
			return action.payload;
		default:
			return state;
	}
};

export default postsReducer;
