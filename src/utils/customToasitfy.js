import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successToastify=(msg)=>{
    toast.success(msg, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}




// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const successToastify = (msg) => {
//   toast.success(msg, {
//     position: "bottom-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//   });
// };
