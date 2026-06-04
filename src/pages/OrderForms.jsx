import React, { useState } from "react";
import { Download, FileText, Printer, Save } from "lucide-react";

const OrderForm = () => {
  // State for Buyer Info
  const [buyerInfo, setBuyerInfo] = useState({
    date: "",
    buyerName: "",
    streetAddress: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    officePhone: "",
    cellPhone: "",
    otherPhone: "",
    email: "",
    taxId: "",
    other: "",
    notes: "",
  });

  // State for Quantities (Keyed by SKU or Identifier)
  const [nonCfQuantities, setNonCfQuantities] = useState({});
  const [cfQuantities, setCfQuantities] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleQtyChange = (id, value, isCf = false) => {
    if (isCf) {
      setCfQuantities((prev) => ({ ...prev, [id]: value }));
    } else {
      setNonCfQuantities((prev) => ({ ...prev, [id]: value }));
    }
  };

  // Triggers the window print styled perfectly for standard Letter/A4 downloading
  const handleDownloadPDF = () => {
    window.print();
  };

  // Mock data representing the table structure in image_3f5e67.png
  const nonCfRows = [
    { label: "A - Mens", size: 5, nonPosted: "K-A-M-NP", posted: "K-A-M-P" },
    {
      label: "A - Womens",
      size: 6,
      nonPosted: "K-A-W-NP",
      posted: "K-A-W-P",
      isRed: true,
    },
    { label: "B - Mens", size: 6, nonPosted: "K-B-M-NP", posted: "K-B-M-P" },
    {
      label: "B - Womens",
      size: 7,
      nonPosted: "K-B-W-NP",
      posted: "K-B-W-P",
      isRed: true,
    },
    { label: "C - Mens", size: 7, nonPosted: "K-C-M-NP", posted: "K-C-M-P" },
    {
      label: "C- Womens",
      size: 8,
      nonPosted: "K-C-W-NP",
      posted: "K-C-W-P",
      isRed: true,
    },
    { label: "D - Mens", size: 8, nonPosted: "K-D-M-NP", posted: "K-D-M-P" },
    {
      label: "D - Womens",
      size: 9,
      nonPosted: "K-D-W-NP",
      posted: "K-D-W-P",
      isRed: true,
    },
    { label: "E - Mens", size: 9, nonPosted: "K-E-M-NP", posted: "K-E-M-P" },
    {
      label: "E - Womens",
      size: 10,
      nonPosted: "K-E-W-NP",
      posted: "K-E-W-P",
      isRed: true,
    },
    { label: "F - Mens", size: 10, nonPosted: "K-F-M-NP", posted: "K-F-M-P" },
    {
      label: "F - Womens",
      size: 11,
      nonPosted: "K-F-W-NP",
      posted: "K-F-W-P",
      isRed: true,
    },
  ];

  const cfRows = [
    { gender: "FEMALE", size: 5, prefab: "XS" },
    { gender: "FEMALE", size: 6, prefab: "XS" },
    { gender: "MALE", size: 6, prefab: "SM" },
    { gender: "MALE", size: 7, prefab: "SM" },
    { gender: "MALE", size: 8, prefab: "SM" },
    { gender: "MALE", size: 9, prefab: "M" },
    { gender: "MALE", size: 10, prefab: "M" },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-100 py-10 font-sans print:bg-white print:py-0">
      {/* Dynamic Action Toolbar (Hidden when downloading/printing) */}
      <div className="max-w-5xl mx-auto mb-6 px-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between print:hidden">
        <h2 className="text-slate-700 text-sm font-bold flex items-center gap-2">
          <FileText className="w-4 h-4" /> Form Customization Pipeline
        </h2>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadPDF}
            className="bg-[#FF5500] hover:bg-[#e04a00] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded flex items-center gap-2 shadow transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" /> Download filled PDF
          </button>
        </div>
      </div>

      {/* Main Form Sheet */}
      <div className="max-w-5xl mx-auto bg-white border border-slate-200 p-8 sm:p-12 shadow-md print:shadow-none print:border-none print:p-0">
        {/* Header Block: Title & Branding Placeholder */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b border-slate-200 pb-6 mb-8">
          <div>
            <h1 className="text-[#FF5500] text-3xl font-black italic tracking-tight">
              Kratos Insoles Order Form
            </h1>
            <p className="text-slate-500 text-xs font-medium mt-1">
              Digital Processing Portal
            </p>
          </div>

          {/* Logo Replacement Area */}
          <div className="border-2 border-dashed border-[#FF5500]/30 text-slate-600 rounded px-6 py-3 flex items-center gap-3 font-bold text-sm tracking-tight bg-[#FF5500]/5">
            <span className="text-[#FF5500] font-extrabold italic text-lg">
              KRATOS
            </span>
            <span className="text-xs font-medium uppercase text-slate-600">
              Carbon Insoles
            </span>
          </div>
        </div>

        {/* Dynamic Inner Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE: Order Configuration Tables (Takes 7 columns) */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            {/* Table 1: Non-CF Insoles */}
            <div className="overflow-x-auto rounded-md border border-slate-200">
              <div className="bg-slate-50 px-3 py-2 border-x border-t border-slate-300">
                <span className="text-[#FF5500] text-xs font-extrabold uppercase tracking-wider">
                  Non-CF Insole
                </span>
              </div>
              <table className="min-w-[720px] w-full text-left text-xs border border-collapse border-slate-300">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-300">
                    <th className="p-2 border-r border-slate-300 w-1/4">
                      Mens / Womens
                    </th>
                    <th className="p-2 border-r border-slate-300 text-center w-16">
                      Shoe Size
                    </th>
                    <th className="p-2 border-r border-slate-300 text-center w-16">
                      QTY
                    </th>
                    <th className="p-2 border-r border-slate-300 text-center">
                      Non-Posted SKU
                    </th>
                    <th className="p-2 text-center">Posted SKU</th>
                  </tr>
                </thead>
                <tbody>
                  {nonCfRows.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-200 hover:bg-slate-50/50"
                    >
                      <td className="p-2 border-r border-slate-300 font-semibold text-slate-800">
                        {row.label}
                      </td>
                      <td className="p-2 border-r border-slate-300 text-center font-bold text-slate-600">
                        {row.size}
                      </td>
                      <td className="p-1 border-r border-slate-300 text-center">
                        <input
                          type="number"
                          min="0"
                          onChange={(e) =>
                            handleQtyChange(row.nonPosted, e.target.value)
                          }
                          className="w-12 text-center border border-slate-300 rounded p-0.5 font-bold focus:border-[#FF5500] focus:outline-none print:border-none"
                        />
                      </td>
                      <td
                        className={`p-2 border-r border-slate-300 text-center font-bold font-mono text-[11px] ${row.isRed ? "text-red-500" : "text-slate-800"}`}
                      >
                        {row.nonPosted}
                      </td>
                      <td
                        className={`p-2 text-center font-bold font-mono text-[11px] ${row.isRed ? "text-red-500" : "text-slate-800"}`}
                      >
                        {row.posted}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table 2: Carbon Fiber Insoles */}
            <div className="overflow-x-auto rounded-md border border-slate-200">
              <div className="bg-slate-50 px-3 py-2 border-x border-t border-slate-300">
                <span className="text-[#FF5500] text-xs font-extrabold uppercase tracking-wider">
                  Carbon Fiber Insole
                </span>
              </div>
              <table className="min-w-[720px] w-full text-left text-xs border border-collapse border-slate-300">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-300">
                    <th className="p-2 border-r border-slate-300">
                      Male/Female
                    </th>
                    <th className="p-2 border-r border-slate-300 text-center w-16">
                      Shoe Size
                    </th>
                    <th className="p-2 border-r border-slate-300 text-center w-20">
                      Prefab Size
                    </th>
                    <th className="p-2 border-r border-slate-300 text-center">
                      Arch Degree (0°/10°/25°)
                    </th>
                    <th className="p-2 text-center w-16">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {cfRows.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-200 hover:bg-slate-50/50"
                    >
                      <td className="p-2 border-r border-slate-300 font-semibold text-slate-700">
                        {row.gender}
                      </td>
                      <td className="p-2 border-r border-slate-300 text-center font-bold text-slate-600">
                        {row.size}
                      </td>
                      <td className="p-2 border-r border-slate-300 text-center font-medium text-slate-500">
                        {row.prefab}
                      </td>
                      <td className="p-1 border-r border-slate-300 text-center">
                        <select className="text-xs bg-transparent border border-slate-300 rounded p-0.5 focus:outline-none focus:border-[#FF5500] print:border-none">
                          <option value="">Select...</option>
                          <option value="0">0°</option>
                          <option value="10">10°</option>
                          <option value="25">25°</option>
                        </select>
                      </td>
                      <td className="p-1 text-center">
                        <input
                          type="number"
                          min="0"
                          onChange={(e) =>
                            handleQtyChange(`cf-${index}`, e.target.value, true)
                          }
                          className="w-12 text-center border border-slate-300 rounded p-0.5 font-bold focus:border-[#FF5500] focus:outline-none print:border-none"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT SIDE: Shipping Data & Metadata Information (Takes 5 columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Metadata Fields Box */}
            <div className="border border-slate-300 rounded-xl p-5 bg-slate-50/50 flex flex-col space-y-3.5">
              {[
                { label: "Date", name: "date", type: "date" },
                { label: "Buyer Name", name: "buyerName" },
                { label: "Street Address", name: "streetAddress" },
                { label: "Address Line 2", name: "address2" },
                { label: "City", name: "city" },
              ].map((field) => (
                <div key={field.name} className="flex flex-col space-y-1">
                  <label className="text-slate-600 font-bold text-xs">
                    {field.label}
                  </label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={buyerInfo[field.name]}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-[#FF5500] print:border-b print:border-slate-400 print:rounded-none"
                  />
                </div>
              ))}

              {/* State & Zip Row */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="col-span-1 flex flex-col space-y-1">
                  <label className="text-slate-600 font-bold text-xs">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={buyerInfo.state}
                    onChange={handleInputChange}
                    className="bg-white border border-slate-300 rounded px-2 py-1.5 text-xs focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
                <div className="col-span-2 flex flex-col space-y-1">
                  <label className="text-slate-600 font-bold text-xs">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={buyerInfo.zip}
                    onChange={handleInputChange}
                    className="bg-white border border-slate-300 rounded px-2 py-1.5 text-xs focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              {/* Remaining Contact Fields */}
              {[
                "Office Phone #",
                "Cell Phone #",
                "Email Address",
                "Tax ID #",
              ].map((label) => {
                const key = label.toLowerCase().replace(/[^a-z]/g, "");
                return (
                  <div key={key} className="flex flex-col space-y-1">
                    <label className="text-slate-600 font-bold text-xs">
                      {label}
                    </label>
                    <input
                      type="text"
                      name={key}
                      onChange={handleInputChange}
                      className="bg-white border border-slate-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>
                );
              })}
            </div>

            {/* Notes Text Area */}
            <div className="flex flex-col space-y-1">
              <label className="text-slate-600 font-bold text-xs">
                Clinical / Manufacturing Notes
              </label>
              <textarea
                name="notes"
                rows={4}
                onChange={handleInputChange}
                placeholder="Enter additional specs or modifications here..."
                className="bg-white border border-slate-300 rounded p-3 text-xs text-slate-800 focus:outline-none focus:border-[#FF5500] resize-none"
              />
            </div>

            {/* Corporate Location Baseline Info Card */}
            <div className="text-center pt-4 border-t border-slate-200 text-slate-500 flex flex-col space-y-1">
              <p className="text-xs font-bold text-slate-800">
                Kratos Insoles Corporate HQ
              </p>
              <p className="text-[11px]">
                2300 West Park Place Blvd, Suite 158
              </p>
              <p className="text-[11px]">Stone Mtn, GA 30087</p>
              <p className="text-[11px] font-medium text-[#FF5500] pt-1">
                Voice: 800-922-5155 | Fax: 800-813-8139
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
