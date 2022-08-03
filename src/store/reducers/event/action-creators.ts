import {EventActionsEnum, getUsersActions} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";

export const  EventCreators = {
    setUsersEvent: (user: IUser[]): getUsersActions => ({type:EventActionsEnum.GET_USERS, payload: user }),
    getAllUsersEvent: () => async (dispatch: AppDispatch) => {
        try {
            const arrUsers = await axios.get<IUser[]>('./users.json')

            if (arrUsers.data) {
                dispatch(EventCreators.setUsersEvent(arrUsers.data))
            }

        }catch (e) {

        }


    }
}
