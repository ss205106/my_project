import React from 'react';
import Template from '../component/auth/Template';
import Form from '../component/auth/Form';
const LoginPage = () => {
    return (
        <Template>
            <Form text="로그인" mode="login" />
        </Template>
    );
};

export default LoginPage;