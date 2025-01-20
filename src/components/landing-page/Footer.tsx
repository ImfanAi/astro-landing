import { Icon } from "@iconify/react/dist/iconify.js";
export default function Footer() {
   return (
      <footer className="w-5/6 mx-auto z-10">
         <div className="bg-black text-white border border-white flex justify-between xl:items-center items-start py-4">
            <div className="flex md:gap-3 gap-2">
               <a href="https://x.com/MeetAstroAI" target="_blank" className="border border-white bg-transparent lg:p-3 p-1 rounded-full flex gap-2 items-center justify-between bg-opacity-25 backdrop-blur-md">
                  <Icon icon="akar-icons:twitter-fill" className="md:text-xl text-xs text-white" />
               </a>
               <a href="https://t.me/+oh9HXznG6eg5ZTI1" target="_blank" className="border border-white bg-transparent lg:p-3 p-1 rounded-full flex gap-2 items-center justify-between bg-opacity-25 backdrop-blur-md">
                  <Icon icon="teenyicons:telegram-outline" className="md:text-xl text-xs text-white" />
               </a>
               <a href="https://www.tiktok.com/@meetastroai" target="_blank" className="border border-white bg-transparent lg:p-3 p-1 rounded-full flex gap-2 items-center justify-between bg-opacity-25 backdrop-blur-md">
                  <Icon icon="simple-icons:tiktok" className="md:text-xl text-xs text-white" />
               </a>
               <a href="https://www.instagram.com/meetastroai" target="_blank" className="border border-white bg-transparent lg:p-3 p-1 rounded-full flex gap-2 items-center justify-between bg-opacity-25 backdrop-blur-md">
                  <Icon icon="brandico:instagram-filled" className="md:text-xl text-xs text-white" />
               </a>
            </div>
            <div className="text-xs md:flex xl:flex-row flex flex-col items-end 2xl:gap-10 xl:gap-5 gap-2 z-10">
               <div className="flex sm:flex-row flex-col">
                  <div>
                     ©2025 MeetAstro&nbsp;
                  </div>
                  <div>
                     All rights reserved.
                  </div>
               </div>
               <div>
                  Privacy Policy
               </div>
               <div>
                  Terms & Conditions
               </div>
               <div>
                  Conditions
               </div>


            </div>
            
         </div>
      </footer>
   )
}