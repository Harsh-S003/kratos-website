import { FaFilePdf, FaArrowDown } from "react-icons/fa6";

const TechnicalData = () => {
  // Mapping the precise filenames and display names from image_b696dd.png and image_b68c1a.png
  const documents = [
    {
      id: 1,
      displayName: "carbon_fiber_insole_study (pdf)",
      fileName: "carbon_fiber_insole_study.pdf",
    },
    {
      id: 2,
      displayName: "carbon_fiber_insole_study_SIMS-THESIS-2021 (pdf)",
      fileName: "carbon_fiber_insole_study_SIMS-THESIS-2021.pdf",
    },
    {
      id: 3,
      displayName: "Carbon fiber insoles enhance performance perception (pdf)",
      fileName: "Carbon fiber insoles enhance performance perce.pdf", // Truncated to match your OS file system naming exactly
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-20 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-[#1e293b] text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Technical Data
          </h2>
          {/* High-Contrast Sharp Divider Line */}
          
        </div>

        {/* Document Grid System */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white  p-8 flex flex-col justify-between items-center text-center min-h-[280px] transition-colors duration-150 hover:bg-slate-50/50"
            >
              {/* Document Icon & File Identification Text */}
              <div className="flex flex-col items-center space-y-4 w-full">
                <div className="text-red-600 bg-red-50 p-3 border border-red-200">
                  <FaFilePdf className="w-8 h-8" />
                </div>
                <p className="text-slate-800 text-sm font-semibold leading-relaxed break-words max-w-xs px-2">
                  {doc.displayName}
                </p>
              </div>

              {/* Download Trigger Action */}
              <a
                href={`/${doc.fileName}`}
                download={doc.fileName}
                className="w-full bg-[#ff5511] hover:bg-[#e04400] text-white text-xs font-black uppercase tracking-widest py-4 px-6 flex items-center justify-center space-x-2 transition-colors duration-150 cursor-pointer"
              >
                <span>Download</span>
                <FaArrowDown className="w-3.5 h-3.5 text-white animate-pulse" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalData;
