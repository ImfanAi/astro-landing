import { useEffect, useState } from "react";

export function useUpdatePosition (loading: boolean) {
   const [bubblePosition, setBubblePosition] = useState<[number, number, number]>([0.8, 2.4, 0]);
   const [modelPosition, setModelPosition] = useState<[number, number, number]>([0, -1.5, 0]);
   const [bubbleBackground, setBubbleBackground] = useState('/assets/chatbubble-response.svg');
   useEffect(() => {
      const updatePosition = () => {
         if ( loading ) {
            if ( window.innerWidth <= 640 ) {
               setBubblePosition([-0.6, 2.5, 0]);
               setBubbleBackground('/assets/chatbubble-mobile.svg');
            } else if (window.innerWidth < 768) {
               setBubblePosition([-0.6, 2.5, 0]);
               setBubbleBackground('/assets/chatbubble-mobile.svg');
            } else if (window.innerWidth < 1024) {
               setBubblePosition([-0.6, 2.5, 0]);
               setBubbleBackground('/assets/chatbubble-mobile.svg');
            } else {
               setBubblePosition([0.5, 2.2, 0]);
               setBubbleBackground('/assets/chatbubble-loading.svg');
            }
         } else {
            if (window.innerWidth < 425) {
               setBubblePosition([-1.2, 2.6, 0]);
               setModelPosition([0.1, -2, 0]);
               setBubbleBackground('/assets/chatbubble-mobile.svg');
            }
            else if ( window.innerWidth < 640 ) {
               setBubblePosition([-1.3, 2.5, 0]);
               setModelPosition([0, -2, 0]);
               setBubbleBackground('/assets/chatbubble-mobile.svg');
            } else if ( window.innerWidth < 768 ) {
               setBubblePosition([-1.3, 2.6, 0]);
               setModelPosition([0, -2, 0]);
               setBubbleBackground('/assets/chatbubble-mobile.svg');
            } else if ( window.innerWidth < 1024 ) {
               setBubblePosition([-1.4, 2.6, 0]);
               setModelPosition([0, -2, 0]);
               setBubbleBackground('/assets/chatbubble-mobile.svg');
            } else if (window.innerWidth < 1440) {
               setBubblePosition([0.8, 2.4, 0]);
               setModelPosition([0, -1.5, 0]);
               setBubbleBackground('/assets/chatbubble-response.svg');
            } else {
               setBubblePosition([1, 2.4, 0]);
               setModelPosition([0, -1.5, 0]);
               setBubbleBackground('/assets/chatbubble-response.svg');
            }
         }       
      }
      
      window.addEventListener("resize", updatePosition);
      updatePosition();
      return () => window.removeEventListener("resize", updatePosition);
   }, [loading]);

   return { bubblePosition, modelPosition, bubbleBackground };
}