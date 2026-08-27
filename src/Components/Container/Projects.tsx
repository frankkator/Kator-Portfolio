import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { Pagination, Controller } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import Swiper core styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/controller'

const projectSlides = [
  {
    id: 1,
    title: "",
    src: "", // Replace with your project image URL
    description: "",
    techStack: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "",
    src: "", // Replace with your project image URL
    description: "",
    techStack: ["React", "Framer Motion", "Lucide React"]
  },
  {
    id: 3,
    title: "",
    src: "", // Replace with your project image URL
    description: "",
    techStack: ["Vite", "Tailwind CSS", "SwiperJS"]
  }
];

export default function Projects() {
  // Store Swiper instances to dynamically lock them into a simultaneous master slide group
  const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#f0e68c] p-4 md:p-8">
      
      {/* Container Frame */}
      <div className="relative flex flex-col items-center w-full max-w-6xl p-6 md:p-12 mt-16 rounded-2xl border border-amber-300 bg-amber-400/30 shadow-2xl backdrop-blur-2xl">
        
        {/* Absolute Section Header Title */}
        <div className="absolute -top-7 flex justify-center items-center border border-amber-200 rounded-xl w-64 h-14 bg-amber-700/80 shadow-lg backdrop-blur-3xl z-10">
          <h1 className="font-frank text-3xl font-bold uppercase text-center text-amber-50">
            My projects
          </h1>
        </div>
        
        {/* Main Grid: Responsive 1 Column on Mobile -> 2 Columns on Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 w-full mt-6">

          {/* LEFT CAROUSEL: Project Images display stack */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-xl border border-amber-200 aspect-4/3 bg-amber-950/20">
            <Swiper
              modules={[Pagination, Controller]}
              onSwiper={setFirstSwiper}
              controller={{ control: secondSwiper }}
              pagination={{ clickable: true }}
              className="w-full h-full group"
            >
              {projectSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="w-full h-full flex items-center justify-center bg-transparent">
                    {slide.src ? (
                      <img
                        src={slide.src}
                        alt={slide.title}
                        className="w-full h-full object-cover select-none"
                      />
                    ) : (
                      <div className="text-amber-950 font-bold opacity-40">[Insert Project Image]</div>
                    )}
                  </div>
                </SwiperSlide>
              ))}

              {/* Arrow Layout Nav Handles */}
              <button 
                onClick={() => firstSwiper?.slidePrev()}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-amber-950/50 hover:bg-amber-900 border border-amber-200/20 text-amber-50 rounded-full cursor-pointer hidden group-hover:block transition-all shadow-md"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => firstSwiper?.slideNext()}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-amber-950/50 hover:bg-amber-900 border border-amber-200/20 text-amber-50 rounded-full cursor-pointer hidden group-hover:block transition-all shadow-md"
              >
                <ChevronRight size={24} />
              </button>
            </Swiper>
          </div>

          {/* RIGHT CAROUSEL: Explanatory Context Details */}
          <div className="w-full relative min-h-75 lg:min-h-full flex items-center">
            <Swiper
              modules={[Controller]}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
              allowTouchMove={false} // Prevents mismatched swipes by handling drag only from the image column
              className="w-full h-full"
            >
              {projectSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="flex flex-col justify-center h-full p-6 md:p-8 bg-amber-400/40 border border-amber-200 shadow-md rounded-2xl backdrop-blur-md">
                    
                    <span className="text-sm font-bold uppercase tracking-widest text-amber-800">Project 0{slide.id}</span>
                    <h2 className="font-frank text-3xl font-extrabold text-amber-950 mt-1 uppercase">
                      {slide.title}
                    </h2>
                    
                    <p className="font-custom text-lg text-black/80 font-medium mt-4 leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Tech Stack Pills List */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {slide.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 text-xs font-bold font-frank tracking-wide uppercase border border-amber-300 bg-amber-900 text-amber-50 rounded-full shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

      </div>
    </div>
  );
}
