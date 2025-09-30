<template>
  <div class="hero-header">
    <div class="text_hero">
      <h1>Crée ta capsule temporelle digitale</h1>
      <p>
        Enferme tes souvenirs, tes mots et tes émotions dans une capsule
        numérique unique. Ajoute messages, photos et vidéos, choisis une date
        d'ouverture… et laisse le futur les redécouvrir.
      </p>
      <button class="btn">
        Commencer<i class="bx bx-right-arrow-alt"></i>
      </button>
    </div>
    <div class="image_hero">
      <img src="/public/image-hero.webp" alt="Hero Image" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 75rem;
  margin: 0 auto;
}

.text_hero {
  text-align: center;
  max-width: 100%;
}

.text_hero h1 {
  font-family: "Poppins", sans-serif;
  color: #47ba87;
  font-size: clamp(2.179rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -1px;
  margin-bottom: 1.5rem;
}

.text_hero p {
  font-family: "Poppins", sans-serif;
  color: #181818;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: #47ba87;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn:hover {
  background-color: #3da575;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(71, 186, 135, 0.3);
}

.image_hero {
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
}

.image_hero img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
}

@media only screen and (min-width: 768px) {
  .hero-header {
    padding: 3rem 2rem;
    gap: 4rem;
  }

  .text_hero h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
  }

  .text_hero p {
    font-size: clamp(1.125rem, 2vw, 1.375rem);
  }

  .image_hero {
    max-width: 600px;
  }
}

@media only screen and (min-width: 1024px) {
  .hero-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    padding: 4rem 2rem;
    min-height: 80vh;
  }

  .text_hero {
    text-align: left;
    flex: 1;
    max-width: 50%;
  }

  .text_hero p {
    margin-left: 0;
    margin-right: 0;
  }

  .image_hero {
    flex: 1;
    max-width: 50%;
    justify-content: flex-end;
  }

  .image_hero img {
    max-width: 500px;
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  .image_hero img:hover {
    transform: scale(1.08);
  }
}

@media only screen and (min-width: 1200px) {
  .hero-header {
    gap: 5rem;
    padding: 5rem 2rem;
  }

  .image_hero img {
    max-width: 550px;
  }
}

@media only screen and (max-width: 360px) {
  .hero-header {
    padding: 1.5rem 1rem;
    gap: 2rem;
  }

  .text_hero h1 {
    font-size: 1.75rem;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
