const NonCFInsole = () => {
  const cards = [
    { image: "/nocf1.webp", label: "Product Flyer" },
    { image: "/nocf2.webp", label: "Pictures" },
    { image: "/nocf3.webp", label: "Other" },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-6 sm:px-12 lg:px-16 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Top Label */}
        <p className="text-center text-[10px] font-black uppercase tracking-[0.25em] text-[#0A1128] mb-10">
          Kratos Non-Carbon Arch Support Insole
        </p>

        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-black uppercase">
            Information
          </h2>
          <div className="w-10 h-[2px] bg-black mx-auto mt-4 mb-6" />
          <h3 className="text-xl sm:text-2xl font-semibold text-[#FF5500]">
            Kratos High Arch Support Insole
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="border-2 border-[#030712] overflow-hidden shadow-[4px_4px_0px_#FF5500] bg-white aspect-[4/3]">
                <img
                  src={card.image}
                  alt={card.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-[#FF5500]" />
                <p className="text-sm font-black uppercase tracking-widest text-[#0A1128]">
                  {card.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NonCFInsole;