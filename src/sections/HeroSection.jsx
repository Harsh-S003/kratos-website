const HeroSection = () => {
  return (
    <section
      className="relative min-h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat flex items-center"
      // Replicates the sharp diagonal slice at the bottom of image_4e481f.png
      style={{ 
        backgroundImage: "url('/heroImage.png')",
        clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0% 100%)'
      }}
    >
      {/* High-contrast vignette gradient overlay focused on the text quadrant */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#050b18] via-[#050b18]/85 to-transparent z-10" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-16 text-white sm:px-10 lg:px-16 z-20 w-full">
        <div className="max-w-2xl space-y-6">
          
          {/* Top Tagline: Removed rounded-full pill and replaced with raw uppercase tracking */}
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF5500] block">
            KINETIC PERFORMANCE SYSTEM
          </span>

          {/* Title: Converted to tight-leading ultra-bold condensed text */}
          <h1 className="text-4xl font-black leading-[0.95] tracking-tighter text-white sm:text-5xl lg:text-6xl uppercase">
            Transform Your Shoes <br /> and feel the <span className="text-[#FF5500]">POWER</span>
          </h1>

          {/* Description Copy */}
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-slate-300">
            Increase your mobility and Energize Your Feet with professional-grade carbon fiber technology engineered for elite athletes.
          </p>

          {/* Buttons: Changed completely from rounded-full to sharp layout corners (rounded-none) */}
          <div className="flex flex-row gap-4 pt-2">
            <a
              href="#performance"
              className="inline-flex items-center justify-center rounded-none bg-[#FF5500] px-6 py-3.5 text-[11px] font-black uppercase tracking-widest text-white transition hover:bg-[#e04a00]"
            >
              Order Forms
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;