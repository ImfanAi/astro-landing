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
         id="chat-bubble"
         initial={{ opacity: 1, y: -10 }}
         animate={{ 
            opacity: 1, 
            y: [0, -10, 0] 
         }}
         transition={{ 
            times: [0.3, 0.6, 1],
            duration: 2,
            loop: true,
            repeat: Infinity
         }}
         className="shadow-lg text-sm sm:text-md md:text-lg"
      >
         {loading ? (
            <div className="load-wrapp">
               <div className="load-3">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
               </div>
            </div>
         ) : (
            <p>{message}</p>
         )}
      </motion.div>
   )
}