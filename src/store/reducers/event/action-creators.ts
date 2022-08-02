import {EventActionsEnum, getUsersActions} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";

export const  EventCreators = {
    setUsers2: (user: IUser[]): getUsersActions => ({type:EventActionsEnum.GET_USERS, payload: user }),
    getAllUsers2: () => async (dispatch: AppDispatch) => {
        try {

            const arrUsers = await axios.get<IUser[]>('./users.json')

            console.log(arrUsers.data)

            if (arrUsers.data) {
                dispatch(EventCreators.setUsers2(arrUsers.data))
            }

        }catch (e) {

        }


    }
}
