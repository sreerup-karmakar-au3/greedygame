import * as S from "./style";

export default function Selector(props) {
    return (
        <S.SelectorWrapper
            selected={props.selected}
            onClick={() => props.selectContent(props.name)}
        >
            {props.name}
        </S.SelectorWrapper>
    );
}
