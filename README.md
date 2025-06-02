# 🚀 Abdullah Keleş - Kişisel Portfolio Website

Modern, animasyonlu ve responsive bir kişisel portfolio websitesi. Next.js, TypeScript, Tailwind CSS ve Framer Motion kullanılarak geliştirilmiştir.

![Portfolio Website](https://img.shields.io/badge/Portfolio-Website-purple?style=for-the-badge&logo=next.js)

## ✨ Özellikler

- **🎨 Modern Tasarım**: Glassmorphism ve gradient efektleri
- **📱 Responsive**: Tüm cihazlarda mükemmel görünüm
- **⚡ Performanslı**: Next.js 15 ile optimize edilmiş
- **🎭 Animasyonlar**: Framer Motion ile etkileyici animasyonlar
- **🌙 Dark Theme**: Zarif koyu tema tasarımı
- **🔧 TypeScript**: Tip güvenli kod yapısı
- **📱 Mobile Navigation**: Hamburger menü ile mobil navigasyon
- **🎯 Smooth Scrolling**: Yumuşak sayfa geçişleri
- **💫 Parçacık Animasyonları**: Dinamik arkaplan efektleri
- **🎨 Custom Scrollbar**: Özelleştirilmiş kaydırma çubuğu

## 🛠️ Teknolojiler

- **Frontend Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone [repo-url]
cd my-ui
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Development server'ını başlatın**
```bash
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── globals.css           # Global CSS ve custom animasyonlar
│   ├── layout.tsx           # Ana layout bileşeni
│   └── page.tsx             # Ana sayfa bileşeni
├── components/
│   ├── AnimatedBackground.tsx # Arkaplan animasyonları
│   └── MobileNav.tsx        # Mobil navigasyon menüsü
└── ...
```

## 🎨 Bileşenler

### Ana Sayfa (page.tsx)
- Hero bölümü animasyonlu başlık ile
- Hakkımda bölümü kişisel bilgiler
- İş deneyimi kartları
- Yetenekler progress bar'ları ile
- İletişim formu ve sosyal linkler

### Mobile Navigation (MobileNav.tsx)
- Hamburger menü animasyonu
- Slide-in panel efekti
- Sosyal medya linkleri
- Responsive tasarım

### Animated Background
- Parçacık sistemi
- Gradient overlay'ler
- Mouse takip efekti

## 🎭 Animasyon Özellikleri

- **Sayfa Yükleme**: Staggered animasyonlar
- **Scroll Animasyonları**: `whileInView` ile tetiklenen efektler
- **Hover Efektleri**: 3D dönüşümler ve scale animasyonları
- **Mobile Menü**: Slide animasyonları
- **Progress Bars**: Animasyonlu ilerleme çubukları
- **Parçacık Sistemi**: Sürekli hareket eden arka plan elementleri

## 📱 Responsive Tasarım

- **Mobile First**: 320px'den başlayarak responsive
- **Breakpoints**: 
  - Mobile: 0-768px
  - Tablet: 768px-1024px  
  - Desktop: 1024px+
- **Adaptive Layout**: Her cihaza uygun grid sistemi
- **Touch Friendly**: Mobil dokunmatik deneyim

## 🔧 Özelleştirme

### Renkler
```css
/* globals.css içinde */
:root {
  --purple-gradient: linear-gradient(45deg, #8b5cf6, #ec4899);
  --background-gradient: linear-gradient(to bottom right, #0f172a, #581c87, #0f172a);
}
```

### Animasyon Süreleri
```typescript
// Framer Motion transition ayarları
transition={{ duration: 0.8, delay: 0.2 }}
```

## 📊 Performance

- **Lighthouse Score**: 95+ performans
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🌐 Deployment

### Vercel (Önerilen)
```bash
npm run build
vercel --prod
```

### Manuel Build
```bash
npm run build
npm start
```

## 🔒 SEO & Accessibility

- Semantic HTML5 elementleri
- ARIA labels ve roles
- Keyboard navigation desteği
- Screen reader uyumluluğu
- Meta tags ve Open Graph

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

**Abdullah Keleş**
- 🌐 Website: [Bu site!]
- 💼 LinkedIn: [linkedin.com/in/kelesabdullah](https://www.linkedin.com/in/kelesabdullah/)
- 🐙 GitHub: [github.com/kelesabdullah](https://github.com/kelesabdullah)
- 📧 Email: abdullah@example.com
- 🏢 Şirket: [Ankasoft](https://ankasoft.co/)

## 🤝 Katkıda Bulunma

1. Bu repo'yu fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 🐛 Bug Reports

Herhangi bir bug bulursanız, lütfen [Issues](../../issues) bölümünde bildirin.

## ⭐ Destekleyin

Bu projeyi beğendiyseniz, lütfen ⭐ verin!

---

❤️ ile Next.js, Framer Motion ve Tailwind CSS kullanılarak geliştirilmiştir.
