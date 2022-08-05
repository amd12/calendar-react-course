import {EventActions, EventActionsEnum, EventState} from "./types";

export const initialState : EventState = {
    guests: [],
    events: [],
}

export default function EventReducer(state= initialState, action: EventActions) : EventState  {
    switch (action.type) {
        case EventActionsEnum.SET_GUEST:
            return {...state, guests: action.payload}
        case EventActionsEnum.SET_EVENT:
            return {...state, events: action.payload}
        default:
            return state
    }
}
