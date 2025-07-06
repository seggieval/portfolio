import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full-Stack Developer</span>
            <h1 className="h1 mb-6">Howdy, I'm <br /> <span className="text-accent">Kiril Sierykov</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">I create web applications that are both functional and aesthetically pleasing.</p>
            <div className="flex flex-col items-center gap-8 xl:flex-row ">
              <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 uppercase">
                <span>
                  Download CV
                </span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-4" iconStyles="w-9 h-9 rounded-full flex items-center justify-center text-white text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home