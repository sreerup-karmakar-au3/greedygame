import axios from "axios";

export const getCall = (url) => {
    return axios
        .get(url)
        .then((response) => response)
        .catch((error) => error);
};
