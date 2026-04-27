# 🚀 Kişisel Portföy & DevOps Deployment Projesi

Bu proje, modern web teknolojileri ve DevOps pratikleri kullanılarak sıfırdan geliştirilmiş, üretim ortamına (production-ready) hazır bir kişisel portföy web sitesidir.

## 👨‍🎓 Öğrenci Bilgileri
- **Ad Soyad:** Furkan Güngördü
- **Öğrenci Numarası:** 24080410024
- **Ders:** Davut Hoca'nın Dersi - 4. Hafta Projesi

## ✨ Proje Özellikleri

### 🎨 1. Modern ve "Premium" Tasarım (Frontend)
- **Teknoloji Yığını:** Next.js 16 (App Router), TypeScript, Tailwind CSS ve Framer Motion.
- **Tasarım Konsepti:** Sıkıcı düz renkler yerine **"Vivid Glassmorphism"** ve animasyonlu gradient yapısı kullanıldı.
- **Çoklu Tema Desteği:** 
  - ☀️ **Light Mode (Varsayılan):** Ferah, iç açıcı ve temiz bir arayüz.
  - 🌙 **Dark Mode:** Derin okyanus (Deep Ocean) teması ve neon detaylar.
- **Responsive & Türkçe:** Site tüm cihazlarla %100 uyumludur ve SEO destekli profesyonel bir Türkçe ile hazırlanmıştır.

### ⚙️ 2. Gelişmiş DevOps Altyapısı
- **Multi-Stage Docker Mimarisi:** İmaj boyutunu minimumda tutan, tamamen production için optimize edilmiş `Dockerfile`.
- **Nginx Reverse Proxy:** Güvenlik başlıkları (Security Headers), GZIP sıkıştırması ve statik dosya önbelleklemesi yapılandırılmış özel `nginx/default.conf` dosyası.
- **Docker Compose:** Hem Next.js uygulamasını hem de Nginx sunucusunu tek komutla ayağa kaldırmak için `docker-compose.yml`.

### 🛡️ 3. Güvenlik ve DevSecOps (Sürekli Entegrasyon)
- **Güvenli API:** İletişim formu API'sında (`/api/contact`) XSS koruması ve güçlü veri doğrulaması mevcut.
- **CI/CD Pipeline (GitHub Actions):** `.github/workflows/ci.yml` dosyası sayesinde koda her müdahale edildiğinde:
  - Kod Linting ve TypeScript tip kontrolü yapılır.
  - **Trivy** ile Docker imajı zafiyetleri aranır.
  - **Semgrep** ile statik kod güvenlik analizi (SAST) yapılır.
  - **Gitleaks** ile kod içine sızmış gizli anahtarlar ve şifreler (Secret Scanning) tespit edilir.

## 🚀 Projeyi Çalıştırma

### Geliştirme (Development) Ortamında
```bash
npm install
npm run dev
```

### Docker (Production) Ortamında
```bash
docker-compose up --build -d
```
Konteynerler ayağa kalktıktan sonra siteye `http://localhost` üzerinden erişebilirsiniz.
