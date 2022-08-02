import {IUser} from "../../../models/IUser";

export enum EventActionsEnum {
    GET_USERS  = 'GET_USERS'
}

export interface getUsersActions {
    type: EventActionsEnum.GET_USERS,
    payload: IUser[];
}


export type EventActions = getUsersActions;
