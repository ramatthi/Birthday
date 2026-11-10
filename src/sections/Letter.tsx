import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LETTER = `

Happiest Birthday, Babi! ❤️🎂

Wishing you a beautiful year ahead filled with happiness, good health, success and everything your heart wishes for. May life bring you countless reasons to smile, wonderful opportunities and all the happiness you truly deserve.

I hope this new chapter brings you peace, growth and beautiful moments. Keep smiling, keep shining and achieve everything you've always dreamed of.

There is one thing I genuinely want to tell you. Appatlo you showed me so much care, concern and affection, and the efforts you made for me were truly genuine. But unfortunately, because of my fears, certain situations and the way I handled things, I ended up hurting you a lot. I know you went through a really difficult phase because of me, and I won't deny that. I am genuinely sorry for the pain I caused you. Maybe I couldn't understand things properly back then, but that doesn't make what happened any less painful for you.

I don't expect anything from this message. I just didn't want your birthday to pass without wishing you and acknowledging the kindness you once showed me.

You deserve happiness, peace and all the beautiful things life has to offer.

Once again, Happiest Birthday, Babi! Take care and stay happy always ❤️
`;

const Letter = () => {
  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!open) {
      setTyped("");
      return;
    }

    let i = 0;

    const timer = setInterval(() => {
      i++;
      setTyped(LETTER.slice(0, i));

      if (i >= LETTER.length) clearInterval(timer);
    }, 25);

    return () => clearInterval(timer);
  }, [open]);

  return (
    <>
      <style>{`
        .letter-page {
  padding: 80px 20px;
  background: linear-gradient(180deg,#fff7fb,#ffe9f3,#fff7fb);
  display: flex;
  justify-content: center;
}

        .intro{
          text-align:center;
          max-width:650px;
        }

        .emoji{
          font-size:110px;
          margin-bottom:20px;
        }

        .title{
          font-size:3rem;
          color:#ff4f8b;
          margin-bottom:18px;
          font-weight:700;
        }

        .subtitle{
          font-size:1.2rem;
          color:#666;
          line-height:1.8;
          margin-bottom:40px;
        }

        .btn{
          border:none;
          cursor:pointer;
          border-radius:999px;
          padding:16px 42px;
          font-size:1rem;
          font-weight:700;
          color:#fff;
          background:linear-gradient(135deg,#ff4f8b,#ff83b5);
          box-shadow:0 15px 35px rgba(255,79,139,.25);
          transition:.3s;
        }

        .btn:hover{
          transform:translateY(-2px);
          box-shadow:0 20px 40px rgba(255,79,139,.35);
        }

        .letter-card{
          width:100%;
          max-width:820px;
          background:rgba(255,255,255,.78);
          backdrop-filter:blur(18px);
          border-radius:24px;
          padding:45px;
          box-shadow:0 25px 70px rgba(0,0,0,.12);
          border:1px solid rgba(255,255,255,.4);
        }

     .letter-heading{
  text-align:center;
  color:#d94b7b;
  font-size:2.5rem;
  font-family:'Playfair Display', serif;
  font-weight:700;
  letter-spacing:.5px;
}

        .letter-text{
          white-space:pre-wrap;
          line-height:1.9;
          font-size:1.08rem;
          color:#444;
          min-height:420px;
          font-family:inherit;
        }

        .cursor{
          display:inline-block;
          width:3px;
          height:22px;
          background:#ff4f8b;
          margin-left:3px;
          vertical-align:middle;
        }

        .footer{
          margin-top:35px;
          text-align:center;
        }

        .footer h3{
          color:#ff4f8b;
          font-size:2rem;
          margin-bottom:10px;
        }

        .footer p{
          color:#666;
          font-size:1.25rem;
          margin-bottom:30px;
        }

        @media (max-width:768px){

          .letter-card{
            padding:28px;
          }

          .title{
            font-size:2.2rem;
          }

          .letter-heading{
            font-size:1.8rem;
          }

          .letter-text{
            font-size:1rem;
            min-height:360px;
          }

          .emoji{
            font-size:90px;
          }
        }
      `}</style>

      <div className="letter-page">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.div
              key="intro"
              className="intro"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <motion.div
                className="emoji"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                💌
              </motion.div>

              <h1 className="title">A Special Surprise ❤️</h1>

              <p className="subtitle">
                A small birthday message,

                <br />
                written just for you. 💌
              </p>
              <motion.p
  className="click-hint"
  animate={{ y: [0, 5, 0], opacity: [0.7, 1, 0.7] }}
  transition={{ duration: 1.5, repeat: Infinity }}
>
  ↓ Click below to open your surprise ↓
</motion.p>

              <motion.button
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setOpen(true)}
              >
                A Special Message Awaits ✨
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              className="letter-card"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="letter-heading">
                A Special Birthday Wish 🎂
              </h2>

              <pre className="letter-text">
                {typed}
                <motion.span
                  className="cursor"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                  }}
                />
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Letter;