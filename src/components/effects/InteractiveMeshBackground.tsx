"use client";

import { useEffect, useRef } from "react";

interface Strand {
  baseYFactor: number;
  color: string;
  amp1: number;
  amp2: number;
  freq1: number;
  freq2: number;
  speed1: number;
  speed2: number;
}

interface Cell {
  strandIndex: number;
  u: number;
  speed: number;
  offsetDist: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

const STRANDS: Strand[] = [
  {
    baseYFactor: 0.25,
    color: "rgba(0, 102, 255, 0.14)", // Electric Blue
    amp1: 45,
    amp2: 30,
    freq1: 1.2,
    freq2: 2.4,
    speed1: 0.02,
    speed2: 0.015,
  },
  {
    baseYFactor: 0.5,
    color: "rgba(124, 58, 237, 0.1)", // Royal Purple
    amp1: 55,
    amp2: 40,
    freq1: 1.0,
    freq2: 1.8,
    speed1: 0.012,
    speed2: 0.018,
  },
  {
    baseYFactor: 0.75,
    color: "rgba(0, 102, 255, 0.14)", // Electric Blue
    amp1: 40,
    amp2: 35,
    freq1: 1.5,
    freq2: 2.8,
    speed1: 0.018,
    speed2: 0.01,
  },
  {
    baseYFactor: 0.38,
    color: "rgba(124, 58, 237, 0.1)", // Royal Purple
    amp1: 35,
    amp2: 25,
    freq1: 2.0,
    freq2: 1.2,
    speed1: 0.01,
    speed2: 0.022,
  },
];

function getStrandYAndSlope(
  x: number,
  width: number,
  height: number,
  strand: Strand,
  time: number
) {
  const baseY = height * strand.baseYFactor;
  const k1 = (2 * Math.PI * strand.freq1) / width;
  const k2 = (2 * Math.PI * strand.freq2) / width;
  const phi1 = time * strand.speed1;
  const phi2 = -time * strand.speed2;

  const angle1 = k1 * x + phi1;
  const angle2 = k2 * x + phi2;

  const y = baseY + strand.amp1 * Math.sin(angle1) + strand.amp2 * Math.cos(angle2);
  const slope = strand.amp1 * k1 * Math.cos(angle1) - strand.amp2 * k2 * Math.sin(angle2);

  return { y, slope };
}

export default function InteractiveMeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initialize 90 micro-cells distributed across the 4 strands
    const cells: Cell[] = [];
    const numCells = 90;
    for (let i = 0; i < numCells; i++) {
      const strandIndex = Math.floor(Math.random() * STRANDS.length);
      const u = Math.random();
      const speed = 0.00015 + Math.random() * 0.0002;
      const offsetDist = (Math.random() - 0.5) * 60; // 60px sleeve
      const size = 1.2 + Math.random() * 1.6;
      const alpha = 0.35 + Math.random() * 0.4;
      const color =
        strandIndex % 2 === 0
          ? "rgba(0, 102, 255, alpha)"
          : "rgba(124, 58, 237, alpha)";

      cells.push({
        strandIndex,
        u,
        speed,
        offsetDist,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        size,
        alpha,
        color,
      });
    }

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const animate = () => {
      time += 0.5;

      // Stark White backdrop base
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, width, height);

      // Lerp mouse coordinates
      const mouse = mouseRef.current;
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      }

      // Draw Strands
      STRANDS.forEach((strand) => {
        ctx.beginPath();
        let first = true;
        for (let x = -20; x <= width + 20; x += 20) {
          const { y } = getStrandYAndSlope(x, width, height, strand, time);
          if (first) {
            ctx.moveTo(x, y);
            first = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Layer 1: Outer soft glow (42px width at 25% opacity offset)
        ctx.strokeStyle = strand.color.replace("0.14", "0.035").replace("0.1", "0.025");
        ctx.lineWidth = 42;
        ctx.stroke();

        // Layer 2: Medium glow (20px width at 60% opacity offset)
        ctx.strokeStyle = strand.color.replace("0.14", "0.085").replace("0.1", "0.06");
        ctx.lineWidth = 20;
        ctx.stroke();

        // Layer 3: Inner glowing core (4px width at full opacity)
        ctx.strokeStyle = strand.color;
        ctx.lineWidth = 4;
        ctx.stroke();
      });

      // Update & Draw Micro-cells
      cells.forEach((cell) => {
        // Increment progress along the strand
        cell.u += cell.speed;
        if (cell.u > 1.0) {
          cell.u -= 1.0;
        }

        // Calculate target location on the waving strand
        const targetX_base = cell.u * width;
        const strandObj = STRANDS[cell.strandIndex];
        const { y: targetY_base, slope } = getStrandYAndSlope(
          targetX_base,
          width,
          height,
          strandObj,
          time
        );

        // Find normal perpendicular vector
        const length = Math.sqrt(1 + slope * slope);
        const nx = -slope / length;
        const ny = 1 / length;

        // Apply normal offset distance
        const tx = targetX_base + cell.offsetDist * nx;
        const ty = targetY_base + cell.offsetDist * ny;

        // Mouse repulsion physics
        if (mouse.active) {
          const dx = cell.x - mouse.x;
          const dy = cell.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          const repulsionRadius = 150;
          const repulsionRadiusSq = repulsionRadius * repulsionRadius;

          if (distSq < repulsionRadiusSq) {
            const dist = Math.sqrt(distSq) || 1;
            const force = (1 - dist / repulsionRadius) * 3.2; // Push strength

            cell.vx += (dx / dist) * force;
            cell.vy += (dy / dist) * force;
          }
        }

        // Spring pulling force back to target path
        const spring = 0.04;
        const damping = 0.83;

        cell.vx += (tx - cell.x) * spring;
        cell.vy += (ty - cell.y) * spring;

        cell.vx *= damping;
        cell.vy *= damping;

        // Prevent jump initialization
        if (cell.x === 0 && cell.y === 0) {
          cell.x = tx;
          cell.y = ty;
        } else {
          cell.x += cell.vx;
          cell.y += cell.vy;
        }

        // Draw micro-cell (Core and soft outer glow ring)
        const coreColor = cell.color.replace("alpha", `${cell.alpha}`);
        const glowColor = cell.color.replace("alpha", `${cell.alpha * 0.3}`);

        ctx.fillStyle = coreColor;
        ctx.beginPath();
        ctx.arc(cell.x, cell.y, cell.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = glowColor;
        ctx.beginPath();
        ctx.arc(cell.x, cell.y, cell.size * 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 bg-white"
      aria-hidden="true"
    />
  );
}
