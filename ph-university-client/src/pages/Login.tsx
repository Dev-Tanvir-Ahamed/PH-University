import { Button } from 'antd';
import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser, TUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PHForm from '../components/form/PHForm';
import InputForm from '../components/form/InputForm';
type Inputs = {
    id : string,
    password : string
}



const Login = () => {
    const navigate = useNavigate()
    // const { register, handleSubmit } = useForm<Inputs>();
    const [login] = useLoginMutation()
   const dispatch = useAppDispatch()
    
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<FieldValues> = async (data : any) => {
    console.log(data);
   
    const toastId = toast.loading("Loading...")
   try {
   
    const userInfo = {
        id : data.id,
        password : data.password
    }
    console.log(userInfo);
    const res = await login(userInfo).unwrap()
    console.log(res);
    const user = verifyToken(res.data.accessToken) as TUser
    dispatch(setUser({user : user, token : res.data.accessToken}))
    navigate(`/${user.role}/dashboard`)
    toast.success("Logged In Succesfully", {id : toastId, duration : 2000})
   } catch (error) {
    console.log(error);
    toast.error("Invalid Id or Password", {id : toastId, duration : 2000})
   }
    
  }
  const defaultValues = {
    id :"A-0001",
    password : "admin123"
}
   
    return (
        <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
            <div style={{marginLeft : "10px"}}>
            <InputForm name="id" label="ID : " type='text'/>
            <InputForm name="password" label="Password : " type="password" />
            <Button htmlType='submit'>Submit</Button>
            </div>
        </PHForm>
    );
};

export default Login;