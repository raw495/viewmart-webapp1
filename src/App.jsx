
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    tg?.ready();
    tg?.expand();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200">
      <div className="text-white text-6xl font-extrabold tracking-wide">VM</div>
    </div>
  );
}
