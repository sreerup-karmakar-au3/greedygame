import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "./redux";
import Selector from "./components/Selector";

import * as S from "./style";

export default function Settings() {
    const dispatch = useDispatch();
    const fields = useSelector((state) => state.fields);

    const { selectContent } = bindActionCreators(actionCreators, dispatch);

    return (
        <S.SettingsWrapper>
            {Object.keys(fields).map((content, index) => (
                <Selector
                    selected={fields[content]}
                    key={index}
                    name={content}
                    selectContent={selectContent}
                />
            ))}
        </S.SettingsWrapper>
    );
}
