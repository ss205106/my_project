import React from 'react';
import Template from '../component/auth/Template';
import From from '../component/auth/Form';
import { useDispatch, useSelector } from 'react-redux';
import {change_mode,Register } from '../modules/authRedux';
const RegisterPage = () => {

    const dispatch = useDispatch()
    const {register} = useSelector(state=>({
        register:state.authRedux.register
    }))
    console.log(register)
    const onchange=(e)=>{
        const { name, value } = e.target;
        dispatch(change_mode("register", name, value));
    }
    const Register_click = (e)=>{
        e.preventDefault()
        const {username,password,email}=register;
        dispatch(Register(username,password,email))
    }
    return (
        <Template>
            <From  text="회원가입" mode="register" onchange={onchange} onclick={Register_click}/>
        </Template>
    );
};

export default RegisterPage;