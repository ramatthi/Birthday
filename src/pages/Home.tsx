import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Ambient floating hearts, kept sparse and soft so the gift box stays the focal point
  const floatingHearts = Array.from({ length: 22 });

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        background:
          "radial-gradient(120% 90% at 50% 0%, #2a1220 0%, #180a14 45%, #0d060d 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Dancing+Script:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap');

        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes drift {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      {/* Warm bokeh glows */}
      {[
        { top: "8%", left: "12%", size: 160, color: "rgba(255,183,120,0.18)" },
        { top: "68%", left: "8%", size: 220, color: "rgba(255,120,150,0.15)" },
        { top: "15%", left: "82%", size: 200, color: "rgba(255,150,110,0.16)" },
        { top: "75%", left: "85%", size: 180, color: "rgba(255,105,150,0.14)" },
        { top: "42%", left: "50%", size: 340, color: "rgba(255,140,100,0.10)" },
      ].map((glow, i) => (
        <div
          key={`glow-${i}`}
          style={{
            position: "absolute",
            top: glow.top,
            left: glow.left,
            width: glow.size,
            height: glow.size,
            borderRadius: "50%",
            background: glow.color,
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Tiny twinkling sparkle dots scattered across the scene */}
      {Array.from({ length: 35 }).map((_, i) => (
        <div
          key={`spark-${i}`}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: 3 + Math.random() * 3,
            height: 3 + Math.random() * 3,
            borderRadius: "50%",
            background: "#ffd9a0",
            boxShadow: "0 0 6px 2px rgba(255,217,160,0.6)",
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Softly floating hearts */}
      {floatingHearts.map((_, index) => (
        <motion.div
          key={`heart-${index}`}
          style={{
            position: "absolute",
            fontSize: `${14 + Math.random() * 18}px`,
            left: `${Math.random() * 100}%`,
            bottom: "-40px",
            opacity: 0.55,
            pointerEvents: "none",
            filter: "drop-shadow(0 0 6px rgba(255,110,150,0.4))",
          }}
          animate={{
            y: [0, -700],
            x: [0, Math.random() * 60 - 30],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 8,
          }}
        >
          {["💗", "💕", "🩷", "❤️"][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}

      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "relative",
          zIndex: 5,
          maxWidth: 560,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "42px",
            fontWeight: 700,
            margin: 0,
            background: "linear-gradient(135deg,#ff5f8f,#ff9bb8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Shhh...
        </p>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#fbf1ec",
            margin: "6px 0 0",
            lineHeight: 1.2,
          }}
        >
          <span style={{ fontSize: "46px", fontWeight: 700, display: "block" }}>
            A Birthday Surprise
          </span>
          <span
            style={{
              fontSize: "26px",
              fontWeight: 500,
              fontStyle: "italic",
              opacity: 0.85,
              display: "block",
              marginTop: "4px",
            }}
          >
            is waiting for you
          </span>
        </h1>

        {/* divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            margin: "22px 0",
          }}
        >
          <span style={{ width: 60, height: 1, background: "rgba(255,150,180,0.4)" }} />
          <span style={{ color: "#ff8fab", fontSize: "14px" }}>♡</span>
          <span style={{ width: 60, height: 1, background: "rgba(255,150,180,0.4)" }} />
        </div>

        <p
          style={{
            color: "rgba(255,240,235,0.75)",
            fontSize: "16px",
            lineHeight: 1.7,
            fontWeight: 300,
            margin: "0 0 36px",
          }}
        >
          Today isn't just your birthday — it's the start of a little journey
          filled with smiles, memories, and a special surprise made just for
          you. 🎁
        </p>

        {/* Glowing gift box */}
        <div
          style={{
            position: "relative",
            width: 220,
            margin: "0 auto 30px",
            animation: "drift 5s ease-in-out infinite",
          }}
        >
          <svg viewBox="0 0 220 200" width="100%" style={{ overflow: "visible" }}>
            <defs>
              <radialGradient id="glow" cx="50%" cy="30%" r="60%">
                <stop offset="0%" stopColor="rgba(255,220,150,0.9)" />
                <stop offset="60%" stopColor="rgba(255,150,120,0.25)" />
                <stop offset="100%" stopColor="rgba(255,150,120,0)" />
              </radialGradient>
              <linearGradient id="boxFront" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7a2438" />
                <stop offset="100%" stopColor="#4a1424" />
              </linearGradient>
              <linearGradient id="lidGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8f2c44" />
                <stop offset="100%" stopColor="#5c1a2c" />
              </linearGradient>
            </defs>

            {/* light burst from the box */}
            <ellipse cx="110" cy="90" rx="95" ry="70" fill="url(#glow)" />

            {/* box body */}
            <rect x="45" y="120" width="130" height="70" rx="4" fill="url(#boxFront)" />
            <rect x="45" y="120" width="130" height="10" fill="#3a0f1c" opacity="0.5" />
            <path
              d="M105 120 L115 120 L115 190 L105 190 Z"
              fill="rgba(255,190,150,0.5)"
            />
            {/* heart on the front */}
            <text
              x="110"
              y="165"
              textAnchor="middle"
              fontSize="20"
              fill="rgba(255,180,190,0.7)"
            >
              ♥
            </text>

            {/* open lid, tilted back */}
            <g transform="rotate(-18 60 108)">
              <rect x="30" y="95" width="150" height="24" rx="6" fill="url(#lidGrad)" />
            </g>

            {/* ribbon bow */}
            <circle cx="95" cy="98" r="10" fill="#ffb3c6" opacity="0.9" />
            <circle cx="118" cy="96" r="11" fill="#ff8fab" opacity="0.9" />
            <circle cx="107" cy="98" r="6" fill="#ffe3ea" />

            {/* sparkles around the opening */}
            <text x="150" y="80" fontSize="14" fill="#ffe6b3">✦</text>
            <text x="65" y="70" fontSize="10" fill="#ffe6b3">✦</text>
            <text x="130" y="55" fontSize="16" fill="#ffd9a0">✧</text>
            <text x="75" y="45" fontSize="12" fill="#ffd9a0">✧</text>
          </svg>
        </div>

        <div>
          <motion.button
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 40px rgba(255,105,150,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/birthday")}
            style={{
              padding: "16px 42px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              fontSize: "17px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              color: "#fff",
              background: "linear-gradient(135deg,#ff4d7d,#ff7fa4)",
              boxShadow: "0 12px 28px rgba(255,77,125,0.4)",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Unwrap the Surprise
            <span style={{ fontSize: "18px" }}>→</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;