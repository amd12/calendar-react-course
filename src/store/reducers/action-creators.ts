import {ActionCreators} from "./auth/action-creators";
import {EventCreators} from "./event/action-creators";

export const allActionCreators = {
    ...ActionCreators,
    ...EventCreators
}
