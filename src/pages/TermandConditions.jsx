const TermandConditions = () => {
  const sections = [
    {
      title: "Terms and Conditions",
      intro: "Your Terms and Conditions section is like a contract between you and your customers. You make information and services available to your customers, and your customers must follow your rules.",
      items: [
        "Withdraw and cancel services, and make financial transactions.",
        "Manage customer expectations, such as liability for information errors or website downtime.",
        "Explain your copyright rules, such as attribution, adaptation, commercial or non-commercial use, etc.",
        "Set rules for user behavior, like forbidding unlawful behavior, hate speech, bullying, promotions, spam, etc.",
        "Disable user accounts.",
        "Write down any other terms or conditions that protect you or your audience.",
      ],
    },
    {
      title: "Return and Refund Policy",
      intro: "This is a place to describe your Return and Refund Policy to buyers.",
      items: [
        "Terms of return (i.e. number of days)",
        "State of return (e.g. unworn)",
        "Reason for return (e.g. damaged or wrong product)",
        "Process for return (i.e. how to initiate a return, how to contact customer service)",
        "Process of refund (i.e. terms of refund, duration, payment details)",
        "Contact details",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-6 sm:px-12 lg:px-16 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF5500] block mb-2">
            Legal
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0A1128] uppercase">
            Policies
          </h2>
          <div className="w-12 h-[3px] bg-[#FF5500] mt-4" />
        </div>

        {/* Policy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col gap-6"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#FF5500] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </span>
                <h3 className="text-sm font-black uppercase tracking-widest text-[#0A1128]">
                  {section.title}
                </h3>
              </div>

              {/* Intro */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {section.intro}
              </p>

              {/* Items */}
              <ul className="flex flex-col gap-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF5500] flex-shrink-0" />
                    <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TermandConditions;;