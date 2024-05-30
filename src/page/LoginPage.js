import React, { useState } from 'react';
import Template from '../component/auth/Template';
import Form from '../component/auth/Form';
import { change_mode } from '../modules/authRedux';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../common/Header';
import { Login } from '../modules/authRedux';
import Footer from '../common/Footer';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;
const LoginPage = () => {
    
    const {login,authError,auth} = useSelector(state => ({
        login:state.authRedux.login,
        authError:state.authRedux.authError,
        auth:state.authRedux.auth,
    }))
    const [error,setError] = useState(null)

    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    const onchange=(e)=>{
        const { name, value } = e.target;
        dispatch(change_mode("login", name, value));
    }
    
    const login_click = (e)=>{
        e.preventDefault()
        const {username,password}=login;
        dispatch(Login(username,password))
        navigate("/store")
    }
    
    return (
        <PageContainer>
        <Header/>
        <div >
            <Template>
                <Form text="로그인" mode="login" onchange={onchange} onclick={login_click}/>
            </Template>
        </div>
        <Footer/>
        </PageContainer>
    
    );
};

export default LoginPage;