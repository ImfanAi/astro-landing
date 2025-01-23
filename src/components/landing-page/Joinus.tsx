import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Footer from "./Footer";
export default function Joinus() {
   return (
      <section id="JoinUs" className="relative">
         <div
            className="flex flex-col text-center justify-between items-center w-full 2xl:py-32 xl:py-28 lg:py-24 md:py-20 py-16 xl:gap-56 gap-40 border-b border-white"
         >
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/assets/main.jpg')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#151615] to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#151615] to-transparent"></div>
            <div className="absolute inset-0 bg-[#151615] opacity-75 backdrop-blur-sm"></div>
            <div
               style={{
                  background: "radial-gradient(circle at 0% 20%, #E15025 0%, transparent 20%)",
                  opacity: "20%",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
               }} 
            />
            <div
               style={{
                  background: "radial-gradient(circle at 100% 30%, #F88B1A 0%, transparent 30%)",
                  opacity: "60%",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
               }} 
            />
            <div
               style={{
                  background: "radial-gradient(circle at 110% 50%, #E15025 0%, transparent 30%)",
                  opacity: "60%",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
               }} 
            />
            <div
               style={{
                  background: "radial-gradient(circle at 20% 80%, #F88B1A 0%, transparent 30%)",
                  opacity: "60%",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
               }} 
            />
            <div
               style={{
                  background: "radial-gradient(circle at 80% 130%, #962E71 0%, transparent 60%)",
                  opacity: "80%",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
               }} 
            />
            <div className="relative border border-[#962E71] rounded-3xl w-5/6 mx-auto 2xl:pt-24 2xl:pb-48 xl:pt-20 xl:pb-40 lg:pt-16 lg:pb-40 md:pt-12 md:pb-36 pt-12 pb-24">
               <Image
                  src="/assets/join.gif"
                  alt="Astro"
                  width={150}
                  height={150}
                  layout="responsive"
                  className="absolute z-2 w-full max-w-[120px] md:max-w-[160px] lg:max-w-[180px] xl:max-w-[240px] 2xl:max-w-[280px] left-0 bottom-0" 
               />
               <p className="relative bg-gradient-to-r from-[#962E71] via-[#E15025] to-[#F88B1A] bg-clip-text text-transparent md:text-7xl text-5xl font-extra-bold font-[family-name:var(--font-quinn-bold)]">Join Our Community</p>
               <p className="md:text-xl sm:text-md dark:text-white text-white w-4/5 mx-auto mt-4 font-thin">
                  Connect With Fellow DeFAi Farmers And Cultivate Collective Growth In A Harmonious Ecosystem.
               </p>
               <div className="flex justify-between items-center mx-auto md:gap-5 gap-3 2xl:mt-24 xl:mt-20 lg:mt-16 md:mt-12 mt-8 w-1/2">
                  <a href="https://x.com/MeetAstroAI" target="_blank" className="items-center justify-between">
                     <Icon 
                        icon="fa6-brands:x-twitter"
                        className="hover:text-[#F88B1A] w-8 md:w-10 lg:w-12 xl:w-14 2xl:w-16"
                        width="54"
                     />
                  </a>
                  <a href="https://t.me/+oh9HXznG6eg5ZTI1" target="_blank" className="items-center justify-between">
                     <Icon 
                        icon="teenyicons:telegram-outline"
                        className="hover:text-[#F88B1A] w-8 md:w-10 lg:w-12 xl:w-14 2xl:w-16"
                        width="54"
                     />
                  </a>
                  <a href="https://www.tiktok.com/@meetastroai" target="_blank" className="items-center justify-between">
                     <Icon 
                        icon="simple-icons:tiktok"
                        className="hover:text-[#F88B1A] w-8 md:w-10 lg:w-12 xl:w-14 2xl:w-16"
                        width="54"
                     />
                  </a>
                  <a href="https://www.instagram.com/meetastroai" target="_blank" className="items-center justify-between">
                     <Icon 
                        icon="brandico:instagram-filled"
                        className="hover:text-[#F88B1A] w-8 md:w-10 lg:w-12 xl:w-14 2xl:w-16"
                        width="54"
                     />
                  </a>
               </div>
            </div>
            <div className="relative flex xl:flex-row flex-col w-5/6 mx-auto xl:justify-between justify-end xl:items-start items-end gap-y-3">
               <div className="flex items-center space-x-2 font-extra-bold font-[family-name:var(--font-quinn-bold)] text-3xl">
                  <Image
                     src="/assets/robot.png"
                     alt="Tailwind CSS"
                     width={48}
                     height={48}
                  />
                  <div className="h-full flex flex-row mx-0">
                     <div>M</div>
                     <div>eet astro</div>
                  </div>
               </div>
               <div className="flex flex-col justify-start xl:items-start items-end xl:text-left text-right">
                  <div className="text-xl font-bold mb-6">Subscribe to our newsletter</div>
                  <div 
                     className="text-base mb-4" 
                     style={{
                        opacity: 0.6,
                     }}
                  >
                     Stay up to date with news and updates about our product!
                  </div>
                  <div className="w-full">
                     <form
                        className="flex appearance-none bg-transparent backdrop-blur-sm px-4 py-2 border border-white rounded-xl">
                        <input className="w-full bg-transparent focus:outline-none" placeholder="Email" autoComplete="off"/>
                        <button className="shrink-0 bg-transparent text-sm focus:outline-none" type="submit">
                           <Icon icon="majesticons:arrow-right"/>
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </section>
   );
}