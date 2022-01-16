import * as S from "./style";

export default function Selector(props) {
    return (
        <S.SelectorWrapper onClick={() => props.selectContent(props.name)}>
            {props.name}
        </S.SelectorWrapper>
    );
}
