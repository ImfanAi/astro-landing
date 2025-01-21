"use client"
import * as motion from "motion/react-client";
import { useState } from "react";

interface SearchProps {
   onSearch: (query: string) => void;
}
export default function Search({ onSearch }: SearchProps) {
   const [query, setQuery] = useState('');

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSearch(query);
      setQuery("");
   }
   return (
      <motion.div 
         className="relative lg:w-1/2 w-[240px] mx-auto rounded-full border-2 border-[#E15025] bg-[#E15025] bg-opacity-5 backdrop-blur-md"
      >
         <form onSubmit={handleSubmit}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-300 sr-only dark:text-white">Search</label>
            <div className="relative">
               <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                     <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                     </svg>
               </div>
               <input 
                  type="search" 
                  id="default-search" 
                  className="block w-full rounded-full p-4 ps-10 text-sm bg-transparent border-none focus:outline-none focus:ring-0" 
                  placeholder="Ask Astro..."
                  autoComplete="off"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
               />
            </div>
         </form>

      </motion.div>
   );
}