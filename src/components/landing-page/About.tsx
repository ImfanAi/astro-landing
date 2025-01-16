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
   const { message, audioURL, audioDuration, loading, status, handleQuery } = useQuery();
   return (
      <section id="About">
         <div className="bg-[url('/assets/about.jpg')] bg-no-repeat bg-cover bg-center h-screen w-full flex flex-col justify-between items-center lg:pt-24 lg:pb-12 px-12 pb-20 pt-24 font-[family-name:var(--font-geist-mono)]"
         >
            <div className="flex lg:text-8xl md:text-6xl text-4xl font-bold">
               Meet Astro
            </div>
            <div className="w-full h-2/3 flex flex-row justify-between items-center">
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