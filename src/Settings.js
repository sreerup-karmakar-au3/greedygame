import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "./redux";
import Selector from "./components/Selector";
import { tableContent } from "./constant/data.js";

import * as S from "./style";

export default function Settings() {
    const dispatch = useDispatch();

    const { selectContent } = bindActionCreators(actionCreators, dispatch);

    return (
        <S.SettingsWrapper>
            {tableContent.map((content, index) => (
                <Selector
                    key={index}
                    name={content}
                    selectContent={selectContent}
                />
            ))}
        </S.SettingsWrapper>
    );
}
