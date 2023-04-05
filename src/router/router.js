import {createBrowserRouter} from "react-router-dom";



import Plans from "../views/guest/plans";
import Services from "../views/services";
import Login from "../views/guest/login/login";
import Registration from "../views/guest/registration/registration";
import ForgotPassword from "../views/guest/forgotPassword/forgotPassword";

import {DoctorRoute} from "./doctorRoute";
import {PatientRoute} from "./patientRoute";
import {MerchantRoute} from "./merchantRoute";

const router = createBrowserRouter([
    {
        path:'/',
        name:'home',
        element:<Login/>
    },
    {
        path:'/plans',
        name:'plans',
        element:<Plans/>
    },
    {
        path:'/services',
        name:'services',
        element:<Services/>
    },
    {
        path:'/login',
        name:'login',
        element:<Login/>
    },
    {
        path:'/signup',
        name:'register',
        element:<Registration/>
    },
    {
        path:'/forgot-password',
        name:'forgotPassword',
        element:<ForgotPassword/>
    },


    //doctor routes
    ...DoctorRoute,

    //patient routes
    ...PatientRoute,

    //merchant routes
    ...MerchantRoute


])



export default router