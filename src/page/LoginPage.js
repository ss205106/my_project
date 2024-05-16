import React, { useState } from 'react';
import Template from '../component/auth/Template';
import Form from '../component/auth/Form';
import { change_mode } from '../modules/authRedux';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../modules/authRedux';
const LoginPage = () => {
    
    const {login,authError,auth} = useSelector(state => ({
        login:state.authRedux.login,
        authError:state.authRedux.authError,
        auth:state.authRedux.auth,
    }))
    const [error,setError] = useState(null)
    const dispatch = useDispatch()
    
    const onchange=(e)=>{
        const { name, value } = e.target;
        dispatch(change_mode("login", name, value));
    }
    
    const login_click = (e)=>{
        e.preventDefault()
        const {username,password}=login;
        dispatch(Login(username,password))
    }
    
    return (
        <Template>
            <Form text="로그인" mode="login" onchange={onchange} onclick={login_click}/>
        </Template>
    );
};

export default LoginPage;