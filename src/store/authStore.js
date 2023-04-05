import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {baseURL} from "../App";
import axios from "axios";

export const getCountries = createAsyncThunk(
    'authStore/getCountries',
    async (thunkAPI) => {
        try{
           return await axios.get(`${baseURL}location/countries`)
                .then(response=>response.data || [])
        }catch (e) {
            console.log(e.message)

        }

    }
)

//login user
export const LoginUser = async(payload) =>{
    try{
        return await axios.post(`${baseURL}user/login`,{
            ...payload
        })
    }catch (e) {

        return e.response

    }
}

//register user
export const RegisterUser = async (payload)=>{

    try{
        return await axios.post(`${baseURL}user/register`,{
            ...payload
        })
    }catch (e) {

        return e.response

    }
}

//verify  user otp
export const VerifyOTP = async (payload)=>{

    try{
        return await axios.post(`${baseURL}user/email/verify`,{
            ...payload
        })
    }catch (e) {

        return e.response

    }
}

//resend  user otp
export const ResendOTP = async (payload)=>{

    try{
        return await axios.post(`${baseURL}user/otp/resend`,{
            ...payload
        })
    }catch (e) {

        return e.response

    }
}

//forgot password
export const ForgotPassword = async (payload)=>{

    try{
        return await axios.post(`${baseURL}user/forget/password/init`,{
            ...payload
        })
    }catch (e) {

        return e.response

    }
}

//reset user password

export const ResetPassword = async (payload)=>{

    try{
        return await axios.post(`${baseURL}user/change/password`,{
            ...payload
        })
    }catch (e) {

        return e.response

    }
}



export const getCategories = createAsyncThunk(
    'authStore/getCategories',
    async(thunkAPI)=>{
        try{
            return axios.get(`${baseURL}usercategory/all`)
                .then(response => response.data || [])
        }catch (e) {
            console.log(e.message)

        }
    }
)

const authStore = createSlice({
    name:'authStore',
    initialState:{
        country:[],
        categories:[],
        regDetails:{
            email:'',
            phone:'',
            regMode:''
        },
        userCredentials:''

    },

    reducers:{
        updateRegDetails: (state, action) => {
            state.regDetails= {
                ...action?.payload
            }
        },
        updateUserCredentials: (state, action) => {
              state.userCredentials= action?.payload
        }

    },
    extraReducers:{
        [getCountries.fulfilled]: (state, { payload }) => {
            state.country = payload?.data || []
        },
        [getCategories.fulfilled]: (state, {payload})=>{
            state.categories = payload?.data || []
        }

    }
})




export const {updateRegDetails, updateUserCredentials} = authStore.actions

export default authStore.reducer