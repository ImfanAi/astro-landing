import "./index.css";
import * as motion from "motion/react-client";
import Image from "next/image";
export default function IntroTitle() {
   return (
      <motion.div 
         className="relative flex flex-col w-full justify-center items-center text-center 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xs font-bold "
      >
         
         <div className="relative">
            <div className="aboslute">
               <Image
                  src="/assets/intro.png"
                  alt="Astronaut standing on moon"
                  width={150}
                  height={150}
                  layout="responsive"
                  className="absolute 2xl:-left-40 xl:-left-28 lg:-left-[80px] md:-left-[64px] -left-[48px] 2xl:-top-[52px] xl:-top-2 lg:-top-4 -top-2 w-full max-w-[64px] md:max-w-[80px] lg:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[200px]"
               />
            </div>
            <div className="2xl:text-5xl xl:text-4xl md:text-xl text-lg font-[family-name:var(--font-monterial-thin)]">
               Astro Is A Combination of
            </div>
            <div className="2xl:text-5xl xl:text-4xl lg:text-2xl md:text-xl font-extrabold font-[family-name:var(--font-monterial-bold)]">
               AI, GAMING, ENTERTAINMENT, AND DEFI
            </div>
            <div className="bg-gradient-to-r from-[#962E71] via-[#E15025] to-[#F88B1A] bg-clip-text text-transparent 2xl:text-[140px] xl:text-8xl lg:text-7xl md:text-6xl text-4xl font-extra-bold font-[family-name:var(--font-quinn-bold)]">
               ALL WRAPPED IN ONE.
            </div>
            <div className="2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-extrabold font-[family-name:var(--font-monterial-bold)]">
               We Call It Gamified DeFAi
            </div>
         </div>
         
      </motion.div>
   );
}