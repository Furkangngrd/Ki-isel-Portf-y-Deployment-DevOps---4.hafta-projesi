"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number; // 0-100
  status: "confident" | "proficient" | "learning";
}

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "var(--color-accent-pink)",
    skills: [
      { name: "React / Next.js", level: 80, status: "confident" },
      { name: "TypeScript", level: 70, status: "proficient" },
      { name: "Tailwind CSS", level: 85, status: "confident" },
      { name: "HTML / CSS", level: 90, status: "confident" },
      { name: "Framer Motion", level: 55, status: "learning" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "var(--color-accent-cyan)",
    skills: [
      { name: "Go (Gin, GORM)", level: 75, status: "proficient" },
      { name: "Node.js / NestJS", level: 65, status: "proficient" },
      { name: "REST API Tasarımı", level: 80, status: "confident" },
      { name: "GraphQL", level: 50, status: "learning" },
      { name: "SQL / PostgreSQL", level: 70, status: "proficient" },
    ],
  },
  {
    title: "DevOps",
    icon: "🚀",
    color: "var(--color-accent-orange)",
    skills: [
      { name: "Docker / Compose", level: 75, status: "proficient" },
      { name: "CI/CD (GitHub Actions)", level: 70, status: "proficient" },
      { name: "Linux / Shell", level: 65, status: "proficient" },
      { name: "Nginx", level: 55, status: "learning" },
      { name: "Kubernetes", level: 30, status: "learning" },
    ],
  },
  {
    title: "Araçlar & Güvenlik",
    icon: "🔧",
    color: "var(--color-accent-purple)",
    skills: [
      { name: "Git / GitHub", level: 85, status: "confident" },
      { name: "VS Code", level: 90, status: "confident" },
      { name: "Semgrep / Trivy", level: 50, status: "learning" },
      { name: "Postman / Insomnia", level: 75, status: "proficient" },
      { name: "Figma", level: 40, status: "learning" },
    ],
  },
];

const statusColors: Record<string, string> = {
  confident: "var(--color-accent-green)",
  proficient: "var(--color-accent-blue)",
  learning: "var(--color-accent-yellow)",
};

const statusLabels: Record<string, string> = {
  confident: "Kendinden Emin",
  proficient: "Yetkin",
  learning: "Öğreniyor",
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Teknik <span className="gradient-text">Yetenekler</span>
          </h2>
          <p className="section-subheading">
            Dürüst bir değerlendirme — hâlâ öğrendiğim şeyleri işaretliyorum,
            çünkü gelişim numara yapmaktan daha önemli.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-6 mb-10"
        >
          {Object.entries(statusLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: statusColors[key] }}
              />
              <span
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: catIndex * 0.1,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="glass-card p-6"
              id={`skill-category-${catIndex}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl">{category.icon}</span>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{
                          backgroundColor: `${statusColors[skill.status]}15`,
                          color: statusColors[skill.status],
                        }}
                      >
                        {statusLabels[skill.status]}
                      </span>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{
                        backgroundColor: "rgba(6, 182, 212, 0.08)",
                      }}
                    >
                      <motion.div
                        className="h-full rounded-full skill-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.3,
                          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                        }}
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
