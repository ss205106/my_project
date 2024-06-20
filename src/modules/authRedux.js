import { handleActions } from "redux-actions"
import * as api from './api/auth'

//액션타입
const CHANGE_MODE = "auth/CHANG_MODE"
const RESET_FORM = "auth/RESET_FORM"

//액션함수
//fomr 은 "register" 냐 "login"이냐 
// key ? username,password,passwordConfim
// vlaue ? 실제값 (username , password,passwordConfim)
export const change_mode = (form, key, value) =>({type:CHANGE_MODE,form,key,value})
export const reset_form = (form) =>({type:RESET_FORM,form})

//액션타입
const REGISTER_SUCCSESS ="auth/REGISTER_SUCCSESS"
const REGISTER_FALURE ="auth/REGISTER_FALURE"
//회원가입 api 연결
export const Register =(username,password,email) => async dispath =>{
    try{
        const response = await api.register(username,password,email) //api 연결
        dispath({type:REGISTER_SUCCSESS,payload:response.data}) //data 보내줌
        // console.log(response.data)
    }catch(error){
        dispath({type:REGISTER_FALURE,payload:error}) //error
    }
}

//액션타입
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE'
//로그인 api 연결 미들웨어
export const Login = (username,password) => async dispatch =>{
    try{
        const response = await api.login(username,password)
        dispatch({type:LOGIN_SUCCESS, payload: response.data})
    }catch(error){
        dispatch({type:LOGIN_FAILURE, payload: error})
    }
}
//스테이트값
const initialState = {
    login:{
        username:'',
        password:''
    },
    register:{
        username:'',
        password:'',
        passwordConfirm:'',
        email:''
    },
    auth:null, //response.data
    authError: null //웹상에서 오는 err
}

export const authRedux = handleActions({
    [CHANGE_MODE] : (state, {form, key, value}) => {  //체인지 액션
        return{ 
        ...state,
        [form]:{
            ...state[form],
            [key]:value
        },
    }
    },
    [RESET_FORM]: (state,{form}) => ({  //인풋 값 리셋
      ...state,
      [form]:initialState[form],
      auth:null,
      authError:null
    }),//  auth = payload.data
    [REGISTER_SUCCSESS]:(state,{payload:auth}) => ({ //회원가입 성공
        ...state,
        authError:null
    }),
    [REGISTER_FALURE]: (state, {payload: authError}) =>({
        ...state,
        auth:null,
        authError
     }),
    [LOGIN_SUCCESS]: (state, {payload: auth})=>({ //로그인 성공
        ...state,
        auth,
        authError:null
    }),
    [LOGIN_FAILURE]: (state, {payload: authError}) =>({
       ...state,
       auth:null,
       authError
    })
},initialState)