import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CreateFormData} from "../hooks/CreateFormData";
import {processAPI} from "../hooks/processAPI";

const baseURL =`https://docapi.gettheskydoctors.com/`


//fetch doctor details
export const fetchUserDetails = createAsyncThunk(
    'doctorStore/fetchUserDetails',
    async (payload, {getState}) => {
        try{
            const state = getState()
            return processAPI(
                'get',
                `${baseURL}api/doctor-profile`,
                state.authStore.userCredentials.access_token,
                {}
            )
                .then(response=>response.data)
        }
        catch (e){
            console.log(e.message)
            return e.response
        }

    }
)

//fetch doctor redirect
export const fetchRedirect = createAsyncThunk(
    'doctorStore/fetchRedirect',
    async (payload, {getState})=>{
        try{
            const state = getState()
            return processAPI(
                'post',
                `${baseURL}api/validateUser`,
                state.authStore.userCredentials.access_token,
                {
                    url: 'http://docapi.gettheskydoctors.com'
                }
            )
                .then(response=>response.data)
        } catch (e){
            console.log(e.message)
            return e.response
        }

    }
)

//upload doctor document
export const uploadDoc = async(payload) => {

    try {
        return await processAPI(
            'post',
            `${baseURL}api/onboarding/addDoc`,
            window.localStorage.token,
            CreateFormData(payload)
        )
    } catch (e) {
        return e.response

    }


}

export const updatePersonaDetails =async(payload)=>{
    try {

        return await processAPI(
            'post',
            `${baseURL}api/onboarding/updateProfile`,
            window.localStorage.token,
            CreateFormData(payload)
        )
    } catch (e) {
        return e.response

    }
}

export const verifyDoctor =async(payload)=>{
    try {

        return await processAPI(
            'post',
            `${baseURL}api/onboarding/docCred`,
            window.localStorage.token,
            CreateFormData(payload)
        )
    } catch (e) {
        return e.response

    }
}



const doctorStore = createSlice({
    name:'docStore',
    initialState:{
        userDetails:'',
        redirect:'',
        onboardingPage:1
    },
    reducers:{
        updateOnboardingPage: (state, action)=>{
            state.onboardingPage= action?.payload
        }
    },
    extraReducers:{
        [fetchUserDetails.fulfilled]: (state, {payload})=>{
            state.userDetails = payload || {}
        },
        [fetchRedirect.fulfilled]: (state, {payload})=>{
            state.redirect = payload  || {}
        }
    }
})


export const {updateOnboardingPage}  = doctorStore.actions



export default doctorStore.reducer
