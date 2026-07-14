"use client";

import { motion } from "framer-motion";
import {
  Baby,
  Smile,
  Sparkles,
  Footprints,
  Cake,
} from "lucide-react";


const moments = [
  {
    icon: Baby,
    title: "Welcome To The World",
    date: "September 2025",
    description:
      "The day our little princess Akenya came into our lives and filled our hearts with love.",
  },
  {
    icon: Smile,
    title: "First Smile",
    date: "A Special Moment",
    description:
      "That beautiful smile that brought endless happiness to our family.",
  },
  {
    icon: Sparkles,
    title: "First Tooth",
    date: "Growing Up",
    description:
      "A tiny milestone that made every day more magical.",
  },
  {
    icon: Footprints,
    title: "First Steps",
    date: "New Adventures",
    description:
      "Small steps that created the biggest memories.",
  },
  {
    icon: Cake,
    title: "First Birthday",
    date: "September 05",
    description:
      "Celebrating one amazing year full of love, laughter and memories.",
  },
];


export default function Timeline() {

  return (

    <section className="px-6 py-24">


      <h2 className="
      mb-16
      text-center
      text-5xl
      font-black
      gradient-text
      ">

        Akenya's First Year 💕

      </h2>



      <div className="
      relative
      mx-auto
      max-w-4xl
      ">


        {/* Line */}

        <div className="
        absolute
        left-6
        top-0
        h-full
        w-1
        bg-gradient-to-b
        from-pink-400
        via-purple-400
        to-sky-400
        md:left-1/2
        " />



        <div className="space-y-12">


        {moments.map((item,index)=>{

          const Icon=item.icon;


          return (

          <motion.div

          key={item.title}

          initial={{
            opacity:0,
            y:60
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.6,
            delay:index*.15
          }}

          viewport={{
            once:true
          }}

          className={`
          relative
          flex
          md:justify-between
          ${
            index%2===0
            ?"md:flex-row"
            :"md:flex-row-reverse"
          }
          `}

          >


            {/* Icon */}

            <div className="
            absolute
            left-0
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-pink-500
            text-white
            shadow-lg
            md:left-1/2
            md:-translate-x-1/2
            ">

              <Icon size={24}/>

            </div>



            {/* Card */}

            <div className="
            ml-20
            w-full
            rounded-3xl
            bg-white/70
            p-7
            shadow-xl
            backdrop-blur-xl
            md:ml-0
            md:w-[42%]
            ">


              <h3 className="
              text-2xl
              font-bold
              text-purple-700
              ">

                {item.title}

              </h3>


              <p className="
              mt-2
              font-semibold
              text-pink-500
              ">

                {item.date}

              </p>


              <p className="
              mt-4
              leading-7
              text-gray-600
              ">

                {item.description}

              </p>


            </div>


          </motion.div>

          );

        })}


        </div>


      </div>


    </section>

  );

}