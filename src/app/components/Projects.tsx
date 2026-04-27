"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "SecScan — Web Güvenlik Laboratuvarı",
    problem:
      "Güvenlik eğitim araçları genellikle dağınık ve uygulamalı pratikten yoksun. Öğrencilerin gerçek sistemleri riske atmadan tek bir platformda güvenlik açıklarını öğrenmeleri, test etmeleri ve anlamaları gerekiyor.",
    description:
      "XSS, SQLi, port tarama, TLS analizi ve başlık kontrolü için modüler tarayıcılara sahip full-stack web güvenlik tarama platformu. Gerçek zamanlı SSE ilerleme güncellemeleri ve PDF rapor üretimi içerir.",
    tech: ["Go", "Gin", "Next.js", "Docker", "SSE", "Tailwind CSS"],
    github: "https://github.com/furkan/secscan",
    demo: "#",
    contribution:
      "Tüm tarayıcı mimarisini tasarlayıp geliştirdim — sıkı SSRF korumalı modüler Go servisleri, Server-Sent Events ile gerçek zamanlı frontend güncellemeleri ve Docker Compose ile konteynerize deployment.",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    icon: "🛡️",
  },
  {
    title: "GoLearn — Eğitim API'si",
    problem:
      "Birçok uzaktan eğitim backend'i monolitik ve genişletmesi zor. GoLearn, kursları, sınavları ve rol tabanlı erişimi ilk günden yöneten temiz ve iyi yapılandırılmış bir REST API sunar.",
    description:
      "JWT kimlik doğrulama, RBAC, kurs yönetimi, sınav sistemleri ve WebSocket desteği ile production-ready bir REST API. Temiz mimari prensipleriyle geliştirildi.",
    tech: ["Go", "Gin", "GORM", "SQLite", "JWT", "WebSocket"],
    github: "https://github.com/furkan/golearn",
    demo: "#",
    contribution:
      "13 adımlık bir geliştirme planı izleyerek sıfırdan inşa ettim — handler, servis ve repository katmanlarıyla temiz mimari uyguladım, artı kimlik doğrulama ve hız sınırlama için kapsamlı middleware.",
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    icon: "📚",
  },
  {
    title: "CampusConnect — Mikroservis Platformu",
    problem:
      "Üniversite etkinlik yönetimi genellikle dağınık tablolara ve grup sohbetlerine dayanır. CampusConnect, etkinlik oluşturma, keşfetme ve kayıt işlemlerini tek bir API'de merkezileştirir.",
    description:
      "NestJS ana servisi (GraphQL), analitik için Go yardımcı servisi ve webhook tabanlı servisler arası iletişim içeren mikroservis tabanlı öğrenci etkinlik platformu.",
    tech: ["NestJS", "Go", "GraphQL", "PostgreSQL", "Prisma", "Docker"],
    github: "https://github.com/furkan/campusconnect",
    demo: "#",
    contribution:
      "Webhook'lar kullanarak mikroservis iletişim katmanını tasarladım, N+1 optimize GraphQL sorguları uyguladım ve güvenlik ile hız sınırlama için özel middleware'li Go analitik servisini geliştirdim.",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    icon: "🎓",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Öne Çıkan <span className="gradient-text">Projeler</span>
          </h2>
          <p className="section-subheading">
            Gerçek sorunları çözen gerçek projeler — her biri bana yeni bir şey
            öğretti.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="glass-card p-8 relative overflow-hidden group"
              id={`project-${i}`}
            >
              {/* Accent bar */}
              <div
                className="absolute top-0 left-0 w-full h-1 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: project.gradient }}
              />

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{project.icon}</span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>

                  {/* Problem */}
                  <div
                    className="mb-4 p-4 rounded-xl"
                    style={{
                      background: "rgba(6, 182, 212, 0.05)",
                      borderLeft: "3px solid var(--color-accent-primary)",
                    }}
                  >
                    <p
                      className="text-sm font-semibold mb-1"
                      style={{ color: "var(--color-accent-primary)" }}
                    >
                      Problem
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {project.problem}
                    </p>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {project.description}
                  </p>

                  {/* My contribution */}
                  <div className="mb-4">
                    <p
                      className="text-sm font-semibold mb-1"
                      style={{ color: "var(--color-accent-secondary)" }}
                    >
                      Benim Katkım
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {project.contribution}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex lg:flex-col gap-3 lg:justify-start">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                    id={`project-${i}-github`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Kod
                  </a>
                  <a
                    href={project.demo}
                    className="btn-secondary text-sm"
                    id={`project-${i}-demo`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
