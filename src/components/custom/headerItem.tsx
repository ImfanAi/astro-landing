import * as motion from 'motion/react-client';

interface HeaderItemProps {
   title: string;
}
export default function HeaderItem({title}: HeaderItemProps) {
   const headerHeight = 84; // Change this to your header height in pixels  

   const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {  
      event.preventDefault(); // Prevent the default behavior  
      const section = document.getElementById(id);  
      if (section) {  
         const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Get the vertical position of the section relative to the document  
         window.scrollTo({  
            top: sectionTop - headerHeight, // Adjust by header height  
            behavior: 'smooth', // Smooth scroll  
         });  
      }  
   };  
   const href = `#${title}`;
   return (
      <motion.p
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.8 }}
      >
         <a 
            href={href} 
            className="hover:text-[#E15025] font-bold text-lg opacity-90"
            onClick={(e) => scrollToSection(e, title)}
         >
            {title === "JoinUs" ? "Join Us" : title}
         </a>
      </motion.p>
   )
}