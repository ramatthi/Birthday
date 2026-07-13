import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg,#ff9ec4,#ffd6e7,#fff5fa)",
      }}
    >
      {/* Floating Background */}
      {Array.from({ length: 40 }).map((_, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            fontSize: `${20 + Math.random() * 25}px`,
            left: `${Math.random() * 100}%`,
            bottom: "-50px",
            pointerEvents: "none",
          }}
          animate={{
            y: [-20, -window.innerHeight - 200],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {
            ["❤️","💕","💖","💗","💝","🎂","🎉","🎈","✨","🌸","🌹"][
              Math.floor(Math.random() * 11)
            ]
          }
        </motion.div>
      ))}

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          width: "450px",
          padding: "50px",
          borderRadius: "30px",
          textAlign: "center",
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.25)",
          border: "1px solid rgba(255,255,255,0.4)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
          zIndex: 10,
        }}
      >
        <div style={{ fontSize: "55px", marginBottom: "20px" }}>
          🎂 🎉
        </div>

        <h1
          style={{
            fontSize: "52px",
            margin: 0,
            lineHeight: 1.2,
            fontWeight: 700,
          }}
        >
          Happy Birthday
          
        </h1>

        <p
          style={{
            fontSize: "20px",
            marginTop: "25px",
            lineHeight: 1.7,
          }}
        >
          Today is all about you —
          <br />
          the most special person in my world ✨
        </p>

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 35px rgba(255,255,255,0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: "35px",
            padding: "16px 40px",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          Let's Go ❤️
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;