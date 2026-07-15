"use client";


import Image from "next/image";
import { motion } from "framer-motion";

import FloatingBalloons from "../effects/FloatingBalloons";
import Sparkles from "../effects/Sparkles";



export default function Hero() {


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
from-pink-50
via-purple-50
to-rose-50
px-6
"

        >


            <FloatingBalloons />

            <Sparkles />




            <div className="
z-10
text-center
"
            >


                <motion.div

                    initial={{
                        scale: .8,
                        opacity: 0
                    }}

                    animate={{
                        scale: 1,
                        opacity: 1
                    }}

                    transition={{
                        duration: 1
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
                <motion.p
                    initial={{
                        y: 30,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8
                    }}
                    className="
font-fancy
text-4xl
text-rose-400
mb-2
"
                >
                    ✨ You are invited to ✨
                </motion.p>





                <motion.h1

                    initial={{
                        y: 50,
                        opacity: 0
                    }}

                    animate={{
                        y: 0,
                        opacity: 1
                    }}

                    className="
text-6xl
font-black
shimmer-text
"

                >

                    Akenya Turns One 🎂

                </motion.h1>





                <p className="
mt-5
text-xl
text-purple-700/70
font-fancy
text-2xl
">

                    Join us to celebrate our little princess&apos;s
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
border
border-pink-200/50
">

                        📅 September 05

                    </div>


                    <div className="
rounded-full
bg-white/70
px-8
py-3
shadow
border
border-pink-200/50
">

                        🏠 At Home

                    </div>


                </div>



            </div>



        </section>

    );

}
