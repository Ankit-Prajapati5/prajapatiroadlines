"use client";

import { useState, useRef } from "react";
import { buildWhatsAppUrl, buildEnquiryMessage } from "@/lib/whatsapp";
import { BUSINESS, WHATSAPP_URL } from "@/lib/constants";

interface FormData {
  name: string;
  phone: string;
  company: string;
  pickup: string;
  destination: string;
  cargo: string;
  load: string;
  vehicle: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  pickup?: string;
  destination?: string;
  cargo?: string;
}

const INITIAL: FormData = {
  name: "", phone: "", company: "", pickup: "",
  destination: "", cargo: "", load: "", vehicle: "", message: "",
};

function validateIndianPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\+]/g, "").replace(/^91/, "").slice(-10);
  return /^[6-9]\d{9}$/.test(cleaned);
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): boolean {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!validateIndianPhone(form.phone)) errs.phone = "Enter a valid Indian phone number";
    if (!form.pickup.trim()) errs.pickup = "Please enter pickup location";
    if (!form.destination.trim()) errs.destination = "Please enter destination";
    if (!form.cargo.trim()) errs.cargo = "Please describe the cargo";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting || !validate()) return;
    setSubmitting(true);
    const msg = buildEnquiryMessage(form);
    const url = buildWhatsAppUrl(msg);
    setSuccess(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setSubmitting(false);
    }, 700);
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 border rounded bg-[#FAFAFA] text-[#0b0d0f] text-[0.9rem]
    font-[family-name:var(--font-jakarta)] outline-none transition-colors duration-200
    ${errors[field] ? "border-[#b82025]" : "border-[#e8e6e1] focus:border-[#0b0d0f]"}`;

  return (
    <section id="quote" className="py-24 px-6 md:px-16 lg:px-20 bg-[#f7f5f0]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left col — info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-[2px] bg-[#b82025]" aria-hidden="true" />
            <span className="text-[#b82025] text-[0.7rem] font-bold tracking-[0.18em] uppercase">
              Transport Enquiry
            </span>
          </div>
          <h2
            className="font-extrabold leading-[1.1] tracking-tight text-[#0b0d0f] mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            HAVE CARGO<br />TO MOVE?
          </h2>
          <p className="text-[0.97rem] text-[#555] leading-[1.75]">
            Fill in your requirements and we&apos;ll get back to you with
            available transport options. You can also reach us directly on
            WhatsApp or phone.
          </p>

          {/* Direct CTAs */}
          <div className="flex flex-col gap-3 mt-7">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3.5 bg-white border border-[#25D366]
                rounded text-[#25D366] text-[0.85rem] font-semibold
                hover:bg-[#f0fdf4] transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp: {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.phoneTel}
              className="flex items-center gap-3 px-5 py-3.5 bg-white border border-[#b82025]
                rounded text-[#b82025] text-[0.85rem] font-semibold
                hover:bg-[#fff0f0] transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
              Call: {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Right col — form */}
        <div>
          {success ? (
            <div className="p-6 bg-[#f0fdf4] border border-[#bbf7d0] rounded text-center">
              <p className="text-[#166534] font-bold text-lg">Opening WhatsApp with your enquiry...</p>
              <p className="text-[#166534] text-sm mt-2 opacity-75">
                If WhatsApp doesn&apos;t open, call us at {BUSINESS.phoneDisplay}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="f-name" className="text-[0.73rem] font-bold tracking-[0.05em] uppercase text-[#444]">
                    Name *
                  </label>
                  <input suppressHydrationWarning id="f-name" name="name" type="text" value={form.name}
                    onChange={handleChange} placeholder="Your full name"
                    autoComplete="name" className={inputClass("name")} />
                  {errors.name && <span className="text-[0.72rem] text-[#b82025]">{errors.name}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="f-phone" className="text-[0.73rem] font-bold tracking-[0.05em] uppercase text-[#444]">
                    Phone *
                  </label>
                  <input suppressHydrationWarning id="f-phone" name="phone" type="tel" value={form.phone}
                    onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                    autoComplete="tel" className={inputClass("phone")} />
                  {errors.phone && <span className="text-[0.72rem] text-[#b82025]">{errors.phone}</span>}
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="f-company" className="text-[0.73rem] font-bold tracking-[0.05em] uppercase text-[#444]">
                  Company Name
                </label>
                <input suppressHydrationWarning id="f-company" name="company" type="text" value={form.company}
                  onChange={handleChange} placeholder="Your company (optional)"
                  autoComplete="organization"
                  className="w-full px-4 py-3 border border-[#e8e6e1] focus:border-[#0b0d0f]
                    rounded bg-[#FAFAFA] text-[0.9rem] outline-none transition-colors duration-200" />
              </div>

              {/* Pickup + Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="f-pickup" className="text-[0.73rem] font-bold tracking-[0.05em] uppercase text-[#444]">
                    Pickup Location *
                  </label>
                  <input suppressHydrationWarning id="f-pickup" name="pickup" type="text" value={form.pickup}
                    onChange={handleChange} placeholder="City / Area"
                    className={inputClass("pickup")} />
                  {errors.pickup && <span className="text-[0.72rem] text-[#b82025]">{errors.pickup}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="f-dest" className="text-[0.73rem] font-bold tracking-[0.05em] uppercase text-[#444]">
                    Destination *
                  </label>
                  <input suppressHydrationWarning id="f-dest" name="destination" type="text" value={form.destination}
                    onChange={handleChange} placeholder="City / Area"
                    className={inputClass("destination")} />
                  {errors.destination && <span className="text-[0.72rem] text-[#b82025]">{errors.destination}</span>}
                </div>
              </div>

              {/* Cargo */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="f-cargo" className="text-[0.73rem] font-bold tracking-[0.05em] uppercase text-[#444]">
                  Cargo Type *
                </label>
                <input suppressHydrationWarning id="f-cargo" name="cargo" type="text" value={form.cargo}
                  onChange={handleChange} placeholder="e.g. General goods, industrial material"
                  className={inputClass("cargo")} />
                {errors.cargo && <span className="text-[0.72rem] text-[#b82025]">{errors.cargo}</span>}
              </div>

              {/* Load + Vehicle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="f-load" className="text-[0.73rem] font-bold tracking-[0.05em] uppercase text-[#444]">
                    Load / Requirement
                  </label>
                  <input suppressHydrationWarning id="f-load" name="load" type="text" value={form.load}
                    onChange={handleChange} placeholder="e.g. 10 MT, Full truck"
                    className="w-full px-4 py-3 border border-[#e8e6e1] focus:border-[#0b0d0f]
                      rounded bg-[#FAFAFA] text-[0.9rem] outline-none transition-colors duration-200" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="f-vehicle" className="text-[0.73rem] font-bold tracking-[0.05em] uppercase text-[#444]">
                    Vehicle Preference
                  </label>
                  <select suppressHydrationWarning id="f-vehicle" name="vehicle" value={form.vehicle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e8e6e1] focus:border-[#0b0d0f]
                      rounded bg-[#FAFAFA] text-[0.9rem] outline-none transition-colors duration-200">
                    <option value="">Select (optional)</option>
                    <option>Full Truck Load</option>
                    <option>Any suitable vehicle</option>
                    <option>Multiple vehicles</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="f-msg" className="text-[0.73rem] font-bold tracking-[0.05em] uppercase text-[#444]">
                  Message
                </label>
                <textarea suppressHydrationWarning id="f-msg" name="message" value={form.message}
                  onChange={handleChange} rows={3}
                  placeholder="Any additional details about your requirement"
                  className="w-full px-4 py-3 border border-[#e8e6e1] focus:border-[#0b0d0f]
                    rounded bg-[#FAFAFA] text-[0.9rem] outline-none resize-y min-h-[90px]
                    transition-colors duration-200" />
              </div>

              <button suppressHydrationWarning
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-[#b82025] hover:bg-[#8b1518] disabled:bg-[#9a9a9a]
                  text-white rounded text-[0.82rem] font-bold tracking-[0.08em] uppercase
                  transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed mt-1"
              >
                {submitting ? "Opening WhatsApp..." : "Request Transport Quote"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
