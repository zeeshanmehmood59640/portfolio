"use client";

import { useEffect, useState } from "react";

const SYMBOLS = [
  { text: "</>",   left: "6%",  top: "14%", duration: 18, delay: 0   },
  { text: "{}",    left: "84%", top: "20%", duration: 22, delay: 2   },
  { text: "[]",    left: "76%", top: "46%", duration: 16, delay: 4   },
  { text: "=>",    left: "13%", top: "56%", duration: 24, delay: 1   },
  { text: "#",     left: "87%", top: "68%", duration: 20, delay: 3   },
  { text: "const", left: "3%",  top: "78%", duration: 19, delay: 5   },
  { text: "async", left: "78%", top: "33%", duration: 21, delay: 1.5 },
  { text: "101",   left: "51%", top: "86%", duration: 26, delay: 0.5 },
  { text: "npm",   left: "59%", top: "16%", duration: 17, delay: 3.5 },
  { text: "//",    left: "31%", top: "63%", duration: 23, delay: 2.5 },
  { text: "<div>", left: "21%", top: "28%", duration: 15, delay: 4.5 },
  { text: "git",   left: "69%", top: "53%", duration: 20, delay: 1   },
];

export function ParallaxSymbols() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Defer mount until after hydration so symbols never affect LCP
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none select-none z-[2]"
      aria-hidden="true"
    >
      {SYMBOLS.map((s, i) => (
        <span
          key={i}
          className="absolute font-mono font-bold text-indigo-600/10 dark:text-indigo-300/25 animate-float"
          style={{
            left: s.left,
            top: s.top,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          {s.text}
        </span>
      ))}
    </div>
  );
}
