import { SignUp } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
const {isSignedIn} = useUser()
const navigate = useNavigate()

useEffect(() =>{
  if(isSignedIn){
      navigate('/dashboard')
  }
}, [isSignedIn, navigate])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="w-full max-w-md">
        <SignUp path="/sign-up" routing="path"  signInUrl="/sign-in" afterSignUpUrl="/sign-in"/>
      </div>
    </div>
  );
}
