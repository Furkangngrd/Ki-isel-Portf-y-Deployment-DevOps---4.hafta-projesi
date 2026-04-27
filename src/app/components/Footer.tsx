export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 border-t"
      style={{ borderColor: "var(--color-border-default)" }}
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            © {year} Furkan. Next.js, Tailwind CSS & Framer Motion ile yapıldı.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/furkan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:text-[#6366f1]"
              style={{ color: "var(--color-text-muted)" }}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/furkan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:text-[#6366f1]"
              style={{ color: "var(--color-text-muted)" }}
            >
              LinkedIn
            </a>
            <a
              href="mailto:furkan@example.com"
              className="text-sm transition-colors hover:text-[#6366f1]"
              style={{ color: "var(--color-text-muted)" }}
            >
              E-posta
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
