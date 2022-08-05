import {EventActionsEnum, setEventActions, setGuestActions} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";
import {IEvent} from "../../../models/IEvent";
import UserService from "../../../api/UserService";
import {json} from "stream/consumers";

export const EventCreators = {
    setGuest: (user: IUser[]): setGuestActions => ({type: EventActionsEnum.SET_GUEST, payload: user}),
    setEvents: (events: IEvent[]): setEventActions => ({type: EventActionsEnum.SET_EVENT, payload: events}),

    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const arrUsers = await UserService.getUsers()

            if (arrUsers.data) {
                dispatch(EventCreators.setGuest(arrUsers.data))
            }

        } catch (e) {
            console.log(e)
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('event') || '[]'
            const json = JSON.parse(events) as IEvent[];
            json.push(event)
            dispatch(EventCreators.setEvents(json));
            localStorage.setItem('event', JSON.stringify(json))
        } catch (e) {
            console.log(e)
        }

    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
         try {

             const events = localStorage.getItem('event') || '[]'
             const json = JSON.parse(events) as IEvent[];
             const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
             dispatch(EventCreators.setEvents(currentUserEvents));

         }catch (e){
             console.log(e)
         }
    }

}


