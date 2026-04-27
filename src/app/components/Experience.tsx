"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Freelance Full-Stack Geliştirici",
    type: "Serbest",
    period: "2024 – Günümüz",
    description:
      "Küçük işletmeler ve öğrenci arkadaşlar için özel web uygulamaları ve API'ler geliştiriyorum. Docker deployment ve CI/CD pipeline'ları ile production-ready çözümler sunuyorum.",
    highlights: [
      "Go, Next.js ve Docker kullanarak 4+ proje teslim ettim",
      "JWT kimlik doğrulamalı güvenli REST API'ler geliştirdim",
      "GitHub Actions ile otomatik CI/CD pipeline'ları kurdum",
    ],
    icon: "💼",
    color: "var(--color-accent-pink)",
  },
  {
    title: "Açık Kaynak Katkıcı",
    type: "Açık Kaynak",
    period: "2023 – Günümüz",
    description:
      "Açık kaynak projelere katkıda bulunuyor ve herkese açık araçlar geliştiriyorum. Güvenlik araçları ve geliştirici deneyimi iyileştirmelerine odaklanıyorum.",
    highlights: [
      "SecScan — açık kaynak web güvenlik tarama aracını oluşturdum",
      "GoLearn API'yi eğitim referans projesi olarak yayınladım",
      "GitHub'da düzenli katkılarla aktifim",
    ],
    icon: "🌍",
    color: "var(--color-accent-cyan)",
  },
  {
    title: "Üniversite Laboratuvar Projeleri",
    type: "Akademik",
    period: "2022 – Günümüz",
    description:
      "Üniversite derslerinde teknik projelere liderlik ediyorum — konteynerizasyon, test ve temiz mimari gibi endüstri pratiklerini uyguluyorum.",
    highlights: [
      "Ders projeleri için mikroservis mimarileri kurdum",
      "Akademik çalışmalara DevSecOps pratikleri uyguladım",
      "Sınıf arkadaşlarına Git ve Docker konusunda mentorluk yaptım",
    ],
    icon: "🎓",
    color: "var(--color-accent-orange)",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text">Deneyimlerim</span>
          </h2>
          <p className="section-subheading">
            Gerçek iş, gerçek projeler — sahte şirketler yok, sadece önemli
            şeyler inşa etmekten gelen dürüst deneyim.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(180deg, var(--color-accent-primary), transparent)",
            }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="relative md:pl-20"
                id={`experience-${i}`}
              >
                <div
                  className="absolute left-4 md:left-6 top-8 w-4 h-4 rounded-full border-2 hidden md:block"
                  style={{
                    borderColor: exp.color,
                    backgroundColor: "var(--color-bg-primary)",
                  }}
                />

                <div className="glass-card p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{exp.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold">{exp.title}</h3>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            backgroundColor: `${exp.color}15`,
                            color: exp.color,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <span
                      className="text-sm font-mono font-medium"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: exp.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
