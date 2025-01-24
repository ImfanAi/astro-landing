import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import "./index.css";

interface ChatBubbleProps {
   message: string;
   visible: boolean;
   loading: boolean;
   bubbleBackground: string;
}

export default function ChatBubble({ message, visible, loading, bubbleBackground }: ChatBubbleProps) {
   if(!visible) return null;

   return (
      <motion.div 
         initial={loading ? {scale: 1} : {}}
         animate={loading ? {scale: [1, 1.1, 1]} : {}}
         transition={ 
            loading ? { 
               duration: 2.5,
               times: [0.1, 0.5, 1],
               loop: true,
               repeat: Infinity,
               ease: "easeInOut",
            } : {
               duration: 2.5,
               times: [0.7, 0.8, 1],
               ease: "easeInOut",
            }}
         className={`
            relative 
            `}
         style={{
            backgroundImage: `url("${bubbleBackground}")`,  
            backgroundSize: 'contain', // Adjust as needed (cover, contain, etc.)  
            backgroundPosition: `${loading ? 'center' : 'center left'}`, // Center the image  
            backgroundRepeat: 'no-repeat', // Prevent repeating  
            overflowY: "auto",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "pre-wrap",
            scrollbarWidth: "none",
         }}
      >
         {/* <Image 
            src="/assets/chatbubble-response.svg"
            alt="Astro"
            fill
            width={160}
            height={48}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            objectFit="cover"
            layout="responsive"
            className="absolute bottom-0 -z-10"
         /> */}
         {loading ? (
            <div className="relative flex flex-row items-center gap-x-2 justify-center ml-2 w-[120px] h-[48px]">
               <AnimatePresence>
                  <motion.div 
                     className="w-[10px] h-[10px] rounded-full bg-[#ff703b]"
                     initial={{ opacity: 0}}
                     animate={{ opacity: [1, 0] }}
                     transition={{ 
                        times: [0.5, 1],
                        duration: 0.5,
                        loop: true,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                        ease: "linear"
                     }}
                     key={1}
                  />
                  <motion.div 
                     className="w-[10px] h-[10px] rounded-full bg-[#ff703b]"
                     initial={{ opacity: 0}}
                     animate={{ opacity: [1, 0] }}
                     transition={{ 
                        times: [0.5, 1],
                        duration: 0.5,
                        loop: true,
                        repeat: Infinity,
                        delay: 0.2,
                        repeatDelay: 0.5,
                        ease: "linear"
                     }}
                     key={2}
                  />
                  <motion.div 
                     className="w-[10px] h-[10px] rounded-full bg-[#ff703b]"
                     initial={{ opacity: 0}}
                     animate={{ opacity: [1, 0] }}
                     transition={{ 
                        times: [0.5, 1],
                        duration: 0.5,
                        loop: true,
                        repeat: Infinity,
                        delay: 0.4,
                        repeatDelay: 0.5,
                        ease: "linear"
                     }}
                     key={3}
                  />
               </AnimatePresence>
            </div>
            
         ) : (
            <div 
               className="relative text-left 2xl:w-[480px] 2xl:h-[120px] xl:w-[480px] xl:h-[100px] lg:w-[320px] lg:h-[120px] md:w-[280px] md:h-[120px] md:pt-4 lg:pt-0 w-[260px] h-[130px] pt-6"
               style={{
                  overflowY: "auto",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  whiteSpace: "pre-wrap",
                  scrollbarWidth: "none",
                  textOverflow: "ellipsis",
               }}
            >
               <p className="2xl:w-5/6 xl:w-2/3 ml-6 xl:mt-3 lg:mt-3 items-center justify-center sm:text-sm text-xs px-2">{message}</p>
            </div>
         )}
      </motion.div>
   )
}