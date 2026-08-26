import { ArrowRight } from 'lucide-react'

export default function Profile() {
  const handleClick = () => {
    alert('page');
  };

  return (
    <div className="flex flex-col items-center bg-[#f0e68c] min-h-screen w-full relative p-6">
      
      {/* Centered Profile Card Wrapper */}
      <div className="flex flex-col items-center justify-center border border-amber-300 rounded-2xl w-full max-w-6xl p-6 md:p-12 bg-amber-400/30 shadow-lg backdrop-blur-2xl">
        
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full">

          {/* Left Column: Profile Picture */}
          <div className="flex justify-center md:sticky top-6">
            <div className="bg-amber-700/20 border border-amber-300 rounded-2xl p-4 flex items-center justify-center w-full max-w-[350px] aspect-[4/3]">
              <img
                src="" // Add your profile image path here
                alt="Profile"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Right Column: Bio Data Cards */}
          <div className="flex flex-col gap-6 w-full">

            <div className="flex items-center justify-center p-4 bg-amber-400/60 shadow-lg border border-amber-200 rounded-2xl hover:bg-amber-500/40 transition-colors w-full">
              <h1 className="font-frank font-extrabold text-xl md:text-2xl uppercase text-center text-amber-950">
                Name: Frank Kator
              </h1>
            </div>

            <div className="flex items-center justify-center p-4 bg-amber-400/60 shadow-lg border border-amber-200 rounded-2xl hover:bg-amber-500/40 transition-colors w-full">
              <h1 className="font-frank font-extrabold text-xl md:text-2xl uppercase text-center text-amber-950">
                University attended: Nile University of Nigeria
              </h1>
            </div>

            <div className="flex items-center justify-center p-4 bg-amber-400/60 shadow-lg border border-amber-200 rounded-2xl hover:bg-amber-500/40 transition-colors w-full">
              <h1 className="font-frank font-extrabold text-xl md:text-2xl uppercase text-center text-amber-950">
                internships worked in: Nigerian Communications Satellite (NIGCOMSAT)
              </h1>
            </div>

            <div className="flex items-center justify-center p-4 bg-amber-400/60 shadow-lg border border-amber-200 rounded-2xl hover:bg-amber-500/40 transition-colors w-full">
              <h1 className="font-frank font-extrabold text-xl md:text-2xl uppercase text-center text-amber-950">
                Programming languages learnt: C, JavaScript (JSX), TypeScript (TSX), Java, Python  
              </h1>
            </div>

          </div>

        </div>

        {/* Action Buttons (Correctly nested inside the responsive grid flex flow) */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 w-full max-w-xl">
          <button 
            className="flex items-center justify-center gap-3 w-full sm:w-auto border border-amber-200 bg-amber-900 hover:bg-amber-700 text-amber-50 rounded-2xl px-6 py-4 cursor-pointer transition-colors shadow-lg group" 
            onClick={handleClick}
          >
            <span className="font-frank font-bold text-amber-300">
              Experience Gained
            </span>
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </button>

          <button 
            className="flex items-center justify-center gap-3 w-full sm:w-auto border border-amber-200 bg-amber-900 hover:bg-amber-700 text-amber-50 rounded-2xl px-6 py-4 cursor-pointer transition-colors shadow-lg group" 
            onClick={handleClick}
          >
            <span className="font-frank font-bold text-amber-300">
              Contact
            </span>
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
