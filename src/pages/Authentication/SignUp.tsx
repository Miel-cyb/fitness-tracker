import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"; 
import { auth } from "@/lib/Firebase";
import { db } from "@/lib/Firebase";
import { doc, setDoc } from "firebase/firestore";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
  email: yup.string().required('Email is required').email("Invalid email").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Enter a valid email address'),
      password: yup.string().required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
      ),
      confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm your password'),
})

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const {
    register, 
    handleSubmit, 
    formState:{errors}
} = useForm({
  resolver: yupResolver(schema)
})
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)

  const submitData = async (data:any) =>{

    setLoading(true)
  try {
   const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
   const user = userCredential.user;

      // Saving user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: data.name,
        email: data.email,
        createdAt: new Date()
      });
    alert('Registration successful ✅')
    navigate('/dashboard')
  } catch (err:any) {
    alert(err.message)
  }
  finally{
    setLoading(false)
  }
}

  return (

    <div className="min-h-screen bg-white relative">
      <div className="bg-white rounded-sm border-2 p-4 w-full md:w-sm flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h2 className="text-blue-300 text-center text-2xl font-serif">Sign Up</h2>
        <form className="signUp leading-loose p-6" onSubmit={handleSubmit(submitData)}>
        
          <fieldset className="border-2 rounded-sm w-full">
          <legend className="text-sm">Username</legend>
           <Input type="name" placeholder="username" className="w-full h-full" {...register('name')} />
           {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </fieldset>
          
          <fieldset className="border-2 rounded-sm w-full">
          <legend className="text-sm">Email</legend>
           <Input type="email" placeholder="email"  className="w-full h-full" {...register('email')}  />
           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </fieldset>
          
          <fieldset className="border-2 rounded-sm w-full">
          <legend className="text-sm">Create Password</legend>
          <div className="relative">
           <Input type={showPassword? 'text' : 'password'} placeholder="password" className="w-full relative" {...register('password')} />
           <span onClick={() => setShowPassword(!showPassword)} className='absolute right-0 -mt-6 px-2  text-md cursor-pointer text-sm text-gray-600'>
            {showPassword? <i className="fa-solid fa-eye"></i> :<i className="fa-solid fa-eye-slash"></i>}
          </span>
          </div>
           {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </fieldset> 

         <fieldset className="border-2 rounded-sm w-full">
          <legend className="text-sm">Confirm Password</legend>
          <div className="relative">
           <Input type={showConfirmPassword ? 'text' : 'password'} {...register('confirmPassword')} placeholder="Confirm password" className="w-full h-full" />
           <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='absolute right-0 -mt-6 px-2  text-md cursor-pointer text-sm text-gray-600'>
            {showConfirmPassword? <i className="fa-solid fa-eye"></i> :<i className="fa-solid fa-eye-slash"></i>}
          </span>
          </div>
           {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </fieldset>

          <Button type="submit" className={` mt-2 flex justify-center text-center w-full text-[13px] cursor-pointer hover:border-blue-900 border-2 ${loading ? "disabled:true cursor-not-allowed hover:border-transparent bg-black/50 hover:bg-black/50" : " "}` }> {loading ? 'Registering' : 'Create Account'}</Button>
          <div>
            <p className="text-gray-500/90 text-[12px]">Already have an account? <span onClick={() => navigate('/sign-in')} className="text-black cursor-pointer hover:text-blue-600 ">Sign In</span></p>
          </div>
        </form>

      </div>
    </div>
    
  );
}
