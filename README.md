# Film Quiz Uygulaması

Next.js ve TypeScript ile geliştirilmiş, popüler filmler hakkında sorular içeren bir quiz uygulaması.

## Özellikler

- 10 adet film sorusu
- Mobil uyumlu tasarım
- Soru navigasyonu
- Anlık bildirimler
- Skor takibi
- Quiz'i yeniden başlatma özelliği

## Kullanılan Teknolojiler

- Next.js 15
- TypeScript
- Tailwind CSS
- React Toastify

## Kurulum

1. Projeyi klonlayın
```bash
git clone https://github.com/ahmet989g/film-quiz-app.git
```

2. Proje dizinine gidin
```bash
cd film-quiz-app
```

3. Bağımlılıkları yükleyin
```bash
npm install
```

4. Geliştirme sunucusunu başlatın
```bash
npm run dev
```

5. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın

## Proje Yapısı

```
quiz-app/
├── src/
│   ├── app/
│   ├── components/
│   ├── types/
│   └── data/
```

## Bileşenler

- `QuizContainer`: Ana quiz bileşeni
- `QuestionList`: Soru listesi
- `Question`: Soru gösterimi
- `AnswerOption`: Cevap seçenekleri
- `QuizResult`: Sonuç ekranı
- `Header`: Uygulama başlığı