import React from "react";
// Lucide icons perfectly filling out the athletic discipline symbols
import { Circle, Trophy, Activity, Dumbbell } from "lucide-react";

const Insoles = () => {
  return (
    <section className="w-full min-h-screen bg-[#F9FAFB] py-20 px-6 sm:px-12 lg:px-16 font-sans flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mb-16 space-y-3">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF5500] block">
            Our Mission
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0A1128] uppercase leading-[0.95]">
            About Kratos Insoles
          </h2>
         
        </div>

        {/* ================= CONTENT GRID CONTAINER ================= */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT CARD: SUPERIOR ALIGNMENT */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col sm:flex-row items-center gap-8 rounded-none">
            {/* Foot Image Wrapper */}
            <div className="w-full sm:w-1/2 flex justify-center items-center">
              <img
                src="/about.png" // Assumes your image name inside public folder
                alt="Foot alignment skeletal structural view"
                className="max-w-full h-auto object-contain"
              />
            </div>

            {/* Description Text Column */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-black tracking-tighter text-[#0A1128] uppercase leading-none">
                Superior Alignment
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                At Kratos Insoles, our mission is to provide unparalleled
                comfort and support through innovative insole technology. We
                strive to enhance the well-being of our customers by offering
                products that improve posture and reduce foot pain.
              </p>
            </div>
          </div>

          {/* RIGHT CARD: CLIENTS & ATHLETES */}
          <div className="lg:col-span-4 bg-[#0A1128] p-8 flex flex-col justify-between shadow-2xl shadow-blue-950/10 rounded-none text-white min-h-[280px]">
            {/* Card Title */}
            <h3 className="text-2xl font-black tracking-tighter uppercase text-white">
              Clients & Athletes
            </h3>

            {/* Discipline Icons Array */}
            <div className="flex items-center gap-5 my-auto text-gray-400">
              <div className="hover:text-[#FF5500] transition-colors duration-200 cursor-pointer">
                <Circle size={24} strokeWidth={1.5} />
              </div>
              <div className="hover:text-[#FF5500] transition-colors duration-200 cursor-pointer">
                <Trophy size={24} strokeWidth={1.5} />
              </div>
              <div className="hover:text-[#FF5500] transition-colors duration-200 cursor-pointer">
                <Activity size={24} strokeWidth={1.5} />
              </div>
              <div className="hover:text-[#FF5500] transition-colors duration-200 cursor-pointer">
                <Dumbbell size={24} strokeWidth={1.5} />
              </div>
            </div>

            {/* Disclaimer baseline footer typography */}
            <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase leading-relaxed">
              Trusted by professionals across all disciplines
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insoles;
