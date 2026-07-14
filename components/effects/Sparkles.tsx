"use client";

import { motion } from "framer-motion";


export default function Sparkles(){


return (

<>

{
Array.from({length:25}).map((_,i)=>(


<motion.div

key={i}

animate={{

opacity:[0,1,0],

scale:[1,1.5,1]

}}

transition={{

duration:2+Math.random()*3,

repeat:Infinity,

delay:i*.2

}}

style={{

left:`${Math.random()*100}%`,

top:`${Math.random()*100}%`

}}

className="
absolute
text-yellow-300
text-2xl
"

>

✨

</motion.div>


))

}

</>

);

}