import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MdHealthAndSafety, MdRestaurantMenu } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaUser, FaRocket } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import onboarding from "../../assets/phones.png"
import workout from "../../assets/deefit.png"
import meal from "../../assets/meal.jpg"
import teams from "../../assets/teams.jpg"
import healthTips from "../../assets/helth tips.png"
import Footer from "./Footer";
import Discover from "./Discover";

export default function Sliders() {
  const navigate = useNavigate()
  const [activeBar, setActive] = useState(0)
  const topics = [
    { title: 'Health Tips', icon: <MdHealthAndSafety />, card: healthTips },
    { title: 'Onboard', icon: <FaRocket />, card: onboarding },
    { title: 'Workout plan', icon: <GiWeightLiftingUp />, card: workout },
    { title: 'Meal Suggestions', icon: <MdRestaurantMenu />, card: meal },
    { title: 'Team Up', icon: <FaUser />, card: teams }
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((prev) => (prev + 1) % topics.length)
    }, 5000);
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-400 via-gray-600 to-gray-500 py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 rounded-bl-full bg-blue-300 opacity-10 blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-blue-900 opacity-20 blur-2xl animate-spin-slow z-0" />

      <div className="text-center mx-auto max-w-2xl z-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Explore Your Wellness Hub</h2>
        <p className="text-blue-100 text-lg">Select a topic to discover insights, tips, and tools that elevate your lifestyle.</p>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center z-10 relative ">
        <div className=" md:max-w-sm">
          <Card className="bg-gray-800 text-white md:p-6 rounded-3xl shadow-2xl border border-blue-400/10 ">
            <CardHeader>
              <CardTitle className="text-xl text-center text-blue-300 mb-4">Choose a Topic</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {topics.map((topic, i) => (
                <motion.div
                  key={i}
                  onClick={() => setActive(i)}
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-center gap-4 p-3 px-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                    i === activeBar ? "bg-blue-500/80 text-white shadow-lg" : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  <span className="text-blue-300 text-xl">{topic.icon}</span>
                  <p className="text-lg font-medium">{topic.title}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="md:w-96 md:h-96 relative w-72 h-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBar}
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 150 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-full  rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center"
            >
              <img
                src={topics[activeBar].card}
                alt={topics[activeBar].title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    
      <section className="mt-24 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-white">
        <div className="bg-gray-700 rounded-3xl p-6 shadow-xl">
          <h3 className="text-xl font-bold mb-2 text-blue-300">Personal Coaching</h3>
          <p className="text-sm text-gray-300">Access expert-backed strategies tailored to your goals—physical, mental, and nutritional.</p>
        </div>
        <div className="bg-gray-700 rounded-3xl p-6 shadow-xl">
          <h3 className="text-xl font-bold mb-2 text-blue-300">Smart Tracking</h3>
          <p className="text-sm text-gray-300">Monitor your routines, habits, and improvements with real-time analytics and gentle nudges.</p>
        </div>
        <div className="bg-gray-700 rounded-3xl p-6 shadow-xl">
          <h3 className="text-xl font-bold mb-2 text-blue-300">Supportive Community</h3>
          <p className="text-sm text-gray-300">Team up with like-minded individuals and share progress, motivation, and accountability.</p>
        </div>
      </section>
      <Discover/>
      <Footer/>
    </div>
  )
}
