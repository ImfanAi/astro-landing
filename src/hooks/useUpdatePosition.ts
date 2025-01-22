import { useEffect, useState } from "react";

export function useUpdatePosition (loading: boolean) {
   const [bubblePosition, setBubblePosition] = useState<[number, number, number]>([0.8, 2.4, 0]);
   // const [modelScale, setModelScale] = useState(1.5);
   const [modelPosition, setModelPosition] = useState<[number, number, number]>([0, -1.5, 0]);
   useEffect(() => {
      const updatePosition = () => {
         if ( loading ) {
            if ( window.innerHeight <= 640 ) {
               setBubblePosition([-2, 2, 0]);
            } else {
               setBubblePosition([0.9, 1.8, 0]);
            }
         } else {
            if ( window.innerHeight < 640) {
               setBubblePosition([0.8, 1, 0]);
               setModelPosition([0, -1.5, 0]);
            } else if ( window.innerHeight < 768 ) {
               setBubblePosition([0.8, 1, 0]);
               setModelPosition([0, -1.5, 0]);
            } else if ( window.innerHeight < 1024 ) {
               setBubblePosition([0.8, 2.4, 0]);
               setModelPosition([0, -1.5, 0]);
            } else if (window.innerWidth < 1440) {
               setBubblePosition([0.8, 2.4, 0]);
               setModelPosition([0, -1.5, 0]);
            } else {
               setBubblePosition([0.8, 2.4, 0]);
               setModelPosition([0, -1.5, 0]);
            }
         }       
      }
      
      window.addEventListener("resize", updatePosition);
      updatePosition();
      return () => window.removeEventListener("resize", updatePosition);
   }, []);

   return { bubblePosition, modelPosition };
}