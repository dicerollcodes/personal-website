'use client';

import { useEffect, useRef } from 'react';

interface Leaf {
  x: number;
  y: number;
  w: number;
  h: number;
  opacity: number;
  flip: number;
  xSpeed: number;
  ySpeed: number;
  flipSpeed: number;
  reset(): void;
  draw(): void;
  animate(): void;
}

export default function ACLeaves() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const TOTAL = 25;
    const leafArray: Leaf[] = [];

    const leafImg = new Image();
    leafImg.src = "/images/Animal_Crossing_Leaf.png";

    let mouseX = 0;
    function touchHandler(e: MouseEvent | TouchEvent) {
      if (e instanceof MouseEvent) {
        mouseX = e.clientX / window.innerWidth;
      } else {
        mouseX = e.touches[0].clientX / window.innerWidth;
      }
    }

    window.addEventListener("mousemove", touchHandler);
    window.addEventListener("touchmove", touchHandler);

    window.addEventListener("resize", updateCanvasSize);

    class ACLeaf implements Leaf {
      x: number = 0;
      y: number = 0;
      w: number = 0;
      h: number = 0;
      opacity: number = 0;
      flip: number = 0;
      xSpeed: number = 0;
      ySpeed: number = 0;
      flipSpeed: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.w = 30 + Math.random() * 20;
        this.h = this.w;
        this.opacity = 0.6 + Math.random() * 0.4;
        this.flip = Math.random() * Math.PI * 2;
        this.xSpeed = 0.3 + Math.random() * 0.8;
        this.ySpeed = 0.5 + Math.random() * 0.6;
        this.flipSpeed = (Math.random() * 0.03 - 0.015) * 1.5;
      }

      draw() {
        if (!canvas || !ctx) return;
        if (this.y > canvas.height) {
          this.reset();
        }
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x + this.w/2, this.y + this.h/2);
        ctx.rotate(this.flip);
        ctx.drawImage(
          leafImg,
          -this.w/2, -this.h/2,
          this.w, this.h
        );
        ctx.restore();
      }

      animate() {
        this.x += this.xSpeed + Math.sin(this.y * 0.01) * 0.5;
        this.y += this.ySpeed;
        this.flip += this.flipSpeed;
        if (mouseX > 0) {
          this.x += mouseX * 0.5;
        }
        this.draw();
      }
    }

    leafImg.onload = () => {
      for (let i = 0; i < TOTAL; i++) {
        leafArray.push(new ACLeaf());
      }
      render();
    };

    function render() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      leafArray.forEach((leaf) => leaf.animate());
      requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener("mousemove", touchHandler);
      window.removeEventListener("touchmove", touchHandler);
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        background: 'transparent',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0
      }}
    />
  );
} 