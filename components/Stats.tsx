"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: "Years of Experience",
  },
  {
    num: 26,
    text: "Projects Completed",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 500,
    text: "Code Commits",
  }
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
              <CountUp end={stat.num} duration={5} delay={1.4} className="text-4xl xl:text-6xl font-extrabold"  />
              <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats