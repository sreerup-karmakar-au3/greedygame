import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";

import { appData, reportData } from "./http";
import { actionCreators } from "./redux";
import Settings from "./Settings";
import Table from "./components/Table";

import CalendarIcon from "./assets/calendar_icon.svg";
import SettingsIcon from "./assets/settings_icon.svg";

import * as S from "./style";

export default function App() {
    const [date, setDate] = useState(null);
    const [dateOpen, setDateOpen] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const state = useSelector((state) => state);

    const dispatch = useDispatch();

    const { setAppData, setReport } = bindActionCreators(
        actionCreators,
        dispatch
    );

    useEffect(() => {
        appData()
            .then((response) => setAppData(response.data.data))
            .catch((error) => console.error(error));
    }, []);

    const handleSelect = (value) => {
        setDateOpen(false);
        let startDate = moment(value?.start?._i).format("YYYY-MM-DD");
        let endDate = moment(value?.end?._i).format("YYYY-MM-DD");

        reportData(startDate, endDate)
            .then((response) => setReport(response.data.data))
            .catch((error) => console.error(error));
        setDate(value);
    };

    const mapData = (reportData, appData) => {
        let mappedData = [];
        for (const ele of reportData) {
            mappedData = [
                ...mappedData,
                {
                    "App Name": appData[ele.app_id],
                    Date: moment(ele.date).format("DD MMMM YYYY"),
                    "AD Request": ele.requests,
                    "AD Response": ele.responses,
                    Impression: ele.impressions,
                    Clicks: ele.clicks,
                    Revenue: ele.revenue.toFixed(2),
                    "Fill Rate": ((ele.requests / ele.responses) * 100).toFixed(
                        2
                    ),
                    CTR: ((ele.clicks / ele.impressions) * 100).toFixed(2),
                },
            ];
        }
        return mappedData;
    };

    return (
        <S.Wrapper>
            <S.AppName>Analytics</S.AppName>

            <S.SelectionWrapper>
                <S.SetRange onClick={() => setDateOpen(!dateOpen)}>
                    <S.RangeBlock>
                        <img src={CalendarIcon} alt="icon" />
                        {date != null ? (
                            <span>
                                {moment(date?.start?._i).format("MMM Do, YY")} -{" "}
                                {moment(date?.end?._i).format("MMM Do, YY")}
                            </span>
                        ) : (
                            <span>Select range</span>
                        )}
                    </S.RangeBlock>
                    {dateOpen ? (
                        <S.DateRangeWrapper
                            onClick={(e) => e.stopPropagation()}
                        >
                            <DateRangePicker
                                value={date}
                                onSelect={handleSelect}
                                singleDateRange={true}
                            />
                        </S.DateRangeWrapper>
                    ) : (
                        ""
                    )}
                </S.SetRange>

                <S.SettingsButton
                    onClick={() => setShowSettings(!showSettings)}
                >
                    <img src={SettingsIcon} alt="icon" />
                    <span>Settings</span>
                </S.SettingsButton>
            </S.SelectionWrapper>

            {showSettings ? <Settings /> : ""}

            {date !== null ? (
                <S.ContentWrapper>
                    <Table
                        content={mapData(state.report, state.apps)}
                        visibleContent={state.fields}
                        fixedCol={["Date", "App Name"]}
                        varyCol={[
                            "AD Request",
                            "AD Response",
                            "Impression",
                            "Clicks",
                            "Revenue",
                            "Fill Rate",
                            "CTR",
                        ]}
                    />
                </S.ContentWrapper>
            ) : (
                ""
            )}
        </S.Wrapper>
    );
}
