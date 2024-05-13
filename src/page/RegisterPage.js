import React from 'react';
import Template from '../component/auth/Template';
import From from '../component/auth/Form';
import { useDispatch } from 'react-redux';
const RegisterPage = () => {

    const dispatch = useDispatch()

    const onchange=(e)=>{
        const { name, value } = e.target;
        dispatch(change_mode("register", name, value));
    }

    return (
        <Template>
            <From  text="회원가입" mode="register"/>
        </Template>
    );
};

export default RegisterPage;