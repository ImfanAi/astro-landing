import { useState } from "react";
import axios from "axios";

export enum AstroStatus {
   Idle ="idle",
   Thinking = "thinking",
   Speaking = "speaking",
}
export default function useQuery() {
   const [message, setMessage] = useState<string>("Hello! I am Astro, your personal DeFAi Agent!. What are you looking for?");
   const [audioDuration, setAudioDuration] = useState<number>(0);
   const [audioURL, setAudioURL] = useState<string>("");
   const [loading, setLoading] = useState<boolean>(false);
   const [status, setStatus] = useState<AstroStatus>(AstroStatus.Idle);

   const handleQuery = async (query: string) => {
      const payload = { query };
      setLoading(true);
      setStatus(AstroStatus.Thinking);
      try {
         const response = await axios.post(`/api/query`, payload, {
               headers: {
                  'Content-Type': 'application/json',
               },
            });
            let data = response.data;
            if (typeof data === 'string') {
                data = JSON.parse(data); // Convert string to JSON
            }
            const { botResponse, audioUrl, audioDuration } = data;
            setMessage(botResponse);
            setAudioDuration(audioDuration);
            setAudioURL(audioUrl);
            setStatus(AstroStatus.Speaking);
            setTimeout(() => {
               setStatus(AstroStatus.Idle);
            }, audioDuration * 1000);
      } catch (err) {
         console.error("Error fetching query:", err);
         setMessage("Sorry, I am unable to process your request at the moment. Please try again later.");
      } finally {
         setLoading(false);
      }
   };

   return { message, audioURL, audioDuration, loading, status, handleQuery };
}