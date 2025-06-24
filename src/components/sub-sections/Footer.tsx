import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div>
      <section className="mt-20 max-w-4xl mx-auto text-center text-white">
        <h3 className="text-2xl font-semibold mb-3">What Our Users Say</h3>
        <blockquote className="italic text-lg text-blue-100">“This platform transformed my habits. The guidance is rich, intuitive, and empowering.”</blockquote>
        <p className="mt-2 font-medium text-blue-300">— Taylor, Health Enthusiast</p>
      </section>

      <section className="mt-20 bg-blue-300/10 text-white py-12 px-6 text-center rounded-3xl max-w-6xl mx-auto shadow-2xl">
        <h2 className="text-3xl font-bold mb-4">Start Your Wellness Journey Today</h2>
        <p className="mb-6 max-w-xl mx-auto">Unlock full access to our personalized plans, professional advice, and a supportive community. Let’s reach your goals—together.</p>
        <Button onClick={() =>navigate("/sign-up")} className=" text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-400 hover:cursor-pointer transition">Get Started</Button>
      </section>
    </div>
  )
}

export default Footer
