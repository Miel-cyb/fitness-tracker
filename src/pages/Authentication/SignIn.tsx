import { SignIn, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function SignInPage() {
const localizaton = {
errors: {
   authorization_invalid: "Invalid credentials. Please check details",
   form_identifier_not_found: "No account found with this email. Please sign up first.",
}
}
  const {isSignedIn} = useUser();
  const navigate = useNavigate();

  useEffect(() =>{
    if(isSignedIn){
      navigate('/dashboard')
    }
  },[isSignedIn, navigate])
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="w-full max-w-md">
  
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" afterSignInUrl="/dashboard" />
         
      </div>
    </div>
  );
}
