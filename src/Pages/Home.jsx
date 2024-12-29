import React, { useEffect } from 'react'; 
import Footer from './Components/Footer'; 
import NavBar from './Components/Navbar'; 
import {useMotionTemplate,useMotionValue,motion,animate} from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid'
import { FiArrowRight } from "react-icons/fi";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Navbar from './Components/Navbar';


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Home = () => {

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(140% 140% at 50% 0%, #020617 50%, ${color})`;
  const background =  useMotionTemplate`radial-gradient(0% 0% at 50% 0%, #020617 50%, ${color})`;

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
    <motion.section 
      style={{
        backgroundImage
      }}
      className="relative flex-grow grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      
      <div className="relative z-10 flex flex-col items-center">
        
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          <StarIcon className="w-3 h-3 inline-block mr-2 mb-1 " />
          Starry Night
        </span>

        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
          Explore the cosmos and
        </h1>

        <motion.h1
          style={{
            color, 
          }}
          className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight"
        >
          connect with stargazers
        </motion.h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
          distinctio eum impedit nihil ipsum modi.
        </p>

        <motion.button
          style={{
            border,
            boxShadow 
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Get Started
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
        
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={100} count={1500} factor={4} fade speed={3} />
        </Canvas>
      </div>


      {/* <Footer/> */}

    </motion.section>
     
    </div>

    
  );
  

};

export default Home;