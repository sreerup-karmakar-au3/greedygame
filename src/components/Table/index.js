import * as S from "./style";

export default function Table(props) {
    return (
        <S.TableWrapper>
            <tr>
                {props.fixedCol.map((col, index) => (
                    <th key={index}>{col}</th>
                ))}
                {props.varyCol.map((col, index) => {
                    return (
                        props.visibleContent[col] && <th key={index}>{col}</th>
                    );
                })}
            </tr>
            {props.content.map((data, index) => {
                return (
                    <tr key={index}>
                        {props.fixedCol.map((col, index) => (
                            <td key={index}>{data[col]}</td>
                        ))}
                        {props.varyCol.map((col, index) => {
                            return (
                                props.visibleContent[col] && (
                                    <td key={index}>{data[col]}</td>
                                )
                            );
                        })}
                    </tr>
                );
            })}
        </S.TableWrapper>
    );
}
