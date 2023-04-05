
import toast from 'react-hot-toast';
import {capitalize} from "./capitalize";
export const SuccessToast = (message) => {
    return toast.success(capitalize(message), {
        style: {
            border: '0',
            padding: '8px 15px',
            color: 'rgb(76,175,80)',
            fontSize:'12px',
            backgroundColor: 'rgb(230,242,230)'


        }
    })
}


export const ErrorToast = (message) =>{
    return toast.error(capitalize(message) || 'Error occurred, kindly try again', {
        style: {
            border: '0',
            padding: '8px 15px',
            color: 'rgb(245,86,73)',
            fontSize:'12px',
            backgroundColor: 'rgb(250,229,227)'
        },
    })
}