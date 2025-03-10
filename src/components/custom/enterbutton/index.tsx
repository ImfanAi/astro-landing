import "./index.css";

export default function EnterButton() {
   return(
      <>
         <a href={`${process.env.NEXT_PUBLIC_MAIN_APP_URL}`}>
            <button className="shiny-cta px-2 py-2 sm:px-4 sm:py-2 md:px-6 md:py-2 lg:py-2 lg:px-6 xl:py-[15px]"
            >
               <span className="font-[family-name:var(--font-man-rope)] font-bold md:text-lg sm:text-md text-sm">&nbsp;Launch&nbsp;&nbsp;App&nbsp;</span>
            </button>
         </a>
      </>
   );
}