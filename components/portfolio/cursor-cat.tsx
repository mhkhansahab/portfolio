"use client";

import { useEffect, useRef } from "react";

const SPRITE_URL = "/assets/cursor/oneko.gif";
const CELL = 32;

type Dir = "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW" | "IDLE";

const FRAMES: Record<Dir, [number, number][]> = {
  N: [[-1, -2], [-1, -3]],
  NE: [[0, -2], [0, -3]],
  E: [[-3, 0], [-3, -1]],
  SE: [[-5, -1], [-5, -2]],
  S: [[-6, -3], [-7, -2]],
  SW: [[-5, -3], [-6, -1]],
  W: [[-4, -2], [-4, -3]],
  NW: [[-1, 0], [-1, -1]],
  IDLE: [[-3, -3]],
};

function toDirection(dx: number, dy: number): Dir {
  const dist = Math.hypot(dx, dy);
  if (dist < 8) return "IDLE";

  const angle = Math.atan2(dy, dx);
  const octant = Math.round((8 * angle) / (2 * Math.PI));

  switch (octant) {
    case -4:
    case 4:
      return "W";
    case -3:
      return "NW";
    case -2:
      return "N";
    case -1:
      return "NE";
    case 0:
      return "E";
    case 1:
      return "SE";
    case 2:
      return "S";
    case 3:
      return "SW";
    default:
      return "IDLE";
  }
}

export function CursorCat() {
  const catRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const disableOnTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (disableOnTouch || !catRef.current) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let vx = 0;
    let vy = 0;

    let dir: Dir = "IDLE";
    let frame = 0;
    let lastFrameAt = 0;
    let lastDirChangeAt = 0;
    let raf = 0;

    const onMove = (event: MouseEvent | PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const step = (t: number) => {
      const dx = targetX - x;
      const dy = targetY - y;

      const accel = 0.03;
      const damping = 0.84;
      const maxSpeed = 3;

      vx += dx * accel;
      vy += dy * accel;

      vx *= damping;
      vy *= damping;

      const speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
      }

      x += vx;
      y += vy;

      const nextDir = toDirection(dx, dy);
      const canSwitch = t - lastDirChangeAt > 100;
      if (nextDir === "IDLE") {
        if (Math.hypot(dx, dy) < 10) {
          dir = "IDLE";
          frame = 0;
        }
      } else if (nextDir !== dir && canSwitch) {
        dir = nextDir;
        frame = 0;
        lastDirChangeAt = t;
      }

      const frames = FRAMES[dir];
      if (t - lastFrameAt > 140) {
        frame = (frame + 1) % frames.length;
        lastFrameAt = t;
      }

      const [sx, sy] = frames[frame];
      const node = catRef.current;
      if (node) {
        node.style.left = `${x + 12}px`;
        node.style.top = `${y + 12}px`;
        node.style.backgroundPosition = `${sx * CELL}px ${sy * CELL}px`;
      }

      raf = window.requestAnimationFrame(step);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("pointermove", onMove as EventListener, { passive: true });
    raf = window.requestAnimationFrame(step);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("pointermove", onMove as EventListener);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      id="oneko-p3"
      aria-hidden="true"
      ref={catRef}
      style={{
        width: `${CELL}px`,
        height: `${CELL}px`,
        position: "fixed",
        left: "50vw",
        top: "50vh",
        zIndex: 2147483647,
        pointerEvents: "none",
        imageRendering: "pixelated",
        backgroundImage: `url(${SPRITE_URL})`,
        backgroundPosition: `${-3 * CELL}px ${-3 * CELL}px`,
      }}
    />
  );
}
