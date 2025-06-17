
import { useEffect, useState } from 'react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    tg?.ready();
    tg?.expand();

    const timer = setTimeout(() => setShowSplash(false), 2000); // через 2 сек переключение
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full transition-all duration-700">
      {showSplash ? (
        <div className="flex items-center justify-center h-full bg-blue-200">
          <div className="text-white text-6xl font-extrabold tracking-wide">VM</div>
        </div>
      ) : (
        <div className="p-4 bg-white">
          <h1 className="text-2xl font-bold mb-4">📊 Актуальные события</h1>
          <ul className="space-y-3">
            <li className="p-4 bg-gray-100 rounded-xl shadow-sm">
              Будет ли рубль ниже 100 к доллару до сентября?
            </li>
            <li className="p-4 bg-gray-100 rounded-xl shadow-sm">
              Останется ли Путин президентом до 2026?
            </li>
            <li className="p-4 bg-gray-100 rounded-xl shadow-sm">
              Запустит ли Илон Маск Neuralink в 2025?
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
