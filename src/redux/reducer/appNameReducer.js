const reducer = (state = {}, action) => {
    switch (action.type) {
        case "SET APP":
            let tempState = {};
            for (const ele of action.payload) {
                tempState = { ...tempState, [ele["app_id"]]: ele["app_name"] };
            }
            return tempState;

        default:
            return state;
    }
};

export default reducer;
