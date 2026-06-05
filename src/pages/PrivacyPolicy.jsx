const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, such as your name, email address, phone number, shipping address, and payment information when you place an order or contact us. We may also collect information automatically when you visit our website, including your IP address, browser type, and browsing behavior.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect to process and fulfill your orders, communicate with you about your orders, send you marketing communications (with your consent), improve our website and services, comply with legal obligations, and prevent fraudulent transactions.",
    },
    {
      title: "Sharing Your Information",
      content:
        "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential. We may also disclose your information when required by law.",
    },
    {
      title: "Cookies",
      content:
        "Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us recognize you on return visits and understand how you use our site. You may disable cookies through your browser settings, though this may affect certain features of our website.",
    },
    {
      title: "Data Security",
      content:
        "We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
    },
    {
      title: "Data Retention",
      content:
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.",
    },
    {
      title: "Your Rights",
      content:
        "You have the right to access, correct, or delete your personal information at any time. You may also opt out of marketing communications by clicking the unsubscribe link in any email we send. To exercise any of these rights, please contact us at the details below.",
    },
    {
      title: "Third-Party Links",
      content:
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.",
    },
    {
      title: "Children's Privacy",
      content:
        "Our website and products are not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.",
    },
    {
      title: "Changes to This Policy",
      content:
        "We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. Your continued use of our website following any changes constitutes your acceptance of the revised policy.",
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions or concerns about this Privacy Policy, please contact us at: Kratos Performance Systems, 2300 West Park Place Blvd, Suite 158, Stone Mtn, GA 30087. Phone: 800-922-5155 | Fax: 800-813-8139.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F9FAFB] py-20 px-6 sm:px-12 lg:px-16 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF5500] block mb-2">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0A1128] uppercase">
            Privacy Policy
          </h1>
          <div className="w-12 h-[3px] bg-[#FF5500] mt-4 mb-6" />
          <p className="text-sm text-slate-500">Effective Date: January 1, 2026</p>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Kratos Performance Systems ("we," "us," or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or purchase our products.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#FF5500] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </span>
                <h2 className="text-sm font-black uppercase tracking-widest text-[#0A1128]">
                  {section.title}
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;