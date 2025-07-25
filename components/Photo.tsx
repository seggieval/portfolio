"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PhotoProps {
  className?: string;
}

const Photo = (props: PhotoProps) => {
  return (
    <div className={`w-full h-full relative ${props.className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" }
        }}
      >
        <motion.div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.9, duration: 0.4, ease: "easeInOut" }
          }}>
          <Image
            src="/assets/photo.png"
            alt=""
            priority
            quality={100}
            fill
            className="object-contain scale-90"
          />
        </motion.div>


        <motion.svg className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg">
            <motion.circle cx="253" cy="253" r="250" strokeWidth="4" stroke="#00ff99"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: "24 10 0 0"}}
            animate={{strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            />
          </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo