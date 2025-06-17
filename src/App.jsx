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

  // Массив с событиями
  const events = [
    {
      id: 1,
      question: 'Будет ли доллар выше 100 ₽ до сентября?',
      ends: '01.09.2025',
      yes: 68,
      no: 32,
    },
    {
      id: 2,
      question: 'Останется ли Путин президентом после 2026?',
      ends: '31.12.2026',
      yes: 82,
      no: 18,
    },
    {
      id: 3,
      question: 'Запустит ли Илон Маск Neuralink в 2025?',
      ends: '30.11.2025',
      yes: 55,
      no: 45,
    },
  ];

  return (
    <div className="p-4 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">🔥 Актуальные события</h1>
      <div className="grid grid-cols-1 gap-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 bg-gray-100 rounded-xl shadow-md">
            <div className="text-lg font-semibold mb-1">🔮 {event.question}</div>
            <div className="text-sm text-gray-500 mb-2">Завершение: {event.ends}</div>

            <div className="flex justify-between items-center mb-2">
              <div className="text-green-600 font-semibold">✅ Да: {event.yes}%</div>
              <div className="text-red-600 font-semibold">❌ Нет: {event.no}%</div>
            </div>

            <div className="h-2 bg-gray-300 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-green-400 transition-all"
                style={{ width: `${event.yes}%` }}
              ></div>
            </div>

            <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition">
              Перейти к событию
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
