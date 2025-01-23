import { useEffect, useState } from "react";

export function useUpdatePosition (loading: boolean) {
   const [bubblePosition, setBubblePosition] = useState<[number, number, number]>([0.8, 2.4, 0]);
   const [modelPosition, setModelPosition] = useState<[number, number, number]>([0, -1.5, 0]);
   useEffect(() => {
      const updatePosition = () => {
         if ( loading ) {
            if ( window.innerWidth <= 640 ) {
               setBubblePosition([0.2, 2.2, 0]);
            } else if (window.innerWidth < 768) {
               setBubblePosition([0.9, 0, 0]);
            } else {
               setBubblePosition([0.9, 1.5, 0]);
            }
         } else {
            if (window.innerWidth < 425) {
               setBubblePosition([-1.2, 2.6, 0]);
               setModelPosition([0.1, -2, 0]);
            }
            else if ( window.innerWidth < 640 ) {
               setBubblePosition([-1.2, 2.5, 0]);
               setModelPosition([0, -2, 0]);
            } else if ( window.innerWidth < 768 ) {
               setBubblePosition([-1.5, 2.5, 0]);
               setModelPosition([0, -2, 0]);
            } else if ( window.innerWidth < 1024 ) {
               setBubblePosition([-1.5, 2.5, 0]);
               setModelPosition([0, -2, 0]);
            } else if (window.innerWidth < 1440) {
               setBubblePosition([0.8, 2.4, 0]);
               setModelPosition([0, -1.5, 0]);
            } else {
               setBubblePosition([1, 2.4, 0]);
               setModelPosition([0, -1.5, 0]);
            }
         }       
      }
      
      window.addEventListener("resize", updatePosition);
      updatePosition();
      return () => window.removeEventListener("resize", updatePosition);
   }, [loading]);

   return { bubblePosition, modelPosition };
}