# Roasté - Premium Coffee Experience

**Live Demo:** [https://alperhanbarut.github.io/Roaste/](https://alperhanbarut.github.io/Roaste/)

## Proje Hakkında

**Roasté**, modern web teknolojileri kullanılarak geliştirilmiş premium kahve deneyimi sunan bir web sitesidir. Kahve tutkusunu yansıtan zarif tasarım ve akıcı animasyonlarla ziyaretçilere unutulmaz bir deneyim sunar.

### Öne Çıkan Özellikler

- **Modern UI/UX**: Minimalist ve şık tasarım
- **Tam Responsive**: Mobil, tablet ve desktop uyumlu
- **Akıcı Animasyonlar**: GSAP ile optimize edilmiş performanslı animasyonlar
- **Hızlı Yükleme**: Vite build sistemi ile optimize edilmiş
- **SEO Optimize**: Arama motorları için optimize edilmiş yapı

## Teknoloji Yığını

### Frontend

- **React 19** - Modern UI geliştirme
- **Tailwind CSS 4** - Utility-first CSS framework
- **GSAP 3** - Profesyonel animasyon kütüphanesi
- **React Icons** - İkon seti
- **React Responsive** - Responsive davranış yönetimi

### Build & Deploy

- **Vite** - Hızlı build aracı
- **ESLint** - Kod kalitesi kontrolü
- **GitHub Pages** - Deployment platform

## Kurulum ve Çalıştırma

### Ön Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn

### Kurulum Adımları

1. **Repositoru klonlayın:**

   ```bash
   git clone https://github.com/alperhanbarut/Roaste.git
   cd Roaste
   ```

2. **Bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**

   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın:**
   ```
   http://localhost:5173
   ```

## Build ve Deploy

### Production Build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
# Build oluştur
npm run build

# GitHub Pages'e deploy et
npm run deploy
```

## Responsive Tasarım

Roasté, tüm cihaz boyutlarında mükemmel görünüm sağlar:

- **Mobil**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Mobil Optimizasyonlar

- Video performans optimizasyonu
- Touch-friendly navigasyon
- Optimize edilmiş animasyonlar
- Compressed görsel boyutları

## Site Bölümleri

### 1. Hero Section

- Video background ile etkileyici giriş
- Scroll-synced video oynatma
- Responsive typography

### 2. Story Section

- Kahve yolculuğu hikayesi
- Adım adım süreç animasyonları
- Interactive card tasarımı

### 3. Coffee Art Section

- Masking efektleri
- Progressive reveal animasyonu
- Centered content layout

### 4. Menu Section

- Horizontal scroll gallery
- Premium kahve çeşitleri
- Card-based tasarım

### 5. Gallery Section

- Masonry grid layout
- Hover efektleri
- Responsive image grid

### 6. Contact Section

- Smooth scroll animasyonları
- İletişim formu
- Sosyal medya linkleri

## Tasarım Sistemi

### Renk Paleti

```css
--color-milk: #f8f5f0      /* Ana background */
--color-coffee: #6e4b3a     /* Ana kahve rengi */
--color-coffee-dark: #8b5a3c /* Koyu kahve */
--color-espresso: #3d2914    /* En koyu ton */
--color-cream: #fdf9f3       /* Krem rengi */
```

### Typography

- **Heading**: Playfair Display (serif)
- **Body**: Lora (serif)
- **Accent**: Custom font combinations

## Performance Optimizasyonları

- **Lazy Loading**: Görseller için gecikmiş yükleme
- **Code Splitting**: React lazy loading
- **Image Optimization**: WebP format desteği
- **Animation Performance**: GPU acceleration
- **Bundle Optimization**: Tree shaking ve minification

## Geliştirme Notları

### GSAP Animasyonları

```javascript
// Scroll-triggered animasyon örneği
gsap.timeline({
  scrollTrigger: {
    trigger: element,
    start: "top 60%",
    end: "bottom top",
    scrub: 1.2,
  },
});
```

### Responsive Breakpoints

```css
/* Tailwind CSS breakpoints */
sm: 640px   /* Küçük tablet */
md: 768px   /* Tablet */
lg: 1024px  /* Küçük desktop */
xl: 1280px  /* Desktop */
```

## Browser Desteği

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## Geliştirici

**Alperhan Barut**

- GitHub: [@alperhanbarut](https://github.com/alperhanbarut)
- LinkedIn: [Alperhan Barut](https://linkedin.com/in/alperhanbarut)

## Teşekkürler

- [GSAP](https://greensock.com/gsap/) - Animasyon kütüphanesi
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React](https://reactjs.org/) - UI kütüphanesi
- [Unsplash](https://unsplash.com/) - Görseller için

---

Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

---

_Kahve tutkusuyla geliştirilmiştir_
