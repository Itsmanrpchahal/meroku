import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
    feed
} from "../store";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(
        Object.assign(
            {},
            feed,
        ),
        dispatch,
    );
};