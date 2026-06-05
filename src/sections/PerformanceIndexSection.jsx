
const PerformanceIndexSection = () => {
  const metrics = [
    {
      category: "Stability",
      value: "22%",
      description: "Increased Midfoot Stability through reinforced lateral support.",
      highlighted: false
    },
    {
      category: "Support",
      value: "20%",
      description: "Boosted Vertical Support reducing arch fatigue during impact.",
      highlighted: false
    },
    {
      category: "Energy",
      value: "33%",
      description: "Enhanced Energy Transfer for explosive forward motion.",
      highlighted: true // This triggers the orange border seen in the image
    }
  ];

  return (
    // <section className="min-h-screen w-full bg-[#F9FAFB] py-20 px-6 sm:px-12 lg:px-16 font-sans">
    //   <div className="min-h-screen max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <section className="w-full bg-[#F9FAFB] py-16 px-6 sm:px-12 lg:px-16 font-sans">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ================= LEFT COLUMN: COPY & QUOTE ================= */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          {/* Top Small Tagline */}
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF5500] block">
            Independent Testing Confirmed
          </span>

          {/* Heading with aggressive condensed line-height */}
          <h2 className="text-3xl sm:text-4xl font-black leading-[0.95] tracking-tighter text-[#0A1128] uppercase">
            Kratos Carbon Fiber <br /> Increases Shoe <br /> Energy by 33%
          </h2>

          {/* Body Paragraph */}
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            Independent testing by Craig Norton, President of La Foot Plus, using his Optimal Performance Index System (OPIS), evaluated the Kratos Carbon Fiber Insole inside an ASICS Gel-Resolution X tennis shoe. The shoe was tested both in its original configuration and again with the Kratos Carbon Fiber Insole installed. The results were remarkable and measurable, showing increased midfoot stability by 22%, boosted vertical support by 20%, and enhanced energy transfer by an incredible 33%.
          </p>

          {/* Callout Quote Box */}
          <div className="border-l-4 border-[#FF5500] bg-slate-100/80 px-6 py-4 rounded-none mt-2">
            <p className="text-xs sm:text-sm font-semibold italic text-slate-700 tracking-wide">
              "We can energize any shoe by reinforcing the structural platform, delivering greater stability, stronger support, and more efficient energy return with every step."
            </p>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: DATA METRIC CARDS ================= */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:pl-6 w-full">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-[#030712] p-8 flex flex-col justify-between aspect-[3/4] rounded-none transition-transform duration-200 hover:-translate-y-1 ${
                metric.highlighted 
                  ? 'border-2 border-[#FF5500] shadow-lg shadow-orange-500/5' 
                  : 'border border-transparent'
              }`}
            >
              {/* Category Subtitle */}
              <span className={`text-[10px] font-black uppercase tracking-widest block ${
                metric.highlighted ? 'text-yellow-400' : 'text-[#FF5500]'
              }`}>
                {metric.category}
              </span>

              {/* Big Percentage Metric Display */}
              <div className="my-auto">
                <span className="text-5xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter block">
                  {metric.value}
                </span>
              </div>

              {/* Small Metric Context Description */}
              <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PerformanceIndexSection;