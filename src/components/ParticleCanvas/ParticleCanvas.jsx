import React, { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const NODES = 70;
    const nodes = Array.from({ length: NODES }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r:  Math.random() * 2 + 1,
    }));

    const shapes = Array.from({ length: 12 }, () => ({
      x:    Math.random() * canvas.width,
      y:    Math.random() * canvas.height,
      size: Math.random() * 40 + 15,
      vx:   (Math.random() - 0.5) * 0.3,
      vy:   (Math.random() - 0.5) * 0.3,
      rot:  Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.008,
      type: Math.floor(Math.random() * 3),
      alpha: Math.random() * 0.12 + 0.04,
      hue:  Math.random() > 0.5 ? "30,167,255" : "122,92,255",
    }));

    let t = 0;
    let rafId;

    function drawAurora() {
      const bands = [
        { color: "rgba(30,167,255,",  yBase: canvas.height * 0.55, amp: 80, freq: 0.004, speed: 0.4 },
        { color: "rgba(122,92,255,",  yBase: canvas.height * 0.65, amp: 60, freq: 0.006, speed: 0.6 },
        { color: "rgba(83,224,255,",  yBase: canvas.height * 0.45, amp: 50, freq: 0.005, speed: 0.3 },
      ];
      bands.forEach((b) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        for (let x = 0; x <= canvas.width; x += 4) {
          const y =
            b.yBase +
            Math.sin(x * b.freq + t * b.speed) * b.amp +
            Math.sin(x * b.freq * 2.3 + t * b.speed * 1.5) * (b.amp * 0.4);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, b.yBase - b.amp, 0, canvas.height);
        grad.addColorStop(0, b.color + "0.07)");
        grad.addColorStop(1, b.color + "0)");
        ctx.fillStyle = grad;
        ctx.fill();
      });
    }

    function drawShapes() {
      shapes.forEach((s) => {
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);
        ctx.strokeStyle = `rgba(${s.hue},${s.alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        if (s.type === 0) {
          const h = s.size * 0.866;
          ctx.moveTo(0, -s.size * 0.6);
          ctx.lineTo(s.size * 0.5, h * 0.4);
          ctx.lineTo(-s.size * 0.5, h * 0.4);
          ctx.closePath();
        } else if (s.type === 1) {
          ctx.rect(-s.size / 2, -s.size / 2, s.size, s.size);
        } else {
          for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 3) * i;
            i === 0
              ? ctx.moveTo(Math.cos(a) * s.size * 0.5, Math.sin(a) * s.size * 0.5)
              : ctx.lineTo(Math.cos(a) * s.size * 0.5, Math.sin(a) * s.size * 0.5);
          }
          ctx.closePath();
        }
        ctx.stroke();
        ctx.restore();
        s.x += s.vx; s.y += s.vy; s.rot += s.vrot;
        if (s.x < -80) s.x = canvas.width + 80;
        if (s.x > canvas.width + 80) s.x = -80;
        if (s.y < -80) s.y = canvas.height + 80;
        if (s.y > canvas.height + 80) s.y = -80;
      });
    }

    function drawNodes() {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(30,167,255,${(1 - d / 140) * 0.18})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(83,224,255,.5)";
        ctx.fill();
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
    }

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;
      drawAurora();
      drawShapes();
      drawNodes();
      rafId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles"
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
