import styled from "styled-components";

export const TableWrapper = styled.table`
    width: 100%;

    tr {
        width: 11.11%;

        th {
            background-color: #BDBDBD;
            border-radius: 8px;
        }

        th, td {
            white-space: nowrap;
            text-align: center;
            padding: 5px 0;
        }
    }
`;
