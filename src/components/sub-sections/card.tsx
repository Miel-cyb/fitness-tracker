import { motion } from "framer-motion"

type Cards ={
    title: string,
    text:string,
    index: number;
}

const Card: React.FC<Cards> = ({title, text, index}) => {
    const isOdd = index % 2 !== 0
  return (
    <div>
      <motion.div
      initial = {{opacity:0, x: isOdd? 100 : -100}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once:false, amount:0.1}}
      transition={{duration:2}}
      className= {`bg-blue-300 text-white rounded-lg m-2 flex flex-col md:flex-row ${isOdd ? 'md:flex-row-reverse' : ""}`}
      >
        
      </motion.div>
    </div>
  )
}

export default Card
