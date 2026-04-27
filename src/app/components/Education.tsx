"use client";

import { motion } from "framer-motion";

const courses = [
  "Veri Yapıları & Algoritmalar",
  "İşletim Sistemleri",
  "Bilgisayar Ağları",
  "Veritabanı Sistemleri",
  "Web Teknolojileri",
  "Yazılım Mühendisliği",
  "Siber Güvenlik Temelleri",
  "Nesne Yönelimli Programlama",
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text">Eğitim</span>
          </h2>
          <p className="section-subheading">
            Her şeyin başladığı yer — örgün eğitim ile kendi kendine öğrenmenin
            buluşması.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-8 max-w-3xl"
          id="education-card"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: "rgba(192, 132, 252, 0.15)" }}
              >
                🎓
              </div>
              <div>
                <h3 className="text-xl font-bold">Bitlis Eren Üniversitesi</h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--color-accent-primary)" }}
                >
                  Bilgisayar Mühendisliği — Lisans
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Beklenen Mezuniyet: 2026
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-xl"
              style={{ background: "rgba(52, 211, 153, 0.15)" }}
            >
              <span
                className="text-sm font-bold"
                style={{ color: "var(--color-accent-green)" }}
              >
                GNO: 3.0+
              </span>
            </div>
          </div>

          <div className="section-divider mb-6" />

          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: "var(--color-text-secondary)" }}>
              İlgili Dersler
            </h4>
            <div className="flex flex-wrap gap-2">
              {courses.map((course, i) => (
                <motion.span
                  key={course}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="tag"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="section-divider my-6" />

          <div>
            <h4 className="text-sm font-semibold mb-3" style={{ color: "var(--color-text-secondary)" }}>
              Sınıf Dışında
            </h4>
            <ul className="space-y-2">
              {[
                "Kişisel projeler aracılığıyla Docker, CI/CD ve bulut deployment öğrendim",
                "Akademik projelere güvenlik tarama araçları (Semgrep, Trivy) uyguladım",
                "Go ve NestJS'i bağımsız öğrenerek production düzeyinde API'ler geliştirdim",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--color-accent-primary)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
