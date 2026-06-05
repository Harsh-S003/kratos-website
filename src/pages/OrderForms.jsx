import React, { useState } from "react";
import { Download } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const OrderForm = () => {
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
    email: "",
    taxId: "",
    notes: "",
  });

  const [nonCfQuantities, setNonCfQuantities] = useState({});
  const [cfQuantities, setCfQuantities] = useState({});
  const [archDegree, setArchDegree] = useState("");
  const [orderDate, setOrderDate] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const stepQty = (id, delta, isCf = false) => {
    if (isCf) {
      setCfQuantities((prev) => ({
        ...prev,
        [id]: Math.max(0, (prev[id] || 0) + delta),
      }));
    } else {
      setNonCfQuantities((prev) => ({
        ...prev,
        [id]: Math.max(0, (prev[id] || 0) + delta),
      }));
    }
  };

  const nonCfRows = [
    { label: "A — Mens", size: 5, id: "K-A-M" },
    { label: "A — Womens", size: 6, id: "K-A-W" },
    { label: "B — Mens", size: 6, id: "K-B-M" },
    { label: "B — Womens", size: 7, id: "K-B-W" },
    { label: "C — Mens", size: 7, id: "K-C-M" },
    { label: "C — Womens", size: 8, id: "K-C-W" },
    { label: "D — Mens", size: 8, id: "K-D-M" },
    { label: "D — Womens", size: 9, id: "K-D-W" },
    { label: "E — Mens", size: 9, id: "K-E-M" },
    { label: "E — Womens", size: 10, id: "K-E-W" },
    { label: "F — Mens", size: 10, id: "K-F-M" },
    { label: "F — Womens", size: 11, id: "K-F-W" },
  ];

  const cfRows = [
    { gender: "Female", size: 5, prefab: "XS", id: "cf-0" },
    { gender: "Female", size: 6, prefab: "XS", id: "cf-1" },
    { gender: "Male", size: 6, prefab: "SM", id: "cf-2" },
    { gender: "Male", size: 7, prefab: "SM", id: "cf-3" },
    { gender: "Male", size: 8, prefab: "SM", id: "cf-4" },
    { gender: "Male", size: 9, prefab: "M", id: "cf-5" },
    { gender: "Male", size: 10, prefab: "M", id: "cf-6" },
  ];

  const QtyControl = ({ id, isCf }) => {
    const qty = isCf ? cfQuantities[id] || 0 : nonCfQuantities[id] || 0;
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => stepQty(id, -1, isCf)}
          className="w-7 h-7 rounded bg-slate-200 hover:bg-slate-300 font-bold text-slate-700 text-sm flex items-center justify-center"
        >
          −
        </button>
        <span className="w-6 text-center font-bold text-sm text-slate-800">
          {qty}
        </span>
        <button
          onClick={() => stepQty(id, 1, isCf)}
          className="w-7 h-7 rounded bg-[#FF5500] hover:bg-[#e04a00] font-bold text-white text-sm flex items-center justify-center"
        >
          +
        </button>
      </div>
    );
  };

  const Field = ({ label, name, type = "text", half = false }) => (
    <div
      className={half ? "flex flex-col gap-1 w-full" : "flex flex-col gap-1"}
    >
      <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={buyerInfo[name]}
        onChange={handleInputChange}
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

  return (
    <div className="w-full min-h-screen bg-[#F9FAFB] py-12 px-4 sm:px-8 font-sans print:bg-white print:py-0">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF5500]">
            Wholesale Order
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0A1128] uppercase mt-1">
            Kratos Insoles
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Fill out all sections below and download your completed form.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {/* Step 1 — Buyer Info */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <SectionLabel step="1" title="Your Details" />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                  Date
                </label>
                <DatePicker
                  selected={orderDate}
                  onChange={(date) => setOrderDate(date)}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="MM/DD/YYYY"
                  className="w-full border border-slate-300 rounded px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#FF5500] bg-white"
                />
              </div>
              <Field label="Full Name" name="buyerName" />
              <Field label="Street Address" name="streetAddress" />
              <Field
                label="Address Line 2 (Suite, Unit, etc.)"
                name="address2"
              />
              <Field label="City" name="city" />
              <div className="flex gap-3">
                <Field label="State" name="state" half />
                <Field label="Zip Code" name="zip" half />
              </div>
              <Field label="Office Phone" name="officePhone" />
              <Field label="Cell Phone" name="cellPhone" />
              <Field label="Email Address" name="email" />
              <Field label="Tax ID #" name="taxId" />
            </div>
          </div>

          {/* Step 2 — Non-CF Insoles */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <SectionLabel
              step="2"
              title="Standard Insoles (Non-Carbon Fiber)"
            />
            <p className="text-xs text-slate-500 mb-5">
              Select quantity per size. Leave at 0 to skip.
            </p>
            <div className="divide-y divide-slate-100">
              {nonCfRows.map((row) => (
                <div
                  key={row.id}
                  className="flex items-center justify-between py-3"
                >
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      {row.label}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Shoe Size {row.size}
                    </p>
                  </div>
                  <QtyControl id={row.id} isCf={false} />
                </div>
              ))}
            </div>
          </div>

          {/* Step 3 — CF Insoles */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <SectionLabel step="3" title="Carbon Fiber Insoles" />

            {/* Arch Degree — single global selection */}
            <div className="mb-6">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 block mb-2">
                Arch Degree (applies to all CF insoles)
              </label>
              <div className="flex gap-3">
                {["0°", "10°", "25°"].map((deg) => (
                  <button
                    key={deg}
                    onClick={() => setArchDegree(deg)}
                    className={`px-5 py-2 rounded text-sm font-black border transition-all ${
                      archDegree === deg
                        ? "bg-[#FF5500] border-[#FF5500] text-white"
                        : "bg-white border-slate-300 text-slate-600 hover:border-[#FF5500]"
                    }`}
                  >
                    {deg}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-5">
              Select quantity per size.
            </p>
            <div className="divide-y divide-slate-100">
              {cfRows.map((row) => (
                <div
                  key={row.id}
                  className="flex items-center justify-between py-3"
                >
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      {row.gender} — Size {row.size}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Prefab: {row.prefab}
                    </p>
                  </div>
                  <QtyControl id={row.id} isCf={true} />
                </div>
              ))}
            </div>
          </div>

          {/* Step 4 — Notes */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <SectionLabel step="4" title="Notes" />
            <textarea
              name="notes"
              rows={4}
              value={buyerInfo.notes}
              onChange={handleInputChange}
              placeholder="Any special instructions, modifications, or clinical notes..."
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#FF5500] resize-none"
            />
          </div>

          {/* Download */}
          <div className="flex flex-col items-center gap-2 pb-6 print:hidden">
            <button
              onClick={() => window.print()}
              className="bg-[#FF5500] hover:bg-[#e04a00] text-white font-black uppercase tracking-widest text-sm px-10 py-4 rounded flex items-center gap-3 shadow-lg transition-all"
            >
              <Download className="w-4 h-4" /> Download Completed Form
            </button>
            <p className="text-[11px] text-slate-400">
              Opens print dialog — save as PDF
            </p>
          </div>

          {/* Footer */}
          <div className="text-center text-slate-400 text-[11px] pb-8 border-t border-slate-200 pt-6">
            <p className="font-bold text-slate-600">
              Kratos Insoles Corporate HQ
            </p>
            <p>2300 West Park Place Blvd, Suite 158 · Stone Mtn, GA 30087</p>
            <p className="text-[#FF5500] font-bold mt-1">
              800-922-5155 · Fax: 800-813-8139
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
