const VideoSection = () => {
  return (
    <section className="min-h-screen w-full bg-[#F9FAFB] py-20 px-6 sm:px-12 lg:px-16 font-sans flex flex-col items-center justify-center">
      
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF5500] block mb-3">
          See It In Action
        </span>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight text-[#0A1128] uppercase mb-4">
          Walk Cycle Dynamics
        </h2>
        <div className="w-12 h-[3px] bg-[#FF5500] mx-auto" />
      </div>

      {/* Video Embed */}
      <div className="w-full max-w-4xl border-2 border-[#030712] bg-[#030712] shadow-[8px_8px_0px_#FF5500] overflow-hidden">
        <iframe
          className="w-full aspect-video block border-none"
          src="https://www.youtube.com/embed/ztf1yzXClTE"
          title="Kratos Carbon Fiber Insole Walk Cycle Dynamics"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Caption */}
      <div className="flex items-center gap-3 mt-6 w-full max-w-4xl">
        <div className="w-1 h-9 bg-[#FF5500] flex-shrink-0" />
        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">
          <span className="text-[#0A1128] font-black">Kratos Carbon Fiber Insole</span> — Walk Cycle Dynamics · Presented by Mark Dentler
        </p>
      </div>

    </section>
  );
};

export default VideoSection;