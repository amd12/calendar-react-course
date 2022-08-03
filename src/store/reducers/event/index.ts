import {EventActions, EventActionsEnum, eventState} from "./types";

export const IEventState: eventState = {
    users: [],
    error: '',
}

export default function eventReducer(state= IEventState, action: EventActions) : eventState  {
    switch (action.type) {
        case EventActionsEnum.GET_USERS:
            return {...state, users: [...state.users, ...action.payload] }
        default:
            return state
    }
}
