import {motion} from 'framer-motion'
import { Card, CardContent, CardHeader,CardTitle } from '../ui/card'
import React, { ReactNode } from 'react';

type CardProps = {
    title: string;
    description: string;
    icon: ReactNode;
    index: number;
}

const FeatureCard: React.FC<CardProps> = ({title, description,icon,index}) =>{
    const isOdd = index % 2 !== 0

    return(
        <motion.div 
        initial={{ opacity: 0, x: isOdd ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0  }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`flex flex-col md:flex-row items-center mb-3 ${
          isOdd ? "md:flex-row-reverse" : ""
        }`}
        >
            <Card className="max-w-md shadow-xl w-full bg-blue-50">
                <CardHeader>
                <CardTitle className="flex items-center gap-3 text-md font-semibold text-blue-400 ">
                    {icon}
                    {title}
                </CardTitle>    
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    )

}

export default FeatureCard