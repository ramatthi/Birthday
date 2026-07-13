// @ts-ignore: allow importing CSS without type declarations
import "./Floating.css";

const emojis = [
  "❤️",
  "💕",
  "💖",
  "💗",
  "💝",
  "🎉",
  "🎂",
  "🎈",
  "🌸",
  "🌹",
  "🌷",
  "✨",
  "⭐",
  "🦋",
  "🎁",
];

export default function FloatingBackground() {
  return (
    <div className="floating-container">
      {Array.from({ length: 40 }).map((_, index) => {
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];

        return (
          <span
            key={index}
            className="floating"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 12}s`,
              animationDelay: `${Math.random() * 8}s`,
              fontSize: `${18 + Math.random() * 25}px`
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}