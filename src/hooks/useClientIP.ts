import { useState, useEffect } from "react";

export default function useClientIP() {
   const [clientIP, setClientIP] = useState("");

   useEffect(() => {  
      const fetchClientIP = async () => {  
         try {  
            const response = await fetch('https://api.ipify.org?format=json');  
            if (!response.ok) {  
               throw new Error('Network response was not ok');  
            }  
            const data = await response.json();  
            setClientIP(data.ip);  
         } catch (err) {  
            console.error("Failed to retrieve client IP:", err);
         }  
      };  

      fetchClientIP();  
   }, []);  

   return clientIP;  
}