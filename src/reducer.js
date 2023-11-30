const initialState = {value: 0};

const reducer = (state = initialState, action) => {
	const {type, payload} = action;

	switch (type) {
		case "INC":
			return {
                ...state,
                value: state.value + 1
            };
		case "DEC":
			return {
                ...state,
                value: state.value - 1
            }
		case "RND":
			return {
                ...state,
                value: state.value * payload
            }
		default: 
			return state;
	}
};

export default reducer;