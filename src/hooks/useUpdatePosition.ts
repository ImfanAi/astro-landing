import { useEffect, useState } from "react";

export function useUpdatePosition () {
   const [htmlPosition, setHtmlPosition] = useState<[number, number, number]>([1, 0.5, 0]);

   useEffect(() => {
      const updatePosition = () => {
         if (window.innerWidth < 768) {
            setHtmlPosition([0.8, 1, 0]);
         } else {
            setHtmlPosition([1, 1, 0]);
         }
      }
      
      window.addEventListener("resize", updatePosition);
      updatePosition();
      return () => window.removeEventListener("resize", updatePosition);
   }, []);

   return htmlPosition;
}