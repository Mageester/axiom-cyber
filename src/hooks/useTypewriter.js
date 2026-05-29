import { useEffect, useState } from 'react';

export default function useTypewriter(
  lines,
  { charDelay = 18, lineDelay = 280, enabled = true, resetKey = 0 } = {},
) {
  const [lineIndex, setLineIndex] = useState(enabled ? 0 : lines.length);
  const [charIndex, setCharIndex] = useState(0);
  const [prevResetKey, setPrevResetKey] = useState(resetKey);

  if (prevResetKey !== resetKey) {
    setPrevResetKey(resetKey);
    setLineIndex(enabled ? 0 : lines.length);
    setCharIndex(0);
  }

  useEffect(() => {
    if (!enabled || lineIndex >= lines.length) return undefined;

    const current = lines[lineIndex]?.text ?? '';
    if (charIndex < current.length) {
      const timer = window.setTimeout(() => setCharIndex((c) => c + 1), charDelay);
      return () => clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, lineDelay);
    return () => clearTimeout(timer);
  }, [charDelay, charIndex, enabled, lineDelay, lineIndex, lines]);

  const done = !enabled || lineIndex >= lines.length;

  if (!enabled) {
    return { visibleLines: lines, done: true, lineIndex: lines.length, charIndex: 0 };
  }

  const visibleLines = lines.slice(0, lineIndex).map((line) => ({
    ...line,
    text: line.text,
  }));

  if (lineIndex < lines.length) {
    const partial = lines[lineIndex];
    visibleLines.push({
      ...partial,
      text: partial.text.slice(0, charIndex),
      active: true,
    });
  }

  return { visibleLines, done, lineIndex, charIndex };
}
