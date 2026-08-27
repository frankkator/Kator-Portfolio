import MyLogo from '../SVG/MyLogo.svg';
import { motion, type Variants } from 'framer-motion';
import CountUpModule from 'react-countup';
import { ArrowRight } from 'lucide-react';

// Safely extracts the valid functional component out of the module object wrapper
const CountUp = (CountUpModule as any).CountUp || (CountUpModule as any).default || CountUpModule;

export default function WelcomePage() {
  const handleClick = () => {
    alert('Project I created!');
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const clientsVariants: Variants = {
    hidden: { x: 80, y: 80, scale: 0, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 14 },
    },
  };

  const projectsworkedonVariants: Variants = {
    hidden: { x: -80, y: 80, scale: 0, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 14 },
    },
  };

  const projectcompletedVariants: Variants = {
    hidden: { y: -80, scale: 0, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 14 },
    },
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-[#f0e68c] relative p-6">
      
      {/* Floating Header */}
      <div className='flex justify-center border border-amber-200/20 rounded-2xl shadow-md p-4 bg-white/0 mt-10 backdrop-blur-sm mb-6'>
        <h1 className="font-frank font-extrabold text-5xl md:text-6xl text-amber-950">
          Kator's Portfolio
        </h1>
      </div>

      {/* Main Grid Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8 w-full max-w-6xl items-start">
        
        {/* Left Column: Logo Stack */}
        <div className="flex justify-center lg:justify-start lg:sticky top-6">
          <img
            src={MyLogo}
            alt="Logo"
            width={450}
            height={225}
            className="object-contain"
          />
        </div>

        {/* Right Column: Profile Content Box */}
        <div className="col-span-1">
          <div className='rounded-3xl p-6 shadow-lg min-h-72.5 flex items-center justify-center border border-amber-200 bg-white/30 backdrop-blur-md'>
            <p className="font-frank text-black text-3xl md:text-4xl text-center font-bold"> 
              Hi there, So my Name is Frank Kator i'm a software developer and web-designer. I build modern, interactive digital experiences and I'd love to work with you.
            </p>      
          </div>
          <div className='rounded-3xl p-6 shadow-lg min-h-31.5 flex items-center justify-center border mt-6 border-amber-200 bg-white/30 backdrop-blur-md'>
            <p className="font-frank text-black text-2xl md:text-3xl text-center font-bold">
              Soo, kindly, check out the projects and prompts i've done and contact me if interested.
            </p>
          </div>
        </div> 
      </div>

      {/* Action Buttons Section (Perfectly matching the Profile component styling) */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-6 max-w-xl mt-12">
        <button 
          className="flex items-center justify-center gap-3 w-full sm:w-auto border border-amber-200 bg-amber-900 hover:bg-amber-700 text-amber-50 rounded-2xl px-6 py-4 cursor-pointer transition-colors shadow-lg group" 
          onClick={handleClick}
        > 
          <span className="font-frank font-bold text-amber-50">
            View Projects
          </span>
          <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
        </button>

        <button 
          className="flex items-center justify-center gap-3 w-full sm:w-auto border border-amber-200 bg-amber-900 hover:bg-amber-700 text-amber-50 rounded-2xl px-6 py-4 cursor-pointer transition-colors shadow-lg group" 
          onClick={handleClick}
        >
          <span className="font-frank font-bold text-amber-50">
            View Prompts
          </span>
          <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Bottom Section: Animated Stats Counter */}
      <motion.div
        className='w-full max-w-4xl flex justify-center min-h-60 mt-12'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className='flex flex-col md:flex-row gap-12 md:gap-24 justify-center items-center w-full'>
          
          <motion.div className='text-center' variants={clientsVariants}>
            <h1 className="text-7xl md:text-9xl font-extrabold text-amber-950">
              <CountUp start={0} end={0} duration={1} enableScrollSpy scrollSpyOnce />+
            </h1>
            <p className='font-frank text-amber-900/80 text-2xl md:text-3xl font-semibold mt-1'>
              clients
            </p>
          </motion.div>

          <motion.div className='text-center' variants={projectsworkedonVariants}>
            <h1 className="text-7xl md:text-9xl font-extrabold text-amber-950">
              <CountUp start={0} end={10} duration={1} enableScrollSpy scrollSpyOnce />+
            </h1>
            <p className='font-frank text-amber-900/80 text-2xl md:text-3xl font-semibold mt-1'>
              Projects worked on
            </p>
          </motion.div>

          <motion.div className='text-center' variants={projectcompletedVariants}>
            <h1 className="text-7xl md:text-9xl font-extrabold text-amber-950">
              <CountUp start={0} end={7} duration={1} enableScrollSpy scrollSpyOnce />+
            </h1>
            <p className='font-frank text-amber-900/80 text-2xl md:text-3xl font-semibold mt-1'>
              Projects Completed
            </p>
          </motion.div>

        </div>
      </motion.div>

    </div>
  );
}
