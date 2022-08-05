import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";

export interface EventState {
    guests: IUser[];
    events: IEvent[];
}


export enum EventActionsEnum {
    SET_GUEST = 'SET_GUEST',
    SET_EVENT = 'SET_EVENT'
}

export interface setGuestActions {
    type: EventActionsEnum.SET_GUEST,
    payload: IUser[];
}

export interface setEventActions {
    type: EventActionsEnum.SET_EVENT,
    payload: IEvent[];
}


export type EventActions = setGuestActions | setEventActions;
