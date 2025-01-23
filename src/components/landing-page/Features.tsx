import "../custom/css/featureitem.css";
const Features = [
   {
      title: "SWAP ATM",
      description: "Just type to 'Astro' and He will Buy, Trade, and Sell tokens across multiple Blockchains with your Approval",
   },
   {
      title: "YIELD GENERATOR",
      description: "Just type to 'Astro' and He will simplify Borrowing, Lending, and Staking by executing all your trades on the backend with your Approval.",
   },
   {
      title: "TRADING",
      description: "Astro will execute any Trade you like by just typing to Him. View or cancel trades anytime!",
   },
   {
      title: "MISSIONS",
      description: "Send Astro on a mission to earn XP, gold, diamonds, and credits. These rewards can help reduce swap costs, boost yields, and More.",
   },
]
export default function Feature() {
   return (
      <section id="Features" className="relative">
         <div className="flex flex-col flex-grow w-full h-full mx-auto justify-center items-center px-20 2xl:py-40 xl:py-32 lg:py-20 py-16">
            <div
               style={{
                  background: "radial-gradient(circle at 0% 60%, #E15025 0%, transparent 40%)", /* Adjust the blur value as needed */
                  opacity: "30%",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
               }} 
            />
            <div
               style={{
                  background: "radial-gradient(circle at 0% 40%, #2D1058 0%, transparent 40%)", /* Adjust the blur value as needed */
                  opacity: "30%",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
               }} 
            />
            <div
               style={{
                  background: "radial-gradient(circle at 100% 70%, #F88B1A 0%, transparent 40%)", /* Adjust the blur value as needed */
                  opacity: "40%",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
               }} 
            />
            <div
               style={{
                  background: "radial-gradient(circle at 100% 50%, #962E71 0%, transparent 40%)", /* Adjust the blur value as needed */
                  opacity: "40%",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
               }} 
            />
            
            <p className="bg-gradient-to-r from-[#962E71] via-[#E15025] to-[#F88B1A] bg-clip-text text-transparent md:text-9xl text-8xl font-extra-bold font-[family-name:var(--font-quinn-bold)] mb-[64px]">Features</p>
            <div className="xl:grid xl:grid-rows-2 xl:grid-flow-col xl:gap-y-10 xl:w-4/5 lg:mx-auto flex flex-col gap-8">
               {Features.map((Feature) => (
                  <div 
                     className="feature-item relative flex flex-col justify-start items-start h-full py-[64px] px-[80px] border-none rounded-3xl bg-[#962E71] bg-opacity-10"
                     key={`${Feature.title}_key`}
                  >
                     <div className="text-4xl font-bold mb-[20px] text-[#F88B1A]">
                        {Feature.title}
                     </div>
                     <div className="text-gray-300">
                        {Feature.description}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}