// "use client";


// import Image from "next/image";
// import { motion } from "framer-motion";

// import FloatingBalloons from "../effects/FloatingBalloons";
// import Sparkles from "../effects/Sparkles";



// export default function Hero() {


//     return (

//         <section

//             id="home"

//             className="
// relative
// flex
// min-h-screen
// items-center
// justify-center
// overflow-hidden
// bg-gradient-to-br
// from-pink-50
// via-purple-50
// to-rose-50
// px-6
// "

//         >


//             <FloatingBalloons />

//             <Sparkles />




//             <div className="
// z-10
// text-center
// "
//             >


//                 <motion.div

//                     initial={{
//                         scale: .8,
//                         opacity: 0
//                     }}

//                     animate={{
//                         scale: 1,
//                         opacity: 1
//                     }}

//                     transition={{
//                         duration: 1
//                     }}

//                     className="
// mx-auto
// mb-8
// mt-16
// md:mt-0
// relative
// h-64
// w-64
// overflow-hidden
// rounded-full
// border-8
// border-white
// shadow-2xl

// "

//                 >


//                     <Image

//                         src="/images/akenya.jpg"

//                         alt="Akenya"

//                         fill

//                         className="
// object-cover
// "

//                     />


//                 </motion.div>
//                 <motion.p
//                     initial={{
//                         y: 30,
//                         opacity: 0
//                     }}
//                     animate={{
//                         y: 0,
//                         opacity: 1
//                     }}
//                     transition={{
//                         delay: 0.3,
//                         duration: 0.8
//                     }}
//                     className="
// font-fancy
// text-4xl
// text-rose-400
// mb-2
// "
//                 >
//                     ✨ You are invited to ✨
//                 </motion.p>





//                 <motion.h1

//                     initial={{
//                         y: 50,
//                         opacity: 0
//                     }}

//                     animate={{
//                         y: 0,
//                         opacity: 1
//                     }}

//                     className="
// text-6xl
// font-black
// shimmer-text
// "

//                 >

//                     Akenya Turns One 🎂

//                 </motion.h1>





//                 <p className="
// mt-5
// text-xl
// text-purple-700/70
// font-fancy
// text-2xl
// ">

//                     Join us to celebrate our little princess&apos;s
//                     first birthday ❤️

//                 </p>




//                 <div className="
// mt-8
// flex
// flex-wrap
// justify-center
// gap-4
// ">


//                     <div className="
// rounded-full
// bg-white/70
// px-8
// py-3
// shadow
// border
// border-pink-200/50
// ">

//                         📅 September 05

//                     </div>


//                     <div className="
// rounded-full
// bg-white/70
// px-8
// py-3
// shadow
// border
// border-pink-200/50
// ">

//                         🏠 At Home

//                     </div>


//                 </div>



//             </div>



//         </section>

//     );

// }








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

{/* ===================================================================================== */}

            {/* Left Princess */}
<motion.div
  className="absolute left-2 top-24 z-0 md:left-8 md:top-28"
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 6, repeat: Infinity }}
>
  <Image
    src="/images/princess1.png"
    alt="Princess"
    width={90}
    height={90}
    className="object-contain md:w-[180px] md:h-[180px]"
  />
</motion.div>

{/* Right Princess */}
<motion.div
  className="absolute right-2 top-24 z-0 md:right-8 md:top-32"
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 7, repeat: Infinity }}
>
  <Image
    src="/images/princess2.png"
    alt="Princess"
    width={90}
    height={90}
    className="object-contain md:w-[180px] md:h-[180px]"
  />
</motion.div>

{/* Bottom Left Castle */}
<motion.div
  className="absolute bottom-4 left-2 z-0 md:bottom-6 md:left-10"
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 8, repeat: Infinity }}
>
  <Image
    src="/images/castle.png"
    alt="Castle"
    width={120}
    height={120}
    className="object-contain md:w-[240px] md:h-[240px]"
  />
</motion.div>

{/* Bottom Right Princess */}
<motion.div
  className="absolute bottom-6 right-2 z-0 md:bottom-8 md:right-10"
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 7, repeat: Infinity }}
>
  <Image
    src="/images/princess1.png"
    alt="Princess"
    width={100}
    height={100}
    className="object-contain scale-x-[-1] md:w-[190px] md:h-[190px]"
  />
</motion.div>
{/* ======================================================================================================= */}

            <div
                className="
          z-10
          text-center
          pt-20
          md:pt-8
        "
            >
                {/* Baby Image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="
            relative
            mx-auto
            mb-8
            h-56
            w-56
            overflow-hidden
            rounded-full
            border-8
            border-white
            shadow-2xl
            md:h-64
            md:w-64
          "
                >
                    <Image
                        src="/images/akenya.jpg"
                        alt="Akenya"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Invitation */}
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="
            font-heading
            mb-3
            text-2xl
            text-rose-400
            md:text-4xl
          "
                >
                    ✨ You are invited to ✨
                </motion.p>

                {/* Title */}
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="
            font-title
            shimmer-text
            text-5xl
            leading-tight
            md:text-8xl
          "
                >
                    Akenya Turns One 🎂
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="
            font-body
            mx-auto
            mt-6
            max-w-xl
            text-lg
            leading-8
            text-purple-700/80
            md:text-2xl
          "
                >
                    Join us as we celebrate our little princess's
                    <br />
                    <span className="font-semibold text-pink-500">
                        First Birthday Celebration ❤️
                    </span>
                </motion.p>

                {/* Event Details */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
          "
                >
                    <div
                        className="
              rounded-full
              border
              border-pink-200/50
              bg-white/80
              px-8
              py-3
              shadow-lg
              backdrop-blur-md
              font-body
              text-lg
            "
                    >
                        📅 September 05, 2026
                    </div>

                    <div
                        className="
              rounded-full
              border
              border-pink-200/50
              bg-white/80
              px-8
              py-3
              shadow-lg
              backdrop-blur-md
              font-body
              text-lg
            "
                    >
                        🏠 At Home
                    </div>
                </motion.div>
            </div>
        </section>
    );
}