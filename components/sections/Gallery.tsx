"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    src: "/images/baby1.jpg",
    title: "Little Smile ❤️",
  },
  {
    src: "/images/baby2.jpg",
    title: "Happy Moments",
  },
  {
    src: "/images/baby3.jpg",
    title: "Beautiful Day",
  },
  {
    src: "/images/baby4.jpg",
    title: "Little Princess",
  },
  {
    src: "/images/baby5.jpg",
    title: "Sweet Memories",
  },
  {
    src: "/images/baby6.jpg",
    title: "One Year Journey",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="px-6 py-24"
    >

      <h2 className="mb-14 text-center text-5xl font-black gradient-text">
        Our Beautiful Memories 📸
      </h2>


      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {photos.map((photo,index)=>(

          <motion.div
            key={photo.src}
            initial={{
              opacity:0,
              y:50
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            transition={{
              delay:index * 0.15
            }}
            viewport={{
              once:true
            }}
            className="
            group
            overflow-hidden
            rounded-[35px]
            bg-white
            shadow-xl
            "
          >

            <div className="
            relative
            h-[350px]
            overflow-hidden
            ">

              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="
                object-cover
                transition
                duration-700
                group-hover:scale-110
                "
              />

            </div>


            <div className="p-5 text-center">

              <h3 className="
              text-xl
              font-bold
              text-purple-700
              ">

                {photo.title}

              </h3>

            </div>


          </motion.div>

        ))}

      </div>


    </section>
  );
}