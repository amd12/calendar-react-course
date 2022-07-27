import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";

export const ActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user }),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setError: (error: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload: isLoading}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(ActionCreators.setIsLoading(true))

            setTimeout(async () =>  {

                const response = await axios.get<IUser[]>('./users.json')
                const mockUser = response.data.find(user => user.username === username && user.password === password);

                if (mockUser){
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);

                    dispatch(ActionCreators.setIsAuth(true));
                    dispatch(ActionCreators.setUser(mockUser))
                }else {
                    dispatch(ActionCreators.setError('Error 403'))
                    dispatch(ActionCreators.setIsLoading(false))
                }

            }, 1000);

        }catch (e) {
             dispatch(ActionCreators.setError('Error login' + e))
        }
    },
    logout: () => (dispatch: AppDispatch) => {

            localStorage.removeItem('auth');
            localStorage.removeItem('username');
            dispatch(ActionCreators.setIsAuth(false))
            dispatch(ActionCreators.setUser({} as IUser))
    }

}
