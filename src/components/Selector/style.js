import styled from "styled-components";

export const SelectorWrapper = styled.div`
    cursor: pointer;
    border: 1px solid
        ${(props) =>
            props.selected ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.1)"};
    border-radius: 5px;
    padding: 5px;
`;
