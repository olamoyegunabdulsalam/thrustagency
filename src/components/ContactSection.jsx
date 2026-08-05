import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Button from "./ui/Button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/myegydjj";

const info = [
  { icon: Mail, label: "Email", value: "thrust909@gmail.com" },
  { icon: Phone, label: "Phone", value: "+234 813 086 4392" },
  { icon: MapPin, label: "Location", value: "Rivers state, Nigeria" },
];

const fields = [
  {
    name: "name",
    label: "Your Name",
    placeholder: "Enter your name",
    type: "text",
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    name: "company",
    label: "Company / Business Name",
    placeholder: "Enter your company name",
    type: "text",
  },
];

const serviceOptions = [
  "Product Development",
  "SEO & AI Search",
  "Brand & Design",
  "Growth & Optimization",
  "Other",
];

export default function ContactSection() {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const formRef = useRef(null);
  const firstErrorRef = useRef(null);

  useEffect(() => {
    try {
      const v = sessionStorage.getItem("prefillService");
      if (v) setService(v);
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timeout = setTimeout(() => setToast(null), 5400);
    return () => clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    if (firstErrorRef.current) {
      firstErrorRef.current.focus();
    }
  }, [errors]);

  const firstErrorField = Object.keys(errors)[0] || null;
  const getErrorRef = (fieldName) => (firstErrorField === fieldName ? firstErrorRef : null);

  const validate = (formData) => {
    const nextErrors = {};
    if (!formData.get("name")?.trim()) nextErrors.name = "Name is required.";
    if (!formData.get("email")?.trim()) nextErrors.email = "Email is required.";
    if (!formData.get("service")?.trim()) nextErrors.service = "Service is required.";
    if (!formData.get("message")?.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  };

  const resetForm = () => {
    if (formRef.current) formRef.current.reset();
    setService("");
    setBudget("");
    setErrors({});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const validation = validate(data);

    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    setSubmitting(true);
    setErrors({});

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      const result = await response.json();
      if (result.ok || response.status === 200) {
        resetForm();
        setToast({
          type: "success",
          title: "✔ Message Sent Successfully",
          body: "Thanks for contacting Thrust Agency. We've received your inquiry and will get back to you as soon as possible.",
        });
      } else {
        throw new Error("Formspree error");
      }
    } catch (error) {
      setToast({
        type: "error",
        title: "Something went wrong.",
        body: "Please try again or contact us through WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-ink-200 bg-white p-6 sm:p-10 lg:p-12 grid lg:grid-cols-2 gap-12"
        >
          {/* Left info */}
          <div>
            <span className="inline-block text-xs font-bold tracking-wider text-orange-500 uppercase mb-3">
              Let's Talk
            </span>
            <h2 className="font-display text-3xl md:text-[2.4rem] font-bold text-ink-900 leading-tight mb-4">
              Let's build something impossible to ignore.
            </h2>
            <p className="text-ink-600 leading-relaxed max-w-md mb-10">
              Tell us about your project and we'll be in touch within 24 hours.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              {info.map((it) => (
                <div key={it.label} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-orange-50 text-orange-500 shrink-0">
                    <it.icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs text-ink-400">{it.label}</p>
                    <p className="text-sm font-medium text-ink-800">
                      {it.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-ink-100">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-ink-50 text-ink-500">
                <Clock size={16} />
              </span>
              <div>
                <p className="text-xs text-ink-400">Average response time</p>
                <p className="text-sm font-semibold text-ink-900">
                  Within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Right form */}
          <form
            ref={formRef}
            action={FORMSPREE_ENDPOINT}
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            noValidate
          >
            {toast && (
              <div
                className={`contact-toast contact-toast--${toast.type}`}
                role="status"
                aria-live="polite"
              >
                <p className="font-semibold text-sm">{toast.title}</p>
                <p className="text-sm text-ink-600 mt-1">{toast.body}</p>
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-5">
              {fields.slice(0, 2).map((f) => (
                <FormField
                  key={f.name}
                  {...f}
                  error={errors[f.name]}
                  inputRef={getErrorRef(f.name)}
                />
              ))}
            </div>

            <FormField
              {...fields[2]}
              error={errors.company}
              inputRef={getErrorRef(fields[2].name)}
            />

            <div>
              <label className="block text-xs font-semibold text-ink-700 mb-1.5">
                Service
              </label>
              <select
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                aria-invalid={errors.service ? "true" : "false"}
                ref={getErrorRef("service")}
                className="w-full rounded-xl border border-ink-200 bg-ink-50/40 px-4 py-3 text-sm text-ink-800 placeholder:text-ink-300 outline-none focus:border-orange-500 focus:bg-white transition-colors"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-2 text-xs text-red-500">{errors.service}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-700 mb-1.5">
                Budget (optional)
              </label>
              <input
                name="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="e.g. $10k - $50k"
                className="w-full rounded-xl border border-ink-200 bg-ink-50/40 px-4 py-3 text-sm text-ink-800 placeholder:text-ink-300 outline-none focus:border-orange-500 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-700 mb-1.5">
                Project details
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project or goals"
                aria-invalid={errors.message ? "true" : "false"}
                ref={getErrorRef("message")}
                className="w-full rounded-xl border border-ink-200 bg-ink-50/40 px-4 py-3 text-sm text-ink-800 placeholder:text-ink-300 outline-none focus:border-orange-500 focus:bg-white transition-colors resize-none"
              />
              {errors.message && (
                <p className="mt-2 text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button
                type="submit"
                variant="primary"
                disabled={submitting}
                className="justify-center flex-1"
              >
                {submitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function FormField({ label, placeholder, type, error, inputRef }) {
  const inputName = label.toLowerCase().includes("email")
    ? "email"
    : label.toLowerCase().includes("company")
    ? "company"
    : "name";

  return (
    <div>
      <label className="block text-xs font-semibold text-ink-700 mb-1.5" htmlFor={inputName}>
        {label}
      </label>
      <input
        id={inputName}
        name={inputName}
        type={type}
        placeholder={placeholder}
        ref={inputRef}
        aria-invalid={error ? "true" : "false"}
        className={`w-full rounded-xl border px-4 py-3 text-sm text-ink-800 placeholder:text-ink-300 outline-none transition-colors focus:border-orange-500 focus:bg-white ${
          error ? "border-red-500" : "border-ink-200 bg-ink-50/40"
        }`}
      />
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </div>
  );
}
