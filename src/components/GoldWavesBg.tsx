import React, { useEffect, useRef } from 'react';

const GoldWavesBg: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    // Wave configurations
    const waves = [
      {
        y: height * 0.5,
        length: 0.002,
        amplitude: 60,
        frequency: 0.015,
        speed: 0.008,
        color: 'rgba(212, 175, 55, 0.08)',
        lineWidth: 2,
      },
      {
        y: height * 0.55,
        length: 0.0015,
        amplitude: 80,
        frequency: 0.01,
        speed: -0.005,
        color: 'rgba(255, 215, 0, 0.05)',
        lineWidth: 1.5,
      },
      {
        y: height * 0.45,
        length: 0.0025,
        amplitude: 40,
        frequency: 0.02,
        speed: 0.012,
        color: 'rgba(184, 134, 11, 0.06)',
        lineWidth: 1,
      },
      {
        y: height * 0.6,
        length: 0.001,
        amplitude: 100,
        frequency: 0.008,
        speed: 0.004,
        color: 'rgba(212, 175, 55, 0.03)',
        lineWidth: 3,
      },
    ];

    let t = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'; // Create soft motion blur trailing
      ctx.fillRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.01)';
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw flowing waves
      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y);

        for (let x = 0; x < width; x++) {
          // Combination of sin/cos for elegant organic silk-like flow
          const y =
            wave.y +
            Math.sin(x * wave.length + t * wave.speed) *
              wave.amplitude *
              Math.sin(t * 0.002);
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.lineWidth;
        ctx.stroke();
      });

      t += 1;
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 mix-blend-screen"
    />
  );
};

export default GoldWavesBg;
