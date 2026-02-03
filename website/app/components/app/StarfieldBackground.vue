<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
}

const canvasRef = ref<HTMLCanvasElement | null>(null);
const stars = ref<Star[]>([]);
let animationFrameId: number | null = null;

const resizeCanvas = (canvas: HTMLCanvasElement) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const createStars = (canvas: HTMLCanvasElement) => {
  const starCount = Math.floor((canvas.width * canvas.height) / 8000);
  stars.value = [];

  for (let i = 0; i < starCount; i++) {
    const depth = Math.random();
    stars.value.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 0.5 + depth * 2,
      opacity: 0.1 + depth * 0.5,
      speedX: (Math.random() - 1.5) * 0.15 * (1 - depth * 0.7),
      speedY: (Math.random() - 1.5) * 0.15 * (1 - depth * 0.7),
    });
  }
};

const animate = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  ctx.fillStyle = '#070A13';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  stars.value.forEach((star) => {
    star.x += star.speedX;
    star.y += star.speedY;

    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    if (star.y > canvas.height) star.y = 0;

    const twinkle = 0.8 + Math.sin(Date.now() * 0.001 + star.x) * 0.2;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
    ctx.fill();
  });

  animationFrameId = requestAnimationFrame(() => animate(ctx, canvas));
};

const handleResize = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  resizeCanvas(canvas);
  createStars(canvas);
};

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  resizeCanvas(canvas);
  createStars(canvas);
  animate(ctx, canvas);

  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <canvas
      ref="canvasRef"
      class="fixed inset-0 pointer-events-none -z-10"
      style="background: #070A13"
  />
</template>