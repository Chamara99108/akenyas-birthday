"use client";

import { motion } from "framer-motion";


const balloons = [
  {
    emoji:"🎈",
    left:"10%",
    delay:0
  },
  {
    emoji:"🎈",
    left:"30%",
    delay:1
  },
  {
    emoji:"🎈",
    left:"70%",
    delay:2
  },
  {
    emoji:"🎈",
    left:"90%",
    delay:3
  }
];


export default function FloatingBalloons(){


return (

<div className="
pointer-events-none
absolute
inset-0
overflow-hidden
">


{
balloons.map((balloon,index)=>(


<motion.div

key={index}

initial={{
y:"100vh"
}}

animate={{
y:"-20vh"
}}

transition={{

duration:10,

repeat:Infinity,

delay:balloon.delay,

ease:"linear"

}}

style={{
left:balloon.left
}}

className="
absolute
text-7xl
"

>

{balloon.emoji}

</motion.div>


))

}


</div>

);

}