
import Onboarding from "../views/doctor/onboarding/onboarding";
import Index from '../views/doctor/index'
import Dashboard from "../views/doctor/dashboard/dashboard";
import Appointment from "../views/doctor/appointments/appointment";
import Patient from '../views/doctor/patients/patient'
import ScheduleTiming from "../views/doctor/schedule/scheduleTiming";
import AvailableTiming from "../views/doctor/availableTiming/availableTiming";
import Invoices from "../views/doctor/invoices/invoices";
import InvoiceDetails from "../views/doctor/invoices/invoiceDetails";
import Account from "../views/doctor/accounts/account";
import Reviews from "../views/doctor/reviews/reviews";
import SocialMedia from "../views/doctor/socialmedia/socialMedia";
import Password from "../views/doctor/password/password";
import Message from "../views/doctor/message/message";
import Profile from "../views/doctor/profile/profile";
import PatientDetails from "../views/doctor/patients/patientDetails";
import AddPrescription from "../views/doctor/patients/addPrescription";
import EditPrescription from "../views/doctor/patients/editPrescription";
import Billing from "../views/doctor/patients/billing";
import EditBilling from "../views/doctor/patients/editBilling";
import DoctorProfile from "../views/doctor/doctor/profile";
import Booking from "../views/doctor/bookings/booking";
import Checkout from "../views/doctor/checkout/checkout";
import BookingSuccess from "../views/doctor/checkout/bookingSuccess";
import VideoCall from "../views/doctor/video/videoCall";


export const DoctorRoute = [
    {
        path:'/doctor/onboarding',
        name:'onboarding',
        element: <Onboarding/>
    },
    {
        path:'doctor',
        name:'doctorIndex',
        element: <Index/>,
        children:[
            {
                path:'dashboard',
                name:'dashboard',
                element:<Dashboard/>
            },
            {
                path:'appointments',
                name:'appointments',
                element:<Appointment/>
            },
            {
                path:'my-patients',
                name:'patient',
                element:<Patient/>
            },
            {
                path:'schedule-timing',
                name:'scheduleTiming',
                element:<ScheduleTiming/>
            },
            {
                path:'available-timings',
                name:'availableTiming',
                element:<AvailableTiming/>
            },
            {
                path:'invoices',
                name:'invoices',
                element:<Invoices/>
            },
            {
                path:'invoice-details',
                name:'invoicesDetails',
                element:<InvoiceDetails/>
            },
            {
                path:'accounts',
                name:'accounts',
                element:<Account/>
            },
            {
                path:'reviews',
                name:'reviews',
                element:<Reviews/>
            },
            {
                path:'social-media',
                name:'socialMeida',
                element:<SocialMedia/>
            },

            {
                path:'change-password',
                name:'changePassword',
                element:<Password/>
            },
            {
                path:'message',
                name:'message',
                element:<Message/>
            },
            {
                path:'profile',
                name:'profile',
                element:<Profile/>
            },
            {
                path:'patient-details',
                name:'patientDetails',
                element:<PatientDetails/>
            },
            {
                path:'add-prescription',
                name:'addPrescription',
                element: <AddPrescription/>
            },
            {
                path:'edit-prescription',
                name:'editPrescription',
                element: <EditPrescription/>
            },
            {
                path:'add-billing',
                name:'addBilling',
                element: <Billing/>
            },
            {
                path:'edit-billing',
                name:'editBilling',
                element: <EditBilling/>
            },
            {
                path:'doctor-profile',
                name:'doctorProfile',
                element: <DoctorProfile/>
            },
            {
                path:'booking',
                name:'booking',
                element: <Booking/>
            },
            {
                path:'checkout',
                name:'checkout',
                element: <Checkout/>
            },
            {
                path:'booking-success',
                name:'bookingSuccess',
                element: <BookingSuccess/>
            },
            {
                path:'video-call',
                name:'videoCall',
                element: <VideoCall/>
            },
        ]
    }
]

