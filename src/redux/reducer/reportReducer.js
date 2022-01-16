const reducer = (state = [], action) => {
    switch (action.type) {
        case "SET REPORT":
            return [...action.payload];

        default:
            return state;
    }
};

export default reducer;
