"use client";

import React, { useState } from "react";

const BookingForm = () => {
  const initialForm = {
    name: "",
    phone: "",
    rawPhone: "",
    service: "Signature Facial",
    customService: "",
    date: "",
    hour: "",
    minute: "",
    period: "",
    notes: "",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<any>({});

  const today = new Date().toISOString().split("T")[0];

  // PHONE FORMAT
  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 10);

    let formatted = "+91";
    if (cleaned.length > 0) formatted += " " + cleaned.slice(0, 5);
    if (cleaned.length > 5) formatted += " " + cleaned.slice(5);

    return { formatted, cleaned };
  };

  const handlePhoneChange = (e: any) => {
    const { formatted, cleaned } = formatPhone(e.target.value);

    setForm({
      ...form,
      phone: formatted,
      rawPhone: cleaned,
    });

    setErrors((prev: any) => ({ ...prev, phone: "" }));
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev: any) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    let newErrors: any = {};
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!form.name.trim()) newErrors.name = "Required";
    if (!phoneRegex.test(form.rawPhone)) newErrors.phone = "Invalid";
    if (!form.date) newErrors.date = "Required";
    if (!form.hour || !form.minute || !form.period)
      newErrors.time = "Select time";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const service =
      form.service === "Other" ? form.customService : form.service;

    const time = `${form.hour}:${form.minute} ${form.period}`;

    const message = `
Morocco Nature Booking

Name: ${form.name}
Phone: +91 ${form.rawPhone}

Service: ${service}
Date: ${form.date}
Time: ${time}

Notes: ${form.notes || "None"}
`;

    const encoded = encodeURIComponent(message);

    window.open(
      `https://api.whatsapp.com/send?phone=919961667296&text=${encoded}`,
      "_blank"
    );

    setForm(initialForm);
    setErrors({});
  };

  return (
    <section id="booking" className="py-28 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-4">Book Appointment</h2>
          <div className="w-16 h-[2px] bg-primary mx-auto opacity-40"></div>
        </div>

        <div className="bg-white p-10 md:p-14 rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.08)] border border-black/5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* NAME */}
            <div>
              <label className="label">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="input"
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            {/* PHONE */}
            <div>
              <label className="label">Phone Number</label>
              <input
                value={form.phone}
                onChange={handlePhoneChange}
                placeholder="+91 98765 43210"
                className="input"
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            {/* SERVICE */}
            <div>
              <label className="label">Service</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="input"
              >
                <option>Signature Facial</option>
                <option>Bridal Consultation</option>
                <option>Hair Styling</option>
                <option>Glow Therapy</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* DATE */}
            <div>
              <label className="label">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                min={today}
                onChange={handleChange}
                className="input"
              />
              {errors.date && <p className="error">{errors.date}</p>}
            </div>

            {/* TIME */}
            <div className="md:col-span-2">
              <label className="label">Time</label>

              <div className="flex items-center gap-3 mt-2">

                <select
                  value={form.hour}
                  onChange={(e) =>
                    setForm({ ...form, hour: e.target.value })
                  }
                  className="input w-24 text-center"
                >
                  <option value="">HH</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1}>{i + 1}</option>
                  ))}
                </select>

                <span className="text-lg opacity-50">:</span>

                <select
                  value={form.minute}
                  onChange={(e) =>
                    setForm({ ...form, minute: e.target.value })
                  }
                  className="input w-24 text-center"
                >
                  <option value="">MM</option>
                  {[...Array(60)].map((_, i) => (
                    <option key={i}>
                      {i.toString().padStart(2, "0")}
                    </option>
                  ))}
                </select>

                <div className="flex bg-[#f5f3ee] rounded-full p-1 ml-2">

                  <button
                    type="button"
                    onClick={() =>
                      setForm({ ...form, period: "AM" })
                    }
                    className={`px-4 py-2 rounded-full text-xs font-bold ${form.period === "AM"
                        ? "bg-primary text-white"
                        : "text-gray-500"
                      }`}
                  >
                    AM
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setForm({ ...form, period: "PM" })
                    }
                    className={`px-4 py-2 rounded-full text-xs font-bold ${form.period === "PM"
                        ? "bg-primary text-white"
                        : "text-gray-500"
                      }`}
                  >
                    PM
                  </button>

                </div>

              </div>

              {errors.time && <p className="error mt-2">{errors.time}</p>}
            </div>

            {/* NOTES */}
            <div className="md:col-span-2">
              <label className="label">Notes</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                className="input"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              className="md:col-span-2 btn-gold py-5 rounded-full font-bold tracking-widest uppercase text-sm"
            >
              Confirm Reservation
            </button>

          </div>
        </div>
      </div>

      <style jsx>{`
        .label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #777;
        }

        .input {
          width: 100%;
          padding: 16px;
          border-radius: 12px;
          background: #f8f6f2;
          outline: none;
          margin-top: 6px;
          transition: all 0.2s ease;
        }

        .input:focus {
          box-shadow: 0 0 0 2px #c9a24a;
          background: white;
        }

        .error {
          color: red;
          font-size: 12px;
          margin-top: 4px;
        }
      `}</style>
    </section>
  );
};

export default BookingForm;