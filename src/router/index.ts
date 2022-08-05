import React from "react";
import Login from "../pages/login";
import Event from "../pages/Event";

export interface IRoute {
    patch: string,
    component: React.ComponentType;
    exact?: boolean;
}

export enum RoteNames {
    LOGIN = '/login',
    EVENT = '/',
}

export const publicRouter: IRoute[] = [
    {patch: RoteNames.LOGIN, exact: true, component: Login}
]

export const privateRouter: IRoute[] = [
    {patch: RoteNames.EVENT, exact: true, component: Event}
]

