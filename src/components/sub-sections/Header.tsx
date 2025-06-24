import { Button } from "@/components/ui/button"
import workout from "../../assets/workout.mp4"
import { LiaDumbbellSolid } from "react-icons/lia";
import {useNavigate} from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
  return (
    <main className="min-h-screen bg-white ">
    
    <section className="relative  h-screen flex flex-col items-center justify-center  ">
   
      <div className="absolute inset-0 z-0  h-full w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top brightness-[0.4]"
          poster="/workout.png"
        >
          <source src={workout} type="video/mp4" />
          <img src="/workout.png" alt="3 people working out"  className="w-full h-full object-cover object-top"/>
        </video>
      </div>

      <div className="absolute top-0 flex items-center justify-center space-x-0 text-white">
          <LiaDumbbellSolid className="text-2xl "/>
          <h2 className="italic text-md md:text-lg  p-3 ">FitBuddy</h2>
      </div>

      <div className="relative z-10 text-center text-white px-4 w-full flex flex-col justify-center items-center mt-5 ">
        <h2 className="text-2xl md:text-6xl font-bold mb-4 leading-tight">
          Achieve Your <span className="text-blue-300">Fitness</span> Goals Smarter
        </h2>
        <p className="text-sm md:text-xl mb-6">
          Get personalized meal plans and workout routines based on your
          country, body, and goals.
        </p>
        <Button size="lg" className=" text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-400 hover:cursor-pointer transition" onClick={() =>navigate("/sign-up")}>Get Started</Button>
      </div>
        
      <div className="flex items-center justify-center rounded-lg p-4 bg-gray-100/20 mt-12  md:p-7 text-white shadow-sm text-sm z-10 w-full max-w-xl">
  <p className="px-3 text-center"> <span className="text-blue-300">100% </span> <br />Track your workouts</p>
  <p className="border-l h-5 mx-3" />
  <p className="px-3 text-center"><span className="text-blue-300">50+ </span> <br />Get meal suggestions</p>
  <p className="border-l h-5 mx-3" />
  <p className="px-3 text-center"><span className="text-blue-300">100%  </span> <br />Achieve your goals</p>
</div>

      
    </section>
  </main>
  )
}

export default Header
