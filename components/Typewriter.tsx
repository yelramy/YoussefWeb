"use client";
import { useEffect, useState } from "react";

export default function Typewriter({
  words,
  typingSpeed = 120,
  pause = 2000
}: {
  words: string[];
  typingSpeed?: number;
  pause?: number;
}) {
  const [idx,      setIdx]      = useState(0);
  const [display,  setDisplay]  = useState("");
  const [forward,  setForward]  = useState(true);

  useEffect(() => {
    const word = words[idx % words.length];

    if (forward) {
      if (display.length < word.length) {
        const t = setTimeout(
          () => setDisplay(word.slice(0, display.length + 1)),
          typingSpeed
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setForward(false), pause);
      return () => clearTimeout(t);
    } else {
      if (display.length) {
        const t = setTimeout(
          () => setDisplay(word.slice(0, display.length - 1)),
          typingSpeed / 2
        );
        return () => clearTimeout(t);
      }
      setForward(true);
      setIdx((i) => (i + 1) % words.length);
    }
  }, [display, forward, idx, words, typingSpeed, pause]);

  return <span>{display}<span className="opacity-70">|</span></span>;
}
