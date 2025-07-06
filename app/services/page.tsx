"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Building responsive and dynamic websites using modern technologies.',
    link: '/'
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Creating user-friendly interfaces and enhancing user experience.',
    link: '/'
  },
  {
    num: '03',
    title: 'SEO Optimization',
    description: 'Improving website visibility and ranking on search engines.',
    link: '/'
  },
  {
    num: '04',
    title: 'Content Creation',
    description: 'Producing high-quality and engaging content for various platforms.',
    link: '/'
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => (
            <div key={index} className="group flex-1 flex flex-col justify-center gap-6 ">
              {/* Num and Link */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={service.link} className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-full group-hover:bg-accent transition-all duration-500 hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* Title */}
              <h2 className="text-[42px] font-bold text-white group-hover:text-accent transition-all duration-500 leading-none">
                {service.title}
              </h2>
              {/* Desc */}
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services