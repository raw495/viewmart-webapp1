import { useEffect, useState } from 'react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    tg?.ready();
    tg?.expand();
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="flex items-center justify-center h-screen bg-blue-200">
        <div className="text-white text-6xl font-extrabold tracking-wide">VM</div>
      </div>
    );
  }

  const events = [
    {
      id: 1,
      question: 'Будет ли доллар выше 100 ₽ до сентября?',
      yes: 68,
      no: 32,
    },
    {
      id: 2,
      question: 'Останется ли Путин президентом после 2026?',
      yes: 82,
      no: 18,
    },
    {
      id: 3,
      question: 'Запустит ли Илон Маск Neuralink в 2025?',
      yes: 55,
      no: 45,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4">
    <h1 className="text-2xl text-white font-bold mb-6 text-center">
      🔥 Актуальные события
    </h1>

    <div className="space-y-4">
      {events.map((e) => (
        <div key={e.id} className="relative p-4 bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Плашка вероятности */}
          <div className="absolute top-2 right-2 w-16 h-6 rounded-full bg-gray-600 overflow-hidden border border-white/20">
            <div
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${e.yes}%` }}
            ></div>
            <div className="absolute inset-0 text-xs font-bold text-white flex items-center justify-center">
              {e.yes}%
            </div>
          </div>

          {/* Вопрос */}
          <h3 className="text-xl text-white font-bold mb-2">{e.question}</h3>

          {/* Заглушка графика */}
          <div className="h-12 bg-gray-700 rounded-md mb-2 flex items-center justify-center text-gray-400">
            📈 График
          </div>

          {/* Проценты Да / Нет */}
          <div className="flex justify-between text-white mb-2">
            <span className="text-green-400">✅ Да: {e.yes}%</span>
            <span className="text-red-400">❌ Нет: {e.no}%</span>
          </div>

          <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
            Перейти к событию
          </button>
        </div>
      ))}
    </div>
  </div>
);