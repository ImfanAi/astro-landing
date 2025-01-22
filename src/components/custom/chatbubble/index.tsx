import { AnimatePresence } from "motion/react";
import "./index.css";
import * as motion from "motion/react-client";

interface ChatBubbleProps {
   message: string;
   visible: boolean;
   loading: boolean;
}

export default function ChatBubble({ message, visible, loading }: ChatBubbleProps) {
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
         className={`'relative shadow-lg text-xs sm:text-sm md:text-md lg:text-lg bg-[#ff703b] bg-opacity-10 backdrop-blur-md border-2 border-[#ff703b]
                     ${loading ? 'md:p-4 p-2'  : '2xl:w-[360px] xl:w-80 lg:w-60 md:w-48 w-24 2xl:h-28 xl:h-24 lg:h-22 md:h-24 h-28'}
                     ${loading ? 'md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-br-2xl  rounded-tl-lg rounded-tr-lg rounded-br-lg' : 'rounded-tl-2xl rounded-tr-2xl rounded-br-2xl'}
                  `}
         style={{
            overflowY: "auto",
            overflow: "hidden",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "pre-wrap",
            scrollbarWidth: "none",
         }}
      >
         {loading ? (
            <div className="flex flex-row items-center gap-x-2 justify-center w-full h-full">
               <AnimatePresence>
                  <motion.div 
                     className="md:w-[12px] md:h-[12px] w-[10px] h-[10px] rounded-full bg-[#ff703b]"
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
                     className="md:w-[12px] md:h-[12px] w-[10px] h-[10px] rounded-full bg-[#ff703b]"
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
                     className="md:w-[12px] md:h-[12px] w-[10px] h-[10px] rounded-full bg-[#ff703b]"
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
            <div className="w-11/12 mx-auto py-2">{message}</div>
         )}
      </motion.div>
   )
}