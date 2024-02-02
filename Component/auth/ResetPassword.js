// import React from 'react'
// import './ResetPassword.css';
// import img2 from '../../assets/pr1.jpg';
// import { Formik ,Form, Field, ErrorMessage} from 'formik';
// import * as yup from "yup";
// import { useDispatch } from 'react-redux';
// import { forgetPassword } from '../../features/auth/AuthSlice';


// export default function ResetPassword() {
//  const dispatch=useDispatch();
//   const initialValue = {
//     email: "",

//   };


//   const validationSchema = yup.object().shape({
//     email: yup.string().required().email("Please enter your email"),
    
//   })
   
//   const handleSubmit = async (values) => {
//     // console.log("value",values);
//     dispatch(forgetPassword(values));
//   };

//   return (
//     <Formik
//       initialValues={initialValue}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//             >
//     <Form>
//     <div className='ResetPassword'>
//     <div className='Reset-password-box'>
//     <div className='Reset-box'>
//     <h2>Reset Password</h2>
//     <img src={img2} className='star-img'></img>
//     {/* <h6><input type='email' placeholder=' &#128231; Email' ></input></h6> */}
//     <h6>
//     <Field type='email' name='email' placeholder=' &#128231; Enter Your Email' ></Field>
//     <br/>
//     <ErrorMessage name='email'></ErrorMessage>
//     </h6>
//     <button className='reset-btn'>Reset</button>
//     </div>
//     </div>
     
//     </div>
//     </Form>
//     </Formik>
//   )
// }



import React, { useEffect } from 'react'
import './ResetPassword.css';
import img2 from '../../assets/pr1.jpg';
import { Formik ,Form, Field, ErrorMessage} from 'formik';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../features/auth/AuthSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


export default function ResetPassword() {
 const dispatch=useDispatch();
 const param = useParams();
 const {token,id} = param;
//  const navigate = useNavigate();

 const resetstate= useSelector((state)=> state.user);
//  console.log(resetstate);

const {error,message}=resetstate;
// console.log(error,message);
useEffect(()=>{
  if(message){
    toast.success(message, { position: toast.POSITION.TOP_CENTER });
    // navigate("/")
  }
  if(error){
    toast.error(error, { position: toast.POSITION.TOP_CENTER });
  }
},[message,error]);

  const initialValue = {
    newPassword: "",
    confirm:"",
  };


  const validationSchema = yup.object().shape({
    newPassword : yup.string().required("Please enter New your email"),
    confirm:yup.string().required("please enter confirm email"),
  })
   
  const handleSubmit = async (values) => {
    console.log("value",values);
    // dispatch(forgetPassword(values));
    let obj={
      ...values,
      id: id,
      token: token,
    };
      dispatch(ResetPassword(obj));
  };

  return (
    <>
    <ToastContainer/>
    <Formik
      initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
    <Form>
    <div className='ResetPassword'>
    <div className='Reset-password-box'>
    <div className='Reset-box'>
    <h2>Reset Password</h2>
    <img src={img2} className='star-img'></img>
    {/* <h6><input type='email' placeholder=' &#128231; Email' ></input></h6> */}
    <h6>
    <Field type='password' name='newPassword' placeholder=' &#128231; Enter Your New Password' ></Field>
    <br/>
    <ErrorMessage name='newPassword'></ErrorMessage>
    </h6>
    <Field type='password' name='confirm' placeholder='&#128231; Enter Your Confirm Email'></Field>
    <br/>
    <ErrorMessage name='confirm'></ErrorMessage>
    <button className='reset-btn'>Reset</button>
    </div>
    </div>
     
    </div>
    </Form>
    </Formik>
    </>
  )
}


