const ProductfeatureSection = () => {
  return (
    <section className="min-h-screen w-full bg-[#030712] py-20 px-6 sm:px-12 lg:px-16 font-sans text-white">
      <div className="min-h-screen max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ================= LEFT COLUMN: PRODUCT IMAGE CARD ================= */}
        <div className="lg:col-span-6 w-full flex justify-center">
          <div className="bg-white p-6 sm:p-10 w-full aspect-[4/3] max-w-xl flex items-center justify-center rounded-sm overflow-hidden shadow-2xl">
            <img
              src="/productfeature.png" // Pointing to your public folder asset
              alt="Kratos Carbon Fiber Insoles"
              className="max-h-full max-w-full object-contain object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* ================= RIGHT COLUMN: TECHNICAL TEXT & TABS ================= */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          {/* Section Heading */}
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase leading-[0.95] text-white">
            Power In Every Step
          </h2>

          {/* Subheading with Highlighted Text */}
          <p className="text-sm sm:text-base font-bold tracking-wide text-gray-300">
            Simply put—
            <span className="text-[#FF5500]">WE CAN ENERGIZE ANY SHOE.</span>
          </p>

          {/* Core Body Paragraph */}
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal max-w-xl">
            By reinforcing the structural platform of the shoe, Kratos helps
            deliver greater stability, stronger support, and more efficient
            energy return. The result is a shoe that feels more responsive and
            more powerful—whether competing on the court or moving through
            everyday life.
          </p>

          {/* White Tech Specs Action Button */}
          <div className="pt-2">
            <a
              href="#technical-specs"
              className="inline-flex items-center justify-center rounded-none bg-white text-black hover:bg-gray-200 text-xs font-black tracking-widest uppercase px-10 py-3.5 transition-colors duration-200 shadow-md"
            >
              View Technical Specs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductfeatureSection;
