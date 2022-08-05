import React, {FC} from 'react';
import {Layout, Menu} from "antd";
import {useNavigate } from "react-router-dom";
import {RoteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar:FC = () => {

    const navigate  = useNavigate();
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()

    const handlerPage = (key: string) =>{
        console.log(key)

        switch (key) {
            case 'Login':
             navigate(RoteNames.LOGIN);
                break;
            case 'Go out':
                navigate(RoteNames.LOGIN);
                logout();
                break;
        }
    }

    const checkAut = () =>{
        if (isAuth){
            return 'Go out'
        }
        return 'Login'
    }

    const items = [
        { label: checkAut(), key: checkAut() , },
        {label: 'Event', key: 'Event'},

    ];

    return (
        <Layout.Header>
            {isAuth &&  <div className="logo">{user.username}</div>}
            <Menu items={items} theme='dark' mode='horizontal' onClick={(item)=> handlerPage(item.key)} selectable={false}>
            </Menu>
        </Layout.Header>
        )
};

export default Navbar;
