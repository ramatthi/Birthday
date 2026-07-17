import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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
            [
              "❤️",
              "💕",
              "Happy Birthday",
              "💖",
              "💗",
              "💝",
              "🎂",
              "🎉",
              "🎈",
              "✨",
              "💚",
              "💙",
            ][Math.floor(Math.random() * 12)]
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
      

        <h1
          style={{
            margin: 0,
            fontSize: "60px",
            lineHeight: 1.1,
            fontWeight: 700,
            fontFamily: "'Playfair Display', serif",
            background: "linear-gradient(135deg,#ff4d88,#ff8eb7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 4px 20px rgba(255,105,180,.2)",
          }}
        >
          A Birthday
          <br />
          Surprise
        </h1>

       <p
  style={{
    fontSize: "20px",
    marginTop: "25px",
    lineHeight: 1.8,
  }}
>
  Today isn't just your birthday...
  <br />
  <br />
  It's the beginning of a little journey,
  <br />
  filled with smiles, memories,
  <br />
  and a special surprise. 🎁✨
</p>

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 35px rgba(255,105,180,.8)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/birthday")}
          style={{
            marginTop: "35px",
            padding: "16px 45px",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: 700,
            background: "linear-gradient(135deg,#ff4d88,#ff80ab)",
            color: "#fff",
            letterSpacing: "1px",
            boxShadow: "0 12px 30px rgba(255,77,136,.35)",
          }}
        >
          Unwrap the Surprise
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;