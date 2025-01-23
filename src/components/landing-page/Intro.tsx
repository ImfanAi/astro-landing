import IntroTitle from "../custom/intro";
export default function Intro() {
   return (
      <section id="About">
         <div className="relative w-full h-full flex flex-col justify-center items-center text-center 2xl:pt-40 xl:pt-20 lg:pt-16 md:pt-10 pt-6 lg:pb-32 pb-20 font-[family-name:var(--font-geist-mono)">
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/assets/main.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#151615] to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#151615] to-transparent"></div>
            <div className="absolute inset-0 bg-[#151615] opacity-20 backdrop-blur-sm"></div>
            <div className="relative z-10">
               <IntroTitle />
            </div>
         </div>
      </section>
   );
}