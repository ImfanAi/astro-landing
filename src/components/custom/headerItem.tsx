import * as motion from 'motion/react-client';

interface HeaderItemProps {
   title: string;
}
export default function HeaderItem({title}: HeaderItemProps) {
   const href = `#${title}`;
   return (
      <motion.p
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.8 }}
      >
         <a href={href} className="hover:text-[#E15025] font-bold text-lg opacity-90">
            {title === "JoinUs" ? "Join Us" : title}
         </a>
      </motion.p>
   )
}