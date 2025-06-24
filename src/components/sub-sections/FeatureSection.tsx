import Card from "./card";
import FeatureCard from "./FeautureCard";
import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaRunning, FaSmileBeam } from "react-icons/fa";

const features = [
  {
    title: "Personalized Workouts",
    description: "Custom routines based on your body weight and goals.",
    icon: <FaDumbbell />,
  },
  {
    title: "Real-time Health Tips",
    description: "AI tips based on progress, trends, and input.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Meal Suggestions by Country",
    description: "Dishes tailored to your country and allergies.",
    icon: <FaAppleAlt />,
  },
  {
    title: "Progress Tracking",
    description: "Visualize your fitness journey in real-time.",
    icon: <FaRunning />,
  },
  {
    title: "Stay Motivated",
    description: "Daily quotes and badges to keep you going.",
    icon: <FaSmileBeam />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden min-h-1/2">
      <div className="absolute top-0 right-0 rounded-bl-full bg-gradient-to-bl from-blue-300/60 to-gray-400 w-3/4 h-3/4 z-0"></div>
      <div className="absolute bottom-0 left-0 rounded-tr-full bg-gradient-to-tr from-black/10 to-gray-400 w-3/4 h-3/4 z-0"></div>
      <div className="relative z-10 bg-black/15 w-full p-5">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">App Features</h2>
      <div className="max-w-5xl mx-auto">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} index={i} />
        ))}
      </div>
    {features.map((f, i) => (
    <Card title= {f.title} text={f.description} index={i}/>

    ))}
      </div>
    </section>
  );
}
