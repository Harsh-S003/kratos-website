const VideoGallerySection = () => {
  const videos = [
    {
      src: "/kratos-video1.mp4",
      label: "Energize your Shoes!",
      highlighted: false,
    },
    {
      src: "/kratos-video2.mp4",
      label: "Energize your Shoes!",
      highlighted: true,
    },
  ];

  return (
    <section className="min-h-screen w-full bg-[#F9FAFB] py-20 px-6 sm:px-12 lg:px-16 font-sans flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF5500] block mb-3">
          See It In Action
        </span>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight text-[#0A1128] uppercase mb-4">
          Energize Your Shoes
        </h2>
        <div className="w-12 h-[3px] bg-[#FF5500] mx-auto" />
      </div>

      {/* Video Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col gap-4">
            {/* Video Card */}
            <div
              className={`bg-[#030712] overflow-hidden ${
                video.highlighted
                  ? "border-2 border-[#FF5500] shadow-lg shadow-orange-500/10"
                  : "border border-[#030712]"
              }`}
            >
              <video
                className="w-full aspect-video object-cover block"
                controls
                preload="metadata"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallerySection;
