<template>
  <div class="image_hero">
    <transition name="bounce-fade" mode="out-in">
      <img :key="currentIndex" :src="images[currentIndex]" alt="Hero Image" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "HeroImageSlider",
  data() {
    return {
      currentIndex: 0,
      images: [
        "/public/image-hero.png",
        "/public/image-hero-2.png",
        "/public/image-hero-3.png",
        "/public/image-hero-4.png",
        "/public/image-hero-5.png",
      ],
      intervalId: null,
    };
  },
  mounted() {
    this.startSlideshow();
  },
  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
  methods: {
    startSlideshow() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 6000);
    },
  },
};
</script>

<style scoped>
.image_hero {
  position: relative;
  width: 100%;
  max-width: 850px;
}

.image_hero img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.bounce-fade-enter-active {
  animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.bounce-fade-leave-active {
  animation: fadeOut 0.4s ease-out;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(-30px);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05) translateY(0);
  }
  70% {
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.95);
  }
}

.bounce-fade-enter-active.strong-bounce {
  animation: strongBounceIn 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes strongBounceIn {
  0% {
    opacity: 0;
    transform: scale(0.2) translateY(-50px);
  }
  40% {
    opacity: 0.7;
    transform: scale(1.1) translateY(10px);
  }
  60% {
    transform: scale(0.9) translateY(-5px);
  }
  80% {
    transform: scale(1.05) translateY(2px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
