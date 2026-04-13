import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ParticleCanvas from "../components/ParticleCanvas/ParticleCanvas";


/* ─── Main Component ──────────────────────────────────────── */
export default function WelcomePage() {
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const btnRef   = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  // ✅ React Router navigation
  const navigate = useNavigate();

  /* Cursor glow */
  useEffect(() => {
    const handler = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  /* Typewriter */
  useEffect(() => {
    const twLines = [
      { ref: line1Ref, text: "Welcome to", isAccent: false },
      { ref: line2Ref, text: "E-Learning",  isAccent: true  },
      { ref: line3Ref, text: "Nova",        isAccent: true  },
    ];
    function typeLine(index) {
      if (index >= twLines.length) return;
      const { ref, text, isAccent } = twLines[index];
      if (!ref.current) return;
      let i = 0;
      const interval = setInterval(() => {
        const typed = text.slice(0, ++i);
        ref.current.textContent = typed;
        if (isAccent) ref.current.setAttribute("data-text", typed);
        if (i === text.length) {
          clearInterval(interval);
          setTimeout(() => typeLine(index + 1), 180);
        }
      }, 90);
    }
    const timer = setTimeout(() => typeLine(0), 600);
    return () => clearTimeout(timer);
  }, []);

  /* Magnetic button */
  const handleBtnMouseMove = (e) => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width  / 2;
    const y = e.clientY - r.top  - r.height / 2;
    btnRef.current.style.transform = `translate(${x * 0.18}px,${y * 0.18}px) translateY(-3px)`;
  };
  const handleBtnMouseLeave = () => {
    if (!btnRef.current) return;
    btnRef.current.style.transform = "";
  };

  return (
    <>
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

        :root {
          --blue:   #1ea7ff;
          --purple: #7a5cff;
          --cyan:   #53e0ff;
          --bg:     #06101f;
          --surface:#0b1a30;
          --text:   #eef7ff;
          --muted:  #6e90b0;
        }

        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .grid-overlay {
          position:fixed; inset:0; z-index:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(30,167,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,167,255,.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .orb { position:fixed; border-radius:50%; filter:blur(120px); opacity:.18; z-index:0; pointer-events:none; }
        .orb-1 { width:600px; height:600px; background:var(--blue);   top:-200px; left:-150px; animation:drift1 18s ease-in-out infinite; }
        .orb-2 { width:500px; height:500px; background:var(--purple); bottom:-200px; right:-100px; animation:drift2 22s ease-in-out infinite; }
        .orb-3 { width:300px; height:300px; background:var(--cyan);   top:40%; left:55%; animation:drift3 14s ease-in-out infinite; }

        .cursor-glow {
          position:fixed; width:320px; height:320px; border-radius:50%;
          background:radial-gradient(circle, rgba(30,167,255,.08) 0%, transparent 70%);
          pointer-events:none; z-index:0;
          transform:translate(-50%,-50%); transition:left .1s, top .1s;
        }

        .page { position:relative; z-index:1; min-height:100vh; display:flex; flex-direction:column; }

        nav {
          display:flex; justify-content:space-between; align-items:center;
          padding:22px 72px;
          border-bottom:1px solid rgba(30,167,255,.12);
          background:rgba(6,16,31,.6);
          backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
          position:sticky; top:0; z-index:100;
          opacity:0; transform:translateY(-20px);
          animation:fadeDown .8s .1s forwards;
        }

        .logo { display:flex; align-items:center; gap:12px; font-weight:800; font-size:22px; color:var(--text); text-decoration:none; }
        .logo span { color:var(--blue); }

        /* ✅ nav buttons instead of <a href="#"> */
        .nav-links { display:flex; align-items:center; gap:8px; }
        .nav-btn {
          padding:8px 18px; height:40px; border-radius:10px;
          display:grid; place-items:center;
          font-size:14px; font-weight:600;
          color:var(--muted);
          border:1px solid rgba(30,167,255,.15);
          background:rgba(30,167,255,.04);
          text-decoration:none; cursor:pointer;
          transition:all .25s; letter-spacing:.3px;
          font-family:'Poppins',sans-serif;
        }
        .nav-btn:hover {
          color:var(--cyan); border-color:var(--cyan);
          background:rgba(83,224,255,.08);
          transform:translateY(-2px);
          box-shadow:0 4px 20px rgba(83,224,255,.15);
        }

        .hero {
          flex:1; display:grid; grid-template-columns:1fr 1fr;
          align-items:center; gap:60px;
          padding:80px 72px; min-height:calc(100vh - 87px);
        }

        .copy { opacity:0; transform:translateX(-40px); animation:fadeRight .9s .4s forwards; }

        .eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          font-size:12px; font-weight:500; letter-spacing:2.5px;
          text-transform:uppercase; color:var(--blue);
          padding:6px 16px; border:1px solid rgba(30,167,255,.3);
          border-radius:100px; background:rgba(30,167,255,.07); margin-bottom:28px;
        }
        .eyebrow::before {
          content:''; width:6px; height:6px; border-radius:50%;
          background:#00e676; animation:pulse 2s infinite;
        }
        .eyebrow-text {
          overflow:hidden; white-space:nowrap; display:inline-block;
          width:0; animation:typewriter 1.8s steps(24) .3s forwards;
        }

        h1 { font-weight:800; font-size:clamp(38px,4.5vw,62px); line-height:1.08; letter-spacing:-1.5px; margin-bottom:24px; }
        h1 .line { display:block; overflow:hidden; }
        h1 .line span { display:block; opacity:0; transform:translateY(100%); animation:slideUp .8s cubic-bezier(.16,1,.3,1) forwards; }
        h1 .line:nth-child(1) span { animation-delay:.5s; }
        h1 .line:nth-child(2) span { animation-delay:.65s; }
        h1 .line:nth-child(3) span { animation-delay:.8s; }

        h1 .accent {
          background:linear-gradient(90deg, var(--blue), var(--cyan));
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; position:relative; display:inline-block;
        }
        h1 .accent::before, h1 .accent::after {
          content:attr(data-text); position:absolute; left:0; top:0;
          background:linear-gradient(90deg, var(--blue), var(--cyan));
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; opacity:0;
        }
        h1 .accent::before { animation:glitch1 5s infinite; clip-path:polygon(0 20%,100% 20%,100% 40%,0 40%); }
        h1 .accent::after  { animation:glitch2 5s infinite; clip-path:polygon(0 60%,100% 60%,100% 80%,0 80%); }

        .desc { font-size:17px; line-height:1.75; color:var(--muted); max-width:460px; margin-bottom:40px; opacity:0; animation:fadeIn .8s 1.1s forwards; }
        .desc strong { color:var(--text); font-weight:500; }

        .cta-row { display:flex; align-items:center; gap:20px; flex-wrap:wrap; opacity:0; animation:fadeIn .8s 1.3s forwards; }

        .btn-primary {
          display:inline-flex; align-items:center; gap:10px;
          padding:15px 34px;
          background:linear-gradient(135deg, var(--blue), var(--purple));
          color:#fff; border-radius:14px; border:none; cursor:pointer;
          font-family:'Poppins',sans-serif; font-weight:700; font-size:15px;
          letter-spacing:.3px; box-shadow:0 8px 30px rgba(30,167,255,.35);
          transition:box-shadow .3s, transform .3s;
          position:relative; overflow:hidden;
        }
        .btn-primary::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg, var(--cyan), var(--blue));
          opacity:0; transition:opacity .3s;
        }
        .btn-primary:hover::before { opacity:1; }
        .btn-primary:hover { box-shadow:0 14px 40px rgba(30,167,255,.5); }
        .btn-primary span { position:relative; z-index:1; }
        .btn-primary i    { position:relative; z-index:1; transition:transform .3s; }
        .btn-primary:hover i { transform:translateX(4px); }

        .visual-wrap {
          display:flex; justify-content:center; align-items:center;
          position:relative; opacity:0; transform:translateX(40px);
          animation:fadeLeft .9s .5s forwards;
        }

        .holo-frame { position:relative; width:380px; height:420px; }
        .holo-frame::before, .holo-frame::after { content:''; position:absolute; border-radius:28px; }
        .holo-frame::before {
          inset:-2px;
          background:linear-gradient(135deg, var(--blue), var(--purple), var(--cyan), var(--blue));
          background-size:400% 400%; animation:gradShift 6s linear infinite; z-index:-1;
        }
        .holo-frame::after { inset:0; background:var(--surface); border-radius:26px; z-index:0; }

        .holo-inner {
          position:relative; z-index:1; width:100%; height:100%;
          border-radius:26px; overflow:hidden;
          background:linear-gradient(160deg, #0d1f38 0%, #06101f 100%);
        }
        .holo-inner img { width:100%; height:100%; object-fit:cover; }

        .scan-line {
          position:absolute; left:0; right:0; height:2px;
          background:linear-gradient(90deg, transparent, rgba(83,224,255,.6), transparent);
          top:0; animation:scan 4s linear infinite; z-index:2;
        }

        .corner { position:absolute; width:20px; height:20px; z-index:3; }
        .corner::before, .corner::after { content:''; position:absolute; background:var(--cyan); }
        .corner::before { width:100%; height:2px; top:0; left:0; }
        .corner::after  { width:2px; height:100%; top:0; left:0; }
        .corner.tl { top:12px; left:12px; }
        .corner.tr { top:12px; right:12px; transform:rotate(90deg); }
        .corner.bl { bottom:12px; left:12px; transform:rotate(270deg); }
        .corner.br { bottom:12px; right:12px; transform:rotate(180deg); }

        .ring { position:absolute; border-radius:50%; border:1px solid; pointer-events:none; }
        .ring-1 { width:520px; height:520px; border-color:rgba(30,167,255,.07); top:50%; left:50%; transform:translate(-50%,-50%); animation:spinSlow 40s linear infinite; }
        .ring-2 { width:660px; height:660px; border-color:rgba(122,92,255,.05); top:50%; left:50%; transform:translate(-50%,-50%); animation:spinSlow 60s linear infinite reverse; }

        .dot { position:absolute; border-radius:50%; background:var(--cyan); pointer-events:none; }
        .dot-1 { width:8px; height:8px; top:15%; left:-5%; opacity:.7; animation:orbitDot 6s linear infinite; }
        .dot-2 { width:5px; height:5px; top:70%; right:-4%; opacity:.5; animation:orbitDot 9s linear infinite reverse; animation-delay:-3s; }
        .dot-3 { width:6px; height:6px; bottom:10%; left:20%; opacity:.4; background:var(--purple); animation:orbitDot 7s linear infinite; animation-delay:-1s; }

        @keyframes fadeDown  { to { opacity:1; transform:translateY(0); } }
        @keyframes fadeRight { to { opacity:1; transform:translateX(0); } }
        @keyframes fadeLeft  { to { opacity:1; transform:translateX(0); } }
        @keyframes fadeIn    { to { opacity:1; } }
        @keyframes slideUp   { to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.4)} }
        @keyframes typewriter { to { width:140px; } }
        @keyframes glitch1 { 0%,90%,100%{opacity:0;transform:translate(0,0)} 91%{opacity:.8;transform:translate(-4px,2px)} 93%{opacity:.8;transform:translate(4px,-2px)} 95%{opacity:.8;transform:translate(-2px,1px)} 97%{opacity:0} }
        @keyframes glitch2 { 0%,88%,100%{opacity:0;transform:translate(0,0)} 89%{opacity:.6;transform:translate(4px,-3px)} 91%{opacity:.6;transform:translate(-4px,2px)} 93%{opacity:0} }
        @keyframes gradShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes scan { 0%{top:0} 100%{top:100%} }
        @keyframes spinSlow { to { transform:translate(-50%,-50%) rotate(360deg); } }
        @keyframes orbitDot { 0%,100%{transform:translateY(0) scale(1);opacity:.7} 25%{transform:translateY(-18px) scale(1.3);opacity:1} 50%{transform:translateY(0) scale(1);opacity:.7} 75%{transform:translateY(18px) scale(.7);opacity:.4} }
        @keyframes drift1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(60px,40px)} }
        @keyframes drift2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-50px,-60px)} }
        @keyframes drift3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,-40px)} }

        @media (max-width: 960px) {
          nav { padding:18px 28px; }
          .hero { grid-template-columns:1fr; padding:60px 28px; text-align:center; min-height:auto; gap:60px; }
          .desc { margin-inline:auto; }
          .cta-row { justify-content:center; }
          .visual-wrap { order:-1; }
          .holo-frame { width:300px; height:340px; }
        }
      `}</style>

      <ParticleCanvas />
      <div className="grid-overlay" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="cursor-glow" style={{ left: cursorPos.x, top: cursorPos.y }} />

      <div className="page">

        {/* ── NAV ── */}
        <nav>
          <div className="logo">
            <img src="/assets/logo.png" alt="E-Learning Nova Logo" style={{ height:48, width:48, borderRadius:12, objectFit:"cover" }} />
            E-Learning<span>Nova</span>
          </div>

          {/* ✅ buttons instead of <a href="#"> — no more warnings */}
          <div className="nav-links">
            <a className="nav-btn" href="https://www.instagram.com/saleem_1l?igsh=MW00OGE4NHd1d3VyMQ==" target="_blank" rel="noreferrer">instagram</a>
            <a className="nav-btn" href="https://www.linkedin.com/in/sayed-hussein-9a64ba395" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="nav-btn" href="https://github.com/alaa-fawzy-sayed/Home-Schooling-Project" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="hero">

          {/* COPY */}
          <div className="copy">
            <div className="eyebrow">
              <span className="eyebrow-text">Online Learning</span>
            </div>

            <h1>
              <div className="line"><span ref={line1Ref} /></div>
              <div className="line"><span ref={line2Ref} className="accent" data-text="" /></div>
              <div className="line"><span ref={line3Ref} className="accent" data-text="" /></div>
            </h1>

            <p className="desc">
              Learn <strong>any time</strong> and <strong>anywhere</strong> with
              E-Learning Nova — the next-generation platform built for curious minds.
            </p>

            <div className="cta-row">
              {/* ✅ useNavigate — navigates to /register without full page reload */}
              <button
                ref={btnRef}
                className="btn-primary"
                onMouseMove={handleBtnMouseMove}
                onMouseLeave={handleBtnMouseLeave}
                onClick={() => navigate("/register")}
              >
                <span>Get Started</span>
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>

          {/* VISUAL */}
          <div className="visual-wrap">
            <div className="dot dot-1" />
            <div className="dot dot-2" />
            <div className="dot dot-3" />
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="holo-frame">
              <div className="holo-inner">
                <img src="/assets/image.png" alt="E-Learning Nova preview" />
                <div className="scan-line" />
                <div className="corner tl" />
                <div className="corner tr" />
                <div className="corner bl" />
                <div className="corner br" />
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
