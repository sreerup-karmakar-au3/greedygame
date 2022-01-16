import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
`;

export const AppName = styled.h1`
    text-align: center;
`;

export const SelectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
`;

export const SetRange = styled.div`
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 5px;
    border-radius: 5px;
`;

export const SortSettings = styled.div``;

export const SettingsButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 5px;
    border-radius: 5px;
`;

export const RangeBlock = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const DateRangeWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 33px;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 10px;

    .DateRangePicker {
        margin-bottom: 0;
    }
`;

export const SettingsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    overflow: auto;
`;
