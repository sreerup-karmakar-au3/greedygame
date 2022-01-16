import { getCall } from "./httpService";

export const appData = () => {
    return getCall("http://go-dev.greedygame.com/v3/dummy/apps");
};

export const reportData = (startDate, endDate) => {
    return getCall(
        `http://go-dev.greedygame.com/v3/dummy/report?startDate=${startDate}&endDate=${endDate}`
    );
};
