import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import './SignUp.css'
import { useState } from "react";
import { BsBack, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { validationSchema } from "./ValidationSchema";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";import axios from "axios";
const Signup = () => {
const [showPassword,setShowPassword] = useState(false)
const getBack = useNavigate()

const {register,handleSubmit,control,formState:{errors},setError,reset} = useForm({
    resolver:yupResolver(validationSchema)
})

const onSubmit = async (data)=>{
    console.log(data);
    const name = data.name.split(' ').join('_').toLowerCase();
    const username = `${Date.now()}_${name}`;
    // console.log(username);
 
    delete data.confirmPassword
    const findEmailByemail= await axios.get(`http://localhost:8800/api/users?email=${data.email}`)

    if(findEmailByemail.data.length > 0){
        setError('email', {message:'exsits'})
    }
    else{
    try {
        await axios.post('http://localhost:8800/api/auth/register',{...data,username}) 
        console.log('successfull')
        reset()
    } catch (error) {
        console.log(error);
    }
    }

}

    return (
        <div className="form-main-content">
        <fieldset><legend><h3>Register Now</h3></legend>
        <div className="goHomeBack">
        <i onClick={()=> getBack('/')}><IoHomeOutline /></i>
        <i onClick={()=>getBack(-1)}><BsBack /></i>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name:</label><br />
                <div className="form-group">
                <input type="text" id="name" {...register('name')}/>
                </div>
                {errors.name && <p>{errors.name.message}</p>}

                <label htmlFor="email">Email:</label><br />
                 <div className="form-group">
                <input type="text" id="email" {...register('email')}/>
                 </div>
                {errors.email && <p>{errors.email.message}</p>}

                <label htmlFor="country">Country:</label><br />
                <div className="form-group">
                <input type="text" id="country" {...register('country')}/>
                </div>
                {errors.country && <p>{errors.country.message}</p>}

                <label htmlFor="city">City:</label><br />
                <div className="form-group">
                <input type="text" id="city" {...register('city')}/>
                </div>
                {errors.city && <p>{errors.city.message}</p>}

                <label htmlFor="phone">Phone:</label><br />
                <div className="form-group">
                <input type="number" id="phone" {...register('phone')}/>
                </div>
                {errors.phone && <p>{errors.phone.message}</p>}

                <label htmlFor="password">Password:</label><br />
                 <div className="form-group" onClick={()=>setShowPassword(!showPassword)}>
                <input type={showPassword ? "text": "password"} id="password" {...register('password')}/>
                {showPassword ?<i><BsFillEyeFill /></i>:<i><BsFillEyeSlashFill/></i>}
                </div>
                {errors.password && <p>{errors.password.message}</p>}

                <label htmlFor="confirmPassword">Confirm Password:</label><br />
                 <div className="form-group" onClick={()=>setShowPassword(!showPassword)}>
                <input type={showPassword && "text" || 'password'} id="confirmPassword" {...register('confirmPassword')}/>
                {showPassword ?<i><BsFillEyeFill /></i>:<i><BsFillEyeSlashFill/></i>}
                </div> 
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}<br />
                <button type="submit">submit</button>
        </form>
        </fieldset>
         <DevTool control={control} />
    </div>
    
    );
};

export default Signup;