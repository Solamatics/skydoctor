import Index from "../views/patient";
import Onboarding from "../views/patient/onboarding/onboarding";
import Dashboard from "../views/patient/dashboard/dashboard";
import Favorite from "../views/patient/favorite/favorite";
import DoctorProfile from "../views/patient/doctor/doctorProfile";
import Booking from "../views/patient/bookings/booking";
import Checkout from "../views/patient/checkout/checkout";
import BookingSuccess from "../views/patient/checkout/bookingSuccess";
import Dependent from "../views/patient/dependent/dependent";
import Message from "../views/patient/message/message";
import Account from "../views/patient/accounts/account";
import Order from "../views/patient/orders/order";
import MedicalRecords from "../views/patient/records/medicalRecords";
import MedicalDetails from "../views/patient/medicalDetails/medicalDetails";
import Profile from "../views/patient/profile/profile";
import ChangePassword from "../views/patient/password/changePassword";
import OrderDetails from "../views/patient/orders/orderDetails";

export const PatientRoute = [
    {
        path:'/patient/onboarding',
        element:<Onboarding/>,
    },
    {
        path:'/patient/',
        element: <Index/>,
        children:[
            {
                path:'dashboard',
                element:<Dashboard/>
            },
            {
                path:'favourites',
                element:<Favorite/>
            },
            {
                path:'doctor-profile',
                element:<DoctorProfile/>
            },
            {
                path:'booking',
                element:<Booking/>
            },
            {
                path:'checkout',
                element:<Checkout/>
            },
            {
                path:'booking-success',
                element:<BookingSuccess/>
            },
            {
                path:'dependents',
                element:<Dependent/>
            },
            {
                path:'chat',
                element:<Message/>
            },
            {
                path:'accounts',
                element:<Account/>
            },
            {
                path:'orders',
                element:<Order/>
            },
            {
                path:'medical-records',
                element:<MedicalRecords/>
            },
            {
                path:'medical-details',
                element:<MedicalDetails/>
            },
            {
                path:'profile-settings',
                element:<Profile/>
            },
            {
                path:'change-password',
                element:<ChangePassword/>
            },
            {
                path:'invoice-details',
                element:<OrderDetails/>
            },
        ]
    }
]