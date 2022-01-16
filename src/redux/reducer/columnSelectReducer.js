const initialContent = {
    Date: true,
    "App Name": true,
    "AD Request": true,
    "AD Response": true,
    Impression: true,
    Clicks: true,
    Revenue: true,
    "Fill Rate": true,
    CTR: true,
};

const reducer = (state = initialContent, action) => {
    switch (action.type) {
        case "UPDATE":
            return { ...state, [action.payload]: !state[action?.payload] };

        default:
            return state;
    }
};

export default reducer;
