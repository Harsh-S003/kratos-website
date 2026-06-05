import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    product: "",
    purchaseDate: "",
    purchaseLocation: "",
    issueDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Warranty claim submitted. We'll be in touch shortly.");
  };

  const Field = ({ label, name, type = "text" }) => (
    <div className="flex flex-col gap-1">
      <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="border border-slate-300 rounded px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#FF5500] bg-white"
      />
    </div>
  );

  const SectionLabel = ({ step, title }) => (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-7 h-7 rounded-full bg-[#FF5500] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
        {step}
      </span>
      <h3 className="text-sm font-black uppercase tracking-widest text-[#0A1128]">
        {title}
      </h3>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );

  const products = [
    "Kratos Non-CF Arch Support Insole",
    "Kratos Carbon Fiber Insole",
  ];

  return (
    <div className="w-full min-h-screen bg-[#F9FAFB] py-20 px-4 sm:px-8 font-sans">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF5500]">
            Customer Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0A1128] uppercase mt-1">
            Warranty Claim
          </h1>
          <div className="w-12 h-[3px] bg-[#FF5500] mt-4" />
          <p className="text-xs text-slate-500 mt-4">
            Fill out the form below and our team will review your claim within 3–5 business days.
          </p>
        </div>

        <div className="flex flex-col gap-8">

          {/* Step 1 — Personal Info */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <SectionLabel step="1" title="Your Details" />
            <div className="flex flex-col gap-4">
              <Field label="Full Name" name="fullName" />
              <Field label="Email Address" name="email" type="email" />
              <Field label="Phone Number" name="phone" />
              <Field label="Street Address" name="streetAddress" />
              <Field label="City" name="city" />
              <div className="flex gap-3">
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="border border-slate-300 rounded px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#FF5500] bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">Zip Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="border border-slate-300 rounded px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#FF5500] bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 — Product Info */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <SectionLabel step="2" title="Product Details" />
            <div className="flex flex-col gap-4">

              {/* Product Select */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                  Product
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="border border-slate-300 rounded px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#FF5500] bg-white"
                >
                  <option value="">Select a product...</option>
                  {products.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Purchase Date */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                  Purchase Date
                </label>
                <input
                  type="text"
                  name="purchaseDate"
                  placeholder="MM/DD/YYYY"
                  maxLength={10}
                  value={formData.purchaseDate}
                  onChange={handleChange}
                  className="border border-slate-300 rounded px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#FF5500] bg-white"
                />
              </div>

              <Field label="Where did you purchase?" name="purchaseLocation" />
            </div>
          </div>

          {/* Step 3 — Issue */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <SectionLabel step="3" title="Describe the Issue" />
            <textarea
              name="issueDescription"
              rows={5}
              value={formData.issueDescription}
              onChange={handleChange}
              placeholder="Please describe the defect or issue in as much detail as possible..."
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#FF5500] resize-none bg-white"
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col items-center gap-2 pb-6">
            <button
              onClick={handleSubmit}
              className="bg-[#FF5500] hover:bg-[#e04a00] text-white font-black uppercase tracking-widest text-sm px-10 py-4 rounded shadow-lg transition-all"
            >
              Submit Warranty Claim
            </button>
            <p className="text-[11px] text-slate-400">
              We'll respond within 3–5 business days.
            </p>
          </div>

          {/* Footer Info */}
          <div className="text-center text-slate-400 text-[11px] pb-8 border-t border-slate-200 pt-6">
            <p className="font-bold text-slate-600">Kratos Insoles Corporate HQ</p>
            <p>2300 West Park Place Blvd, Suite 158 · Stone Mtn, GA 30087</p>
            <p className="text-[#FF5500] font-bold mt-1">800-922-5155 · Fax: 800-813-8139</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;