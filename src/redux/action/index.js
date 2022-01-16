export const selectContent = (param) => {
    if (param === null) {
        return;
    }
    return (dispatch) => {
        dispatch({
            type: "UPDATE",
            payload: param
        });
    };
};

export const setAppData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SET APP",
            payload: data,
        });
    };
};

export const setReport = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SET REPORT",
            payload: data,
        });
    };
};
