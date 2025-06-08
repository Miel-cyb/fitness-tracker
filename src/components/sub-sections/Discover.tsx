import dish from "../../assets/mealBowl.png"
import dish2 from "../../assets/dish2.png"
import dish3 from "../../assets/dish3.png"
import dish4 from "../../assets/dish4.png"
import dish5 from "../../assets/dish5.png"
import dish6 from "../../assets/dish6.png"
import dish7 from "../../assets/dish7.png"
import { useEffect,useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'


const meals = [
  {
    id: 1,
    src: dish,
    alt: "Protein bowl",
    name: "Protein Bowl",
    description: "Packed with lean meats, grains, and greens for lasting energy.",
  },
  {
    id: 2,
    src: dish2,
    alt: "Fresh salad",
    name: "Fresh Salad",
    description: "Crunchy, colorful veggies with healthy fats and dressings.",
  },
  {
    id: 3,
    src: dish3,
    alt: "Low-carb meal",
    name: "Low-Carb Plate",
    description: "A delicious low-carb meal for mindful eating and balance.",
  },
  {
    id: 4,
    src: dish4,
    alt: "Dinner",
    name: "Dinner",
    description: "Light for the night",
  },
  {
    id: 5,
    src: dish5,
    alt: "Mediterranean meal",
    name: "Mediterranean Delight",
    description: "Heart-healthy oils, grains, and fresh veggies.",
  },
  {
    id: 6,
    src: dish6,
    alt: "Lunch",
    name: "Enriched Lunch",
    description: "Warm and comforting with slow-cooked nutrients.",
  },
  {
    id: 7,
    src: dish7,
    alt: "Rich Dish",
    name: "Rich Dish",
    description: "Plant-powered wraps with fiber and flavor.",
  },
]
const Discover = () => {
  const [index, setIndex] = useState(0);

  useEffect( () => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev+1) % meals.length)
    }, 2000);

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mx-auto max-w-6xl mt-32">
      <div className="text-center ">
        <h2 className="text-2xl md:text-3xl mb-4 font-bold text-white capitalize">Discover new ways to make your favorites meals <br /> <em className="text-blue-300"> healthier</em> </h2>
        <p className="text-blue-100 text-lg">No more boring meal preps. Get suggestions tailored to your specific goal.</p>
      </div>

      <div className="max-w-sm mt-2 mx-auto ">
        <AnimatePresence mode="wait">
            <motion.img key={meals[index].id}
            src={meals[index].src}
            alt={meals[index].alt}
            className=" w-full h-72 object-contain"
            initial={{ opacity: 0, rotate: -10, x: -50 }}
            animate={{ opacity: 1, rotate: 0, x: 0 }}
            exit={{ opacity: 0, rotate: 10, x: 50 }}
            transition={{ duration: 0.6 }}/>
        </AnimatePresence>

        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold text-white">{meals[index].name}</h3>
          <p className="text-blue-100 text-sm mt-1">{meals[index].description}</p>
        </div>
      </div>
    </div>
  )
}

export default Discover
