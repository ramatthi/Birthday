import { motion } from "framer-motion";

const Final = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#5a0b45 0%,#24001d 45%,#0f0010 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "clamp(68px,8vw,110px)",
            color: "#ff73ad",
            margin: 0,
            fontWeight: 400,
            fontFamily: "Georgia, serif",
            textShadow: "0 0 30px rgba(255,105,180,.35)",
          }}
        >
          Happy Birthday
        </motion.h1>
        l

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            color: "#fff",
            fontSize: "clamp(28px,3vw,50px)",
            fontWeight: 400,
            marginBottom: "45px",
            fontFamily: "Georgia, serif",
          }}
        >
          May This Year Bring You Endless Happiness
        </motion.h2>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            margin: "auto",
            maxWidth: "850px",
            padding: "75px",
            borderRadius: "28px",
            background: "rgba(255,255,255,.12)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,.15)",
            boxShadow: "0 25px 60px rgba(0,0,0,.35)",
          }}
        >
          <p
            style={{
              color: "#f7dbe8",
              fontSize: "22px",
              lineHeight: 1.9,
              marginBottom: "35px",
            }}
          >
            Thank you for taking the time to explore this
            little birthday surprise.
            <br />
            <br />
            I hope it brought a smile to your face and made
            your special day even more memorable.
          </p>

          <h3
            style={{
              color: "#ff82b6",
              fontSize: "44px",
              marginBottom: "18px",
              fontFamily: "Georgia, serif",
              fontWeight: 400,
            }}
          >
            Once Again...
          </h3>

          <p
            style={{
              color: "#fff",
              fontSize: "34px",
              fontWeight: 600,
              marginBottom: "40px",
            }}
          >
            Happy Birthday, Pravallika!
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,105,180,.45)",
            }}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: "16px 55px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              background:
                "linear-gradient(135deg,#ff4d88,#ff7eb3)",
              color: "#fff",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            Best Wishes
          </motion.button>

          {/* Signature */}
          <div
            style={{
              marginTop: "35px",
              color: "rgba(255,255,255,.7)",
              fontSize: "14px",
              letterSpacing: ".6px",
              lineHeight: 1.8,
            }}
          >
            <div
              style={{
                width: "70px",
                height: "2px",
                background: "rgba(255,255,255,.25)",
                margin: "0 auto 18px",
              }}
            />

            Made with ❤️
            <br />


            <span style={{ marginLeft: "8px", fontStyle: "italic" }}>
              Especially for You
            </span>
          </div>

        </motion.div>
      </motion.div>
    </div>
  );
};

export default Final;