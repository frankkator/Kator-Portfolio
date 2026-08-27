import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { Pagination, Controller } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import Swiper core styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/controller'

const promptSlides = [
  {
    title: "",
    src: "",
    description: ""
  },
  {
    title: "",
    src: "",
    description: ""
  },
  {
    title: "",
    src: "",
    description: ""
  }
];

export default function Prompts() {
  const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#f0e68c] p-4 md:p-8">
      
      {/* Container Frame */}
      <div className="relative flex flex-col items-center w-full max-w-4xl p-6 md:p-12 mt-16 rounded-2xl border border-amber-300 bg-amber-400/30 shadow-2xl backdrop-blur-2xl">
        
        {/* Absolute Section Header Title */}
        <div className="absolute -top-7 flex justify-center items-center border border-amber-200 rounded-xl w-64 h-14 bg-amber-700/80 shadow-lg backdrop-blur-3xl z-10">
          <h1 className="font-frank text-3xl font-bold uppercase text-center text-amber-50">
            My Prompts
          </h1>
        </div>
        
        {/* Row Layout: Flex Flow Stacked Vertically */}
        <div className="flex flex-col gap-6 w-full mt-6">

          {/* TOP ROW CAROUSEL: Prompt Images */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-xl border border-amber-200 h-64 md:h-96 bg-amber-950/20">
            <Swiper
              modules={[Pagination, Controller]}
              onSwiper={setFirstSwiper}
              controller={{ control: secondSwiper }}
              pagination={{ clickable: true }}
              className="w-full h-full group"
            >
              {promptSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full flex items-center justify-center bg-transparent">
                    {slide.src ? (
                      <img
                        src={slide.src}
                        alt={slide.title || 'Prompt view'}
                        className="w-full h-full object-cover select-none"
                      />
                    ) : (
                      <div className="text-amber-950 font-bold opacity-40">[Insert Prompt Image Here]</div>
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

          {/* BOTTOM ROW CAROUSEL: Explanatory Context Details */}
          <div className="w-full relative">
            <Swiper
              modules={[Controller]}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
              allowTouchMove={false}
              className="w-full h-full"
            >
              {promptSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-center p-6 md:p-8 bg-amber-400/40 border border-amber-200 shadow-md rounded-2xl backdrop-blur-md text-center">
                    
                    <h2 className="font-frank text-3xl font-extrabold text-amber-950 uppercase">
                      {slide.title || "[Insert Prompt Title]"}
                    </h2>
                    
                    <p className="font-custom text-lg text-black/80 font-medium mt-4 leading-relaxed max-w-2xl mx-auto">
                      {slide.description || "[Insert Prompt Description]"}
                    </p>

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
