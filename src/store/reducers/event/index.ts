import {IUser} from "../../../models/IUser";
import {EventActions, EventActionsEnum} from "./types";


export const IEventState = {
    users: {} as IUser,
    error: '',
}

export default function eventReducer(state= IEventState, action: EventActions) {
    switch (action.type) {
        case EventActionsEnum.GET_USERS:
            return {...state, users: action.payload }
        default:
            return state
    }

}
