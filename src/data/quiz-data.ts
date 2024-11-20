import { Question } from '../types/quiz';

export const quizData: Question[] = [
  {
    id: 0,
    question: "Harry Potter'ın asası hangi kuşun tüyünden oluşmuştur?",
    answers: [
      { id: 0, answer: "Güvercin", correct_answer: false },
      { id: 1, answer: "Anka Kuşu", correct_answer: true },
      { id: 2, answer: "Kartal", correct_answer: false },
      { id: 3, answer: "Baykuş", correct_answer: false }
    ]
  },
  {
    id: 1,
    question: "Yüzüklerin Efendisi filminde Yüzük Kardeşliği kaç kişiden oluşur?",
    answers: [
      { id: 0, answer: "7", correct_answer: false },
      { id: 1, answer: "8", correct_answer: false },
      { id: 2, answer: "9", correct_answer: true },
      { id: 3, answer: "10", correct_answer: false }
    ]
  },
  {
    id: 2,
    question: "Matrix filminde Neo'ya hangi renk haplar sunulur?",
    answers: [
      { id: 0, answer: "Mavi ve Yeşil", correct_answer: false },
      { id: 1, answer: "Kırmızı ve Mavi", correct_answer: true },
      { id: 2, answer: "Sarı ve Mavi", correct_answer: false },
      { id: 3, answer: "Kırmızı ve Yeşil", correct_answer: false }
    ]
  },
  {
    id: 3,
    question: "Hangi film 11 Oscar ödülü kazanarak Titanik ve Ben-Hur ile birlikte rekor kırmıştır?",
    answers: [
      { id: 0, answer: "Forrest Gump", correct_answer: false },
      { id: 1, answer: "Yüzüklerin Efendisi: Kralın Dönüşü", correct_answer: true },
      { id: 2, answer: "Gladyatör", correct_answer: false },
      { id: 3, answer: "Avatar", correct_answer: false }
    ]
  },
  {
    id: 4,
    question: "Star Wars: Empire Strikes Back filminde Darth Vader'ın söylediği ünlü replik nedir?",
    answers: [
      { id: 0, answer: "Luke, ben senin babayım", correct_answer: false },
      { id: 1, answer: "Hayır, ben senin babanım", correct_answer: true },
      { id: 2, answer: "Luke, gerçeği biliyorsun", correct_answer: false },
      { id: 3, answer: "Güç seninle olsun", correct_answer: false }
    ]
  },
  {
    id: 5,
    question: "Inception filminde karakterler rüyada olduklarını nasıl kontrol ederler?",
    answers: [
      { id: 0, answer: "Toteme bakarak", correct_answer: true },
      { id: 1, answer: "Saate bakarak", correct_answer: false },
      { id: 2, answer: "Aynaya bakarak", correct_answer: false },
      { id: 3, answer: "Fotoğraflara bakarak", correct_answer: false }
    ]
  },
  {
    id: 6,
    question: "Pulp Fiction filminde Vincent ve Jules'un çaldıkları çantanın içinde ne vardır?",
    answers: [
      { id: 0, answer: "Para", correct_answer: false },
      { id: 1, answer: "Elmas", correct_answer: false },
      { id: 2, answer: "Bilinmiyor (Hiç gösterilmez)", correct_answer: true },
      { id: 3, answer: "Uyuşturucu", correct_answer: false }
    ]
  },
  {
    id: 7,
    question: "The Dark Knight filminde Joker rolünü canlandıran oyuncu kimdir?",
    answers: [
      { id: 0, answer: "Jack Nicholson", correct_answer: false },
      { id: 1, answer: "Heath Ledger", correct_answer: true },
      { id: 2, answer: "Jared Leto", correct_answer: false },
      { id: 3, answer: "Joaquin Phoenix", correct_answer: false }
    ]
  },
  {
    id: 8,
    question: "Fight Club filminin ilk kuralı nedir?",
    answers: [
      { id: 0, answer: "Dövüş kulübü hakkında konuşmamak", correct_answer: true },
      { id: 1, answer: "Her zaman dürüst olmak", correct_answer: false },
      { id: 2, answer: "Asla pes etmemek", correct_answer: false },
      { id: 3, answer: "Kurallara uymak", correct_answer: false }
    ]
  },
  {
    id: 9,
    question: "Forrest Gump'ın ünlü sözü nedir?",
    answers: [
      { id: 0, answer: "Hayat bir kutudur", correct_answer: false },
      { id: 1, answer: "Hayat bir çikolata kutusudur", correct_answer: false },
      { id: 2, answer: "Hayat bir çikolata kutusuna benzer", correct_answer: true },
      { id: 3, answer: "Hayat tatlı bir kutudur", correct_answer: false }
    ]
  }
];