import React, { useEffect, useRef, useState } from "react";


const calendar = [
  "", "", "", "1", "2", "3", "4",
  "5", "6", "7", "8", "9", "10", "11",
  "12", "13", "14", "15", "16", "17", "18",
  "19", "20", "21", "22", "23", "24", "25",
  "26", "27", "28", "29", "30", "31",
];

// Scroll-reveal helper (framer-motion isn't used here).
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Reveal = ({ children, className, style }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity .8s ease, transform .8s ease",
      }}
    >
      {children}
    </div>
  );
};

const heroPhotos = [
  { src: "/asserts/image1.jpg", cls: "polaroid-a" },
  { src: "/asserts/image2.jpg", cls: "polaroid-b" },
  { src: "/asserts/image4.jpg", cls: "polaroid-c" },
  { src: "/asserts/image3.jpg", cls: "polaroid-d" },
];

const glimpsePhotos = [
  "/asserts/Glimpse1.jpg",
  "/asserts/Glimpse2.jpg",
  "/asserts/Glimpse3.jpg",
  "/asserts/Glimpse4.jpg",
  "/asserts/Glimpse5.jpg",
  "/asserts/Glimpse6.jpg",
  "/asserts/Glimpse7.jpg",
  "/asserts/Glimpse9.jpg",
];



const StringLights = () => (
  <svg
    viewBox="0 0 1000 90"
    preserveAspectRatio="none"
    className="fairy-lights"
    aria-hidden="true"
  >
    <path
      d="M0,10 Q125,90 250,20 T500,25 T750,15 T1000,25"
      fill="none"
      stroke="#3a2f27"
      strokeWidth="2"
    />
    {[40, 140, 250, 350, 460, 560, 670, 770, 880, 970].map((x, i) => {
      const y = 20 + Math.sin(i) * 25 + 15;
      return (
        <circle
          key={x}
          cx={x}
          cy={y}
          r="7"
          fill="#ffcf7a"
          className="fairy-bulb"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      );
    })}
  </svg>
);

const HeartDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 90" className={className} aria-hidden="true">
    <path
      d="M50 82 C10 55 4 30 20 16 C32 6 46 12 50 26 C54 12 68 6 80 16 C96 30 90 55 50 82 Z"
      fill="none"
      stroke="#ff88ac"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Gallery = () => {
  return (
    <div className="bday-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Great+Vibes&family=Poppins:wght@400;500;600;700&display=swap');

        .bday-page {
          font-family: 'Poppins', sans-serif;
          background: #fdf3ee;
          overflow-x: hidden;
        }

        /* ---------- HERO ---------- */
        .hero {
          position: relative;
          background: radial-gradient(ellipse at top, #241c18 0%, #14100d 70%);
          padding: 60px 60px 90px;
          overflow: hidden;
        }
        .fairy-lights {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 70px;
        }
          .polaroid{
    transition:.35s ease;
}

.polaroid:hover{
    transform:translateY(-12px) scale(1.04) rotate(0deg);
    z-index:10;
}
        .fairy-bulb {
          filter: drop-shadow(0 0 6px #ffcf7a);
          animation: flicker 2.4s ease-in-out infinite;
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: .55; }
        }
        .hero-grid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 40px;
          align-items: center;
          max-width: 1300px;
          margin: 40px auto 0;
        }
        .hero-eyebrow {
          color: #ff4d88;
          font-size: 13px;
          letter-spacing: 3px;
          font-weight: 600;
          margin-bottom: 14px;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          font-weight: 600;
          color: #fbeee6;
          line-height: 1.05;
          margin: 0;
        }
        .hero-title span {
          display: block;
          font-family: 'Great Vibes', cursive;
          color: #ff5f95;
          font-size: 1.35em;
          font-weight: 400;
        }
        .hero-sub {
          color: #cdbfb7;
          font-size: 17px;
          line-height: 1.7;
          max-width: 420px;
          margin: 22px 0 30px;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ff4d88;
          color: #fff;
          border: none;
          padding: 15px 28px;
          border-radius: 30px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 12px 30px rgba(255,77,136,.35);
          transition: transform .25s ease;
        }
        .hero-cta:hover { transform: translateY(-3px); }

        .collage {
          position: relative;
          width: 100%;
          padding-top: 95%;
        }
        @media (min-width: 901px) {
          .collage {
            max-width: 640px;
            padding-top: 105%;
            margin-left: auto;
          }
        }
        .polaroid {
          position: absolute;
          background: #fdfaf6;
          padding: 10px 10px 34px;
          border-radius: 4px;
          box-shadow: 0 20px 35px rgba(0,0,0,.35);
        }
        .polaroid img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 2px;
        }
        .polaroid::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%) rotate(-3deg);
          width: 44px;
          height: 18px;
          background: rgba(230,220,205,.85);
        }
        .polaroid-a { top: 2%;  left: 0%;   width: 40%; height: 34%; transform: rotate(-9deg); z-index: 1; }
        .polaroid-b { top: 0%;  left: 56%;  width: 42%; height: 36%; transform: rotate(7deg);  z-index: 1; }
        .polaroid-c { top: 30%; left: 24%;  width: 46%; height: 40%; transform: rotate(-2deg); z-index: 3; }
        .polaroid-d { top: 46%; left: -2%;  width: 40%; height: 34%; transform: rotate(6deg);  z-index: 2; }
        .heart-doodle { position: absolute; width: 90px; bottom: 4%; right: 2%; z-index: 4; }
        .heart-mini { position: absolute; width: 26px; opacity: .8; }
        .heart-mini.one { top: 6%; left: 44%; }
        .heart-mini.two { top: 40%; right: 6%; }

        /* ---------- FEATURES ---------- */
        .features {
          background: #fdf3ee;
          padding: 60px 60px 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .feature-item { position: relative; padding: 0 10px; }
        .feature-item:not(:first-child)::before {
          content: "";
          position: absolute;
          left: -10px; top: 8px; bottom: 8px;
          width: 1px;
          background: #e7d9d1;
        }
        .feature-icon {
          width: 56px; height: 56px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
        }
        .feature-title { font-size: 16px; font-weight: 600; color: #2f221c; margin-bottom: 6px; }
        .feature-text { font-size: 13.5px; color: #8a7a71; line-height: 1.5; }

        /* ---------- CALENDAR + QUOTE ---------- */
        .cal-section {
          padding: 50px 60px 90px;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 50px;
          max-width: 1200px;
          margin: 0 auto;
          align-items: center;
        }
        .cal-card {
          background: #fff;
          border-radius: 22px;
          padding: 28px;
          box-shadow: 0 25px 60px rgba(0,0,0,.06);
        }
        .cal-header {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px; font-weight: 600; color: #ff4d88;
          margin-bottom: 20px;
        }
        .cal-weekrow {
          display: grid; grid-template-columns: repeat(7,1fr);
          text-align: center; font-size: 13px; color: #9c8e86; margin-bottom: 10px;
        }
        .cal-days { display: grid; grid-template-columns: repeat(7,1fr); gap: 6px; }
        .cal-cell {
          aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center;
          font-size: clamp(11px, 2.6vw, 14px); color: #4a3f3a; border-radius: 10px;
        }
        .cal-cell.today { color: #ff4d88; font-weight: 700; }
        .cal-cell.bday {
          background: #ff4d88; color: #fff; border-radius: 50%; font-weight: 700;
        }

        .quote-side { display: flex; flex-direction: column; align-items: flex-start; gap: 20px; }
        .quote-mark { font-size: 46px; color: #ff4d88; line-height: 0; font-family: Georgia, serif; }
        .quote-text {
          font-size: 20px; color: #4a3f3a; line-height: 1.7; max-width: 420px;
        }
        .quote-underline { width: 60px; height: 2px; background: #ff4d88; margin-top: -6px; }
        .flower-photo {
          width: 100%; max-width: 420px; border-radius: 18px; object-fit: cover; height: 220px;
          margin-top: 10px;
        }

        /* ---------- GLIMPSE GALLERY ---------- */
        .glimpse {
          background: #fff5ef;
          padding: 70px 60px 90px;
        }
        .glimpse-head { text-align: left; max-width: 1200px; margin: 0 auto 40px; }
        .glimpse-title {
          font-family: 'Cormorant Garamond', serif; font-size: 34px; color: #2f221c; margin: 0 0 8px;
          display: flex; align-items: center; gap: 10px;
        }
        .glimpse-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .g-polaroid {
          background: #fff; padding: 8px 8px 26px; border-radius: 4px;
          box-shadow: 0 15px 30px rgba(0,0,0,.08);
          transition: transform .3s ease;
        }
        .g-polaroid:nth-child(odd) { transform: rotate(-3deg); }
        .g-polaroid:nth-child(even) { transform: rotate(3deg); }
        .g-polaroid:hover { transform: rotate(0deg) scale(1.04); z-index: 2; }
        .g-polaroid img { width: 100%; height: 250px; object-fit: cover; border-radius: 2px; display: block; }
        .glimpse-caption {
          text-align: center; font-style: italic; color: #8a7a71; margin-top: 40px; font-size: 15px;
        }

        /* ---------- CLOSING QUOTE ---------- */
        .closing {
          background: #14100d;
          padding: 80px 30px;
          text-align: center;
        }
        .closing-mark { color: #ff4d88; font-size: 40px; font-family: Georgia, serif; }
        .closing-text {
          color: #f3e9e3; font-size: 22px; max-width: 640px; margin: 10px auto 0; line-height: 1.7;
          font-family: 'Cormorant Garamond', serif;
        }
        .closing-underline { width: 70px; height: 2px; background: #ff4d88; margin: 18px auto 0; }

        /* ---------- RESPONSIVE ---------- */
        @media (max-width: 900px) {
          .hero { padding: 40px 24px 50px; }
          .hero-grid { grid-template-columns: 1fr; gap: 30px; }
          .hero-title { font-size: 42px; text-align: center; }
          .hero-eyebrow, .hero-sub { text-align: center; margin-left: auto; margin-right: auto; }
          .hero-cta { margin: 0 auto; }
          .collage { max-width: 380px; margin: 10px auto 0; padding-top: 100%; }

          .features {
            padding: 40px 24px 10px;
            grid-template-columns: repeat(2, 1fr);
            row-gap: 30px;
          }
          .feature-item:nth-child(odd)::before { display: none; }

          .cal-section { padding: 40px 24px 60px; grid-template-columns: 1fr; gap: 30px; }
          .quote-side { align-items: center; text-align: center; }
          .quote-text { max-width: 100%; }
          .flower-photo { max-width: 100%; }

          .glimpse { padding: 50px 24px 60px; }
          .glimpse-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
          .g-polaroid img { height: 130px; }

          .closing-text { font-size: 18px; }
        }
          html, body {
  overflow-x: hidden;
  width: 100%;
}
      `}</style>

      {/* HERO */}
      <section className="hero">
        <StringLights />
        <div className="hero-grid">
          <div>
            {/* <p className="hero-eyebrow">JUST FOR YOU</p> */}
            <h1 className="hero-title">
              <span
                style={{
                  display: "block",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "4rem",
                  color: "#fdf5ef",
                  lineHeight: 1,
                  fontWeight: 600,
                }}
              >
                Happy
              </span>

              <span
                style={{
                  display: "block",
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "5.5rem",
                  color: "#ff5f95",
                  lineHeight: 0.9,
                  marginTop: "8px",
                }}
              >
                Birthday ♡
              </span>

              <span
                style={{
                  display: "block",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "4.4rem",
                  fontWeight: 700,
                  color: "#FFD6E5",
                  marginTop: "18px",
                  letterSpacing: "2px",
                  textShadow: "0 3px 12px rgba(255,95,149,.25)",
                }}
              >
                Pravallika Jessie
              </span>
            </h1>

            <p
              style={{
                color: "#E8D9CF",
                fontSize: "1.15rem",
                lineHeight: 1.9,
                maxWidth: "470px",
                marginTop: "28px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              May your smile shine brighter, your dreams grow bigger, and your heart always be filled with happiness. ✨
            </p>
            {/* <p
              style={{
                color: "#E8D9CF",
                fontSize: "1.15rem",
                lineHeight: 1.9,
                maxWidth: "470px",
                marginTop: "28px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              ────────────<br></br>
              Made with ❤️ especially for you
            </p> */}

          </div>

          <div className="collage">
            {heroPhotos.map((p) => (
              <div key={p.src} className={`polaroid ${p.cls}`}>
                <img src={p.src} alt="" />
              </div>
            ))}
            <HeartDoodle className="heart-doodle" />
            <HeartDoodle className="heart-mini one" />
            <HeartDoodle className="heart-mini two" />
          </div>
        </div>
      </section>

      {/* CALENDAR + QUOTE */}
      <Reveal className="cal-section" style={{ display: "grid" }}>
        <div className="cal-card">
          <div className="cal-header">✦ July 2026 ✦</div>
          <div className="cal-weekrow">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>
          <div className="cal-days">
            {calendar.map((day, i) => {
              if (day === "") return <div key={i} />;

              const isBday = day === "20";
              return (
                <div
                  key={i}
                  className={`cal-cell  ${isBday ? "bday" : ""}`}
                >
                  {isBday ? "20" : day}
                </div>
              );
            })}
          </div>
        </div>

        <div className="quote-side">
          <div>
            <span className="quote-mark">"</span>
            <p className="quote-text">
              Today is all about celebrating you.
              <br />
              <br />
              May this birthday bring happiness, beautiful memories,
              and countless reasons to smile.
              <br />
              <br />
              Queens are born in July,
              and today the crown shines a little brighter. 👑
            </p>

          </div>
          {/* <img className="flower-photo" src="/photos/flowers.jpg" alt="" /> */}
        </div>
      </Reveal>

      {/* GLIMPSE OF US */}
      <section className="glimpse">
        <Reveal className="glimpse-head">
          Her Beautiful Moments ❤️
        </Reveal>

        <div className="glimpse-grid">
          {glimpsePhotos.map((src, i) => (
            <div className="g-polaroid" key={src}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>

        <p className="glimpse-caption">A collection of beautiful smiles and unforgettable moments. ♡</p>
      </section>

    </div>
  );
};

export default Gallery;