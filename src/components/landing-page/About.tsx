"use client"
import React from "react";
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, Html } from '@react-three/drei';
import * as THREE from 'three';
import Search from "../custom/searchBar";
import ChatBubble from "../custom/chatbubble";
import { useUpdatePosition } from "@/hooks/useUpdatePosition";
import useQuery, { AstroStatus } from "@/hooks/useQuery";

interface ModelProps {
   query: string;
   loading: boolean;
   status: AstroStatus;
   audioURL: string;
}
function Model({ query, loading, status, audioURL }: ModelProps) {
   const { scene, animations } = useGLTF('/assets/model.glb');
   const { actions } = useAnimations(animations, scene);
   // Update the chatbubble position with screen size
   const htmlPosition = useUpdatePosition();
   React.useEffect(() => {
      if(actions) {
         Object.values(actions).forEach(action => {
            try {
               action?.stop();
            } catch (error) {
               console.error("Error stopping action:", error);
            }
         });
         switch (status) {
            case AstroStatus.Thinking:
               actions?.thinking?.setLoop(THREE.LoopRepeat, Infinity);
               actions?.thinking?.play();
               break;
            case AstroStatus.Speaking:
               actions?.lipSync?.setLoop(THREE.LoopRepeat, Infinity);
               actions?.lipSync?.play();
               break;
            case AstroStatus.Idle:
            default:
               actions.rollEyes?.setLoop(THREE.LoopRepeat, Infinity);
               actions.rollEyes?.play();
               break;
         }
      }
   }, [actions,status]);

   React.useEffect(() => {
      if (status === AstroStatus.Speaking && audioURL) {
         const audio = new Audio(audioURL);
         audio.play();
      }
   }, [status, audioURL]);
   return (
      <>
         <primitive object={scene} scale={2} position={[0, -2, 0]}/>
         <Html position={htmlPosition}>
            <ChatBubble 
               message={query} 
               visible={true}
               loading={loading}
            />
         </Html>
      </>
   );
};
export default function Astro() {
   const { message, audioURL, loading, status, handleQuery } = useQuery();
   return (
      <section id="About">
         <div className="relative h-screen w-full flex flex-col justify-between items-center lg:pt-24 lg:pb-12 px-12 pb-20 pt-24 font-[family-name:var(--font-geist-mono)] backdrop-blur-sm"
         >
            <div className="absolute inset-0 bg-no-repeat bg-bottom bg-contain 2xl:bottom-[120px] xl:bottom-[160px] lg:bottom-[180px] md:bottom-[200px] bottom-[240px]" style={{ backgroundImage: "url('/assets/spline.svg')" }}></div>
            <div
               style={{
                  background: "radial-gradient(circle at 10% 20%, #E15025 0%, transparent 30%)", /* Adjust the blur value as needed */
                  opacity: "60%",
                  width: "100%", /* Adjust the width as needed */
                  height: "100%", /* Adjust the height as needed */
                  position: "absolute", /* Ensure it covers the entire container */
                  top: 0,
                  left: 0,
               }} 
            />
            <div
               style={{
                  background: "radial-gradient(circle at 10% 40%, #962E71 0%, transparent 60%)",/* Adjust the blur value as needed */
                  opacity: "40%",
                  width: "80%", /* Adjust the width as needed */
                  height: "100%", /* Adjust the height as needed */
                  position: "absolute", /* Ensure it covers the entire container */
                  top: 0,
                  left: 0,
               }} 
            />
            <div
               style={{
                  background: "radial-gradient(circle at 100% 40%, #962E71 0%, transparent 40%)",/* Adjust the blur value as needed */
                  opacity: "100%",
                  width: "100%", /* Adjust the width as needed */
                  height: "100%", /* Adjust the height as needed */
                  position: "absolute", /* Ensure it covers the entire container */
                  bottom: 0,
                  right: 0,
               }} 
            />
            <div
               style={{
                  background: "radial-gradient(circle at 100% 80%, #2D1058 0%, transparent 20%)",/* Adjust the blur value as needed */
                  opacity: "50%",
                  backdropFilter: "blur(20px)",
                  width: "100%", /* Adjust the width as needed */
                  height: "100%", /* Adjust the height as needed */
                  position: "absolute", /* Ensure it covers the entire container */
                  bottom: 0,
                  right: 0,
               }} 
            />
            <div
               style={{
                  background: "radial-gradient(circle at 90% 50%, #F88B1A 0%, transparent 20%)",/* Adjust the blur value as needed */
                  opacity: "50%",
                  width: "100%", /* Adjust the width as needed */
                  height: "100%", /* Adjust the height as needed */
                  position: "absolute", /* Ensure it covers the entire container */
                  bottom: 0,
                  right: 0,
               }} 
            />
            {/* <div className="flex justify-center mx-auto my-auto items-center text-center lg:text-9xl md:text-7xl text-6xl font-bold">
               MEET ASTRO
            </div> */}
            {/* <div className="absolute inset-0 flex flex-row justify-between items-center mx-auto w-2/3 opacity-80">
               <div className="text-center lg:text-9xl md:text-7xl text-6xl font-bold">
                  MEET
               </div>
               <div className="text-center lg:text-9xl md:text-7xl text-6xl font-bold">
                  ASTRO
               </div>
            </div> */}
            <div className="w-full h-4/5 my-auto flex flex-row justify-between items-center">
               <div className="relative w-full h-full">
                  <Canvas
                     camera={{
                        position: [0, 0, 10],
                        fov: 30,
                     }}
                  >
                     <ambientLight intensity={4} />
                     <pointLight position={[10, 10, 10]} intensity={1} />
                     <directionalLight position={[-5, 5, 5]} intensity={0.5} />
                     <spotLight position={[15, 20, 5]} angle={0.3} intensity={0.8} />
                     <Model 
                        query={message}
                        loading={loading}
                        status={status}
                        audioURL={audioURL}
                     />
                  </Canvas>
               </div>
            </div>
            <Search onSearch={handleQuery}/>
         </div>
      </section>
   );
}