// import React, { useState } from 'react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// const PhotoSliderSection = () => {
//   // Generate the sequence from /home1.webp to /home20.webp
//   const images = Array.from({ length: 20 }, (_, i) => `/home${i + 1}.webp`);
  
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <section className="w-full bg-white py-16 font-poppins border-t border-slate-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="text-center mb-12 flex flex-col items-center">
//           <h2 className="text-[#1e293b] text-2xl sm:text-3xl font-extrabold tracking-tight max-w-3xl leading-tight">
//             Capturing Kratos Insoles: A Visual Journey Through Our Company
//           </h2>
          
//           {/* Sharp Solid Accent Line */}
//           <div className="h-[3px] w-16 bg-[#FF5500] mt-4" />
//         </div>

//         {/* Slider Frame */}
//         <div className="relative flex items-center justify-center gap-4">
          
//           {/* Navigation - Left Button */}
//           <button
//             onClick={handlePrev}
//             className="p-3 bg-white border-2 border-slate-950 text-slate-950 hover:bg-slate-50 transition-colors duration-150 z-10 hidden sm:block cursor-pointer"
//             aria-label="Previous slide"
//           >
//             <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
//           </button>

//           {/* Core Image Canvas Container */}
//           <div className="w-full max-w-4xl bg-[#f8fafc] relative overflow-hidden aspect-[4/3] sm:aspect-[16/10]">
            
//             {/* Main Center Image */}
//             <img
//               src={images[currentIndex]}
//               alt={`Kratos gallery frame ${currentIndex + 1}`}
//               className="w-full h-full object-contain p-2"
//             />
//           </div>

//           {/* Navigation - Right Button */}
//           <button
//             onClick={handleNext}
//             className="p-3 bg-white border-2 border-slate-950 text-slate-950 hover:bg-slate-50 transition-colors duration-150 z-10 hidden sm:block cursor-pointer"
//             aria-label="Next slide"
//           >
//             <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
//           </button>
//         </div>

//         {/* Mobile Mobile Navigation Strip */}
//         <div className="flex items-center justify-center gap-6 mt-6 sm:hidden">
//           <button
//             onClick={handlePrev}
//             className="px-5 py-2.5 bg-white border-2 border-slate-950 text-slate-950 text-xs font-bold uppercase tracking-wider"
//           >
//             Prev
//           </button>
//           <button
//             onClick={handleNext}
//             className="px-5 py-2.5 bg-white border-2 border-slate-950 text-slate-950 text-xs font-bold uppercase tracking-wider"
//           >
//             Next
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PhotoSliderSection;

// import React, { useState } from 'react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// const PhotoSliderSection = () => {
//   const images = Array.from({ length: 20 }, (_, i) => `/home${i + 1}.webp`);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="w-full bg-white py-16 font-poppins border-t border-slate-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}
//         <div className="text-center mb-12 flex flex-col items-center">
//           <h2 className="text-[#1e293b] text-2xl sm:text-3xl font-extrabold tracking-tight max-w-3xl leading-tight">
//             Capturing Kratos Insoles: A Visual Journey Through Our Company
//           </h2>
//           <div className="h-[3px] w-16 bg-[#FF5500] mt-4" />
//         </div>

//         {/* Slider + Thumbnails */}
//         <div className="flex flex-col items-center gap-3">

//           {/* Main Slider Row */}
//           <div className="flex items-center justify-center gap-4 w-full">
//             <button
//               onClick={handlePrev}
//               className="p-3 bg-white border-2 border-slate-950 text-slate-950 hover:bg-slate-50 transition-colors duration-150 z-10 hidden sm:block cursor-pointer"
//               aria-label="Previous slide"
//             >
//               <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
//             </button>

//             <div className="w-full max-w-4xl bg-[#f8fafc] overflow-hidden aspect-[4/3] sm:aspect-[16/10]">
//               <img
//                 src={images[currentIndex]}
//                 alt={`Kratos gallery frame ${currentIndex + 1}`}
//                 className="w-full h-full object-contain p-2"
//               />
//             </div>

//             <button
//               onClick={handleNext}
//               className="p-3 bg-white border-2 border-slate-950 text-slate-950 hover:bg-slate-50 transition-colors duration-150 z-10 hidden sm:block cursor-pointer"
//               aria-label="Next slide"
//             >
//               <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
//             </button>
//           </div>

//           {/* Thumbnail Strip */}
//           {/* <div className="flex gap-2 overflow-x-auto w-full max-w-4xl pb-1"> */}
//           <div className="grid grid-cols-[repeat(20,1fr)] w-full max-w-4xl gap-1">
//             {images.map((img, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentIndex(idx)}
//                 className={`flex-shrink-0 w-14 h-14 border-2 transition-colors duration-150 cursor-pointer overflow-hidden ${
//                   idx === currentIndex
//                     ? 'border-[#FF5500]'
//                     : 'border-slate-200 hover:border-slate-400'
//                 }`}
//               >
//                 <img
//                   src={img}
//                   alt={`Thumbnail ${idx + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </button>
//             ))}
//           </div>

//         </div>

//         {/* Mobile Navigation */}
//         <div className="flex items-center justify-center gap-6 mt-6 sm:hidden">
//           <button
//             onClick={handlePrev}
//             className="px-5 py-2.5 bg-white border-2 border-slate-950 text-slate-950 text-xs font-bold uppercase tracking-wider"
//           >
//             Prev
//           </button>
//           <button
//             onClick={handleNext}
//             className="px-5 py-2.5 bg-white border-2 border-slate-950 text-slate-950 text-xs font-bold uppercase tracking-wider"
//           >
//             Next
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PhotoSliderSection;

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const PhotoSliderSection = () => {
  const images = Array.from({ length: 20 }, (_, i) => `/home${i + 1}.webp`);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-16 font-poppins border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-[#1e293b] text-2xl sm:text-3xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Capturing Kratos Insoles: A Visual Journey Through Our Company
          </h2>
          <div className="h-[3px] w-16 bg-[#FF5500] mt-4" />
        </div>

        <div className="flex flex-col items-center gap-3">

          <div className="flex items-center justify-center gap-4 w-full">
            <button
              onClick={handlePrev}
              className="p-3 bg-white border-2 border-slate-950 text-slate-950 hover:bg-slate-50 transition-colors duration-150 z-10 hidden sm:block cursor-pointer"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>

            <div className="w-full max-w-4xl bg-[#f8fafc] overflow-hidden aspect-[4/3] sm:aspect-[16/10]">
              <img
                src={images[currentIndex]}
                alt={`Kratos gallery frame ${currentIndex + 1}`}
                className="w-full h-full object-contain p-2"
              />
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-white border-2 border-slate-950 text-slate-950 hover:bg-slate-50 transition-colors duration-150 z-10 hidden sm:block cursor-pointer"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-[repeat(20,1fr)] w-full max-w-4xl gap-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`border-2 transition-colors duration-150 cursor-pointer overflow-hidden aspect-square ${
                  idx === currentIndex
                    ? 'border-[#FF5500]'
                    : 'border-slate-200 hover:border-slate-400'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>

        <div className="flex items-center justify-center gap-6 mt-6 sm:hidden">
          <button
            onClick={handlePrev}
            className="px-5 py-2.5 bg-white border-2 border-slate-950 text-slate-950 text-xs font-bold uppercase tracking-wider"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="px-5 py-2.5 bg-white border-2 border-slate-950 text-slate-950 text-xs font-bold uppercase tracking-wider"
          >
            Next
          </button>
        </div>

      </div>
    </section>
  );
};

export default PhotoSliderSection;