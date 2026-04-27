"use client";

import { motion } from "framer-motion";

const hobbies = [
  {
    emoji: "🏃",
    name: "Koşu & Fitness",
    description:
      "Sabah koşusuyla kafamı dinlendiriyorum — debug seansları için zihnimi keskin tutuyor.",
    color: "var(--color-accent-green)",
  },
  {
    emoji: "📖",
    name: "Teknoloji Blogları",
    description:
      "Cloudflare, Vercel ve Go ekibi gibi şirketlerin mühendislik bloglarını takip ediyorum. Her zaman yeni bir şey öğreniyorum.",
    color: "var(--color-accent-purple)",
  },
  {
    emoji: "🎮",
    name: "Oyun",
    description:
      "Strateji ve RPG oyunları, sistem tasarımını farklı açılardan düşünmeme yardımcı oluyor. Ayrıca eğlenceli.",
    color: "var(--color-accent-pink)",
  },
  {
    emoji: "☕",
    name: "Kahve & Yan Projeler",
    description:
      "Hafta sonu sabahları kahve ve prototiplenecek yeni bir fikir. En iyi çalışmalarımın çoğu burada başlıyor.",
    color: "var(--color-accent-orange)",
  },
  {
    emoji: "🎵",
    name: "Müzik",
    description:
      "Kod yazarken lo-fi, enerjiye ihtiyaç duyduğumda Türk rock. Müzik iş akışımın bir parçası.",
    color: "var(--color-accent-red)",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Kodun <span className="gradient-text-cool">Ötesinde</span>
          </h2>
          <p className="section-subheading">
            Beni insan yapan ve daha iyi bir mühendis kılan şeyler.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="glass-card p-5 group"
              id={`hobby-${i}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${hobby.color}15` }}
                >
                  {hobby.emoji}
                </span>
                <h3 className="text-base font-bold">{hobby.name}</h3>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
