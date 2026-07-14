"use client";


import Image from "next/image";
import { motion } from "framer-motion";

import FloatingBalloons from "../effects/FloatingBalloons";
import Sparkles from "../effects/Sparkles";



export default function Hero(){


return (

<section

id="home"

className="
relative
flex
min-h-screen
items-center
justify-center
overflow-hidden
bg-gradient-to-br
from-pink-100
via-purple-100
to-blue-100
px-6
"

>


<FloatingBalloons/>

<Sparkles/>




<div className="
z-10
text-center
"
>


<motion.div

initial={{
scale:.8,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

transition={{
duration:1
}}

className="
mx-auto
mb-8
relative
h-64
w-64
overflow-hidden
rounded-full
border-8
border-white
shadow-2xl
"

>


<Image

src="/images/akenya.jpg"

alt="Akenya"

fill

className="
object-cover
"

/>


</motion.div>





<motion.h1

initial={{
y:50,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

className="
text-6xl
font-black
gradient-text
"

>

Akenya Turns One 🎂

</motion.h1>





<p className="
mt-5
text-xl
text-gray-600
">

Join us to celebrate our little princess's
first birthday ❤️

</p>




<div className="
mt-8
flex
flex-wrap
justify-center
gap-4
">


<div className="
rounded-full
bg-white/70
px-8
py-3
shadow
">

📅 September 05

</div>


<div className="
rounded-full
bg-white/70
px-8
py-3
shadow
">

🏠 At Home

</div>


</div>



</div>



</section>

);

}