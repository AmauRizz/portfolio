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

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
}

const canvasRef = ref<HTMLCanvasElement | null>(null);
const stars = ref<Star[]>([]);
const shootingStars = ref<ShootingStar[]>([]);
let animationFrameId: number | null = null;
let lastShootingStarTime = 0;

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

const createShootingStar = (canvas: HTMLCanvasElement) => {
  const startX = Math.random() * canvas.width;
  const startY = Math.random() * canvas.height * 0.5; // Partie supérieure de l'écran
  const angle = Math.PI / 4 + Math.random() * Math.PI / 6; // Angle entre 45° et 75°

  shootingStars.value.push({
    x: startX,
    y: startY,
    length: 50 + Math.random() * 80,
    speed: 8 + Math.random() * 6,
    angle: angle,
    opacity: 1,
    life: 1,
  });
};

const animate = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  const currentTime = Date.now();

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

  if (currentTime - lastShootingStarTime > 2000 && Math.random() < 0.02) {
    createShootingStar(canvas);
    lastShootingStarTime = currentTime;
  }

  shootingStars.value = shootingStars.value.filter((star) => {
    star.x += Math.cos(star.angle) * star.speed;
    star.y += Math.sin(star.angle) * star.speed;
    star.life -= 0.01;
    star.opacity = star.life;

    if (star.life <= 0) return false;

    const gradient = ctx.createLinearGradient(
        star.x,
        star.y,
        star.x - Math.cos(star.angle) * star.length,
        star.y - Math.sin(star.angle) * star.length
    );

    gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
    gradient.addColorStop(0.5, `rgba(200, 220, 255, ${star.opacity * 0.6})`);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.moveTo(star.x, star.y);
    ctx.lineTo(
        star.x - Math.cos(star.angle) * star.length,
        star.y - Math.sin(star.angle) * star.length
    );
    ctx.stroke();

    return true;
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