"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/furkan",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/furkan",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "E-posta",
      href: "mailto:furkan@example.com",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            İletişime <span className="gradient-text">Geç</span>
          </h2>
          <p className="section-subheading">
            Bir proje fikriniz, iş birliği fırsatınız veya sadece merhaba
            demek mi istiyorsunuz? Sizden haber almak isterim.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-5"
              id="contact-form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium mb-2"
                  >
                    İsim
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent outline-none"
                    style={{
                      backgroundColor: "rgba(6, 182, 212, 0.05)",
                      borderColor: "var(--color-border-default)",
                      color: "inherit",
                    }}
                    placeholder="Adınız"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium mb-2"
                  >
                    E-posta
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent outline-none"
                    style={{
                      backgroundColor: "rgba(6, 182, 212, 0.05)",
                      borderColor: "var(--color-border-default)",
                      color: "inherit",
                    }}
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium mb-2"
                >
                  Konu
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent outline-none"
                  style={{
                    backgroundColor: "rgba(6, 182, 212, 0.05)",
                    borderColor: "var(--color-border-default)",
                    color: "inherit",
                  }}
                  placeholder="Ne hakkında?"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium mb-2"
                >
                  Mesaj
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent outline-none resize-none"
                  style={{
                    backgroundColor: "rgba(6, 182, 212, 0.05)",
                    borderColor: "var(--color-border-default)",
                    color: "inherit",
                  }}
                  placeholder="Projeniz veya fikriniz hakkında bilgi verin..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center"
                id="contact-submit"
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="opacity-25"
                      />
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        className="opacity-75"
                      />
                    </svg>
                    Gönderiliyor...
                  </>
                ) : status === "success" ? (
                  "✓ Mesaj gönderildi!"
                ) : status === "error" ? (
                  "✕ Başarısız — tekrar deneyin"
                ) : (
                  <>
                    Mesaj Gönder
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Social links */}
            <div className="glass-card p-6">
              <h3 className="font-bold mb-4">Bağlantılar</h3>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-[rgba(6,182,212,0.08)] group"
                    id={`social-${link.name.toLowerCase()}`}
                  >
                    <span
                      className="transition-colors duration-200 group-hover:text-[#c084fc]"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {link.icon}
                    </span>
                    <span className="text-sm font-medium">{link.name}</span>
                    <svg
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3">Müsaitlik</h3>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--color-accent-green)" }}
                />
                <span className="text-sm font-medium" style={{ color: "var(--color-accent-green)" }}>
                  Fırsatlara açık
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Staj, freelance projeler ve açık kaynak iş birlikleriyle
                ilgileniyorum. Uzaktan ve yerinde çalışmaya uygunum.
              </p>
            </div>

            {/* Location */}
            <div className="glass-card p-6">
              <h3 className="font-bold mb-3">Konum</h3>
              <p
                className="text-sm flex items-center gap-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                📍 Bitlis, Türkiye
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                UTC+3 · Dünya genelinde uzaktan çalışmaya açık
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
