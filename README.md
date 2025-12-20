# 🧬 VitalSense AI - Akıllı Sağlık Asistanı

![Project Banner](https://img.shields.io/badge/Status-Live-success?style=for-the-badge) ![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**VitalSense AI**, karmaşık laboratuvar tahlil sonuçlarını yapay zeka destekli görüntü işleme teknolojisi ile okuyan, hastanın yaş, cinsiyet ve sağlık durumuna göre kişiselleştirilmiş yorumlar sunan yeni nesil bir sağlık asistanıdır.

🔗 **Canlı Proje:** [https://vitalsense-ai.vercel.app](https://vitalsense-ai.vercel.app)

---

## 🚀 Projenin Amacı

Bir **Eczacı ve Yazılım Geliştirici** olarak, hastaların ellerindeki tahlil sonuçlarını anlamakta zorlandığını ve sağlık okuryazarlığındaki eksikliği fark ettim. VitalSense AI, bu boşluğu doldurmak için geliştirildi:

* 🩸 **Anlaşılır:** Tıbbi jargon yerine hastanın anlayacağı dilde açıklamalar.
* ⚡ **Hızlı:** Saniyeler içinde analiz.
* 🎯 **Kişiselleştirilmiş:** Hamilelik, yaş ve kronik hastalıklara göre referans değerlendirmesi.

---

## 🛠️ Teknolojiler (Tech Stack)

Bu proje modern **Full-Stack** mimarisi kullanılarak geliştirilmiştir.

| Alan | Teknoloji | Açıklama |
| :--- | :--- | :--- |
| **Frontend** | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Modern ve hızlı arayüz. |
| **Backend** | ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white) | Yüksek performanslı API sunucusu. |
| **AI Model** | ![Gemini](https://img.shields.io/badge/Google%20Gemini%202.5-4285F4?style=flat&logo=google&logoColor=white) | Görüntü işleme ve tıbbi analiz motoru. |
| **Database** | ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white) | Analiz sonuçlarını saklayan PostgreSQL tabanlı veritabanı. |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=white) | Frontend ve Backend dağıtımı. |

---

## 📸 Özellikler

- [x] **OCR & Görüntü İşleme:** JPG, PNG ve PDF formatındaki tahlil sonuçlarını okuyabilir.
- [x] **Dinamik Prompt Mühendisliği:** Hastanın "Hamilelik", "Yaş" ve "Cinsiyet" verilerine göre yapay zekaya özel komut gönderir.
- [x] **Veritabanı Entegrasyonu:** Yapılan analizler Supabase veritabanında saklanır.
- [x] **Validasyon:** Eksik veri girişini engelleyen kullanıcı dostu arayüz.

---

## ⚙️ Kurulum (Local Development)

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin.

### 1. Projeyi Klonlayın
```bash
git clone [https://github.com/KULLANICI_ADINIZ/VitalSense-AI.git](https://github.com/KULLANICI_ADINIZ/VitalSense-AI.git)
cd VitalSense-AI