import React from 'react';

const VideoShowcaseSection = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-16 font-poppins">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="text-[#1e293b] text-3xl sm:text-4xl font-black uppercase tracking-wide">
            Power In Every Step
          </h2>
          
          {/* Sharp Solid Accent Line */}
          <div className="h-[3px] w-16 bg-[#FF5500] mt-4 mb-4" />
          
          <p className="text-[#475569] text-base sm:text-lg italic font-medium">
            “Stronger Steps. Lighter Feel. Carbon Fiber Inside.”
          </p>
        </div>

        {/* Video Player Container */}
        <div className="w-full bg-black border-2 border-slate-950 rect-container">
          <video 
            className="w-full h-auto block aspect-video object-cover"
            controls
            preload="metadata"
            playsInline
          >
            <source src="/norton_video_kratos_test.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </section>
  );
};

export default VideoShowcaseSection;