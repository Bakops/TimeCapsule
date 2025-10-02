<template>
  <div class="hero-header">
    <div class="text_hero">
      <div class="text">
        <h1>
          Crée ta
          <span style="font-family: 'Zooja'; font-weight: 300">
            capsule digitale </span
          ><br />
          et parle au futur
        </h1>
        <p>
          Enferme tes souvenirs, tes mots et tes émotions dans une capsule
          numérique unique. Ajoute messages, photos et vidéos, choisis une date
          d'ouverture… et laisse le futur les redécouvrir.
        </p>
        <div class="cta">
          <button class="btn">
            Commencer<i class="bx bx-right-arrow-alt"></i>
          </button>
          <button class="btn">
            En savoir plus<i class="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="image_hero">
      <img src="/public/image-hero.webp" alt="Hero Image" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero-header {
  background-color: #4f0147;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 60vh;
  gap: 2rem;
  max-width: 112rem;
  border-radius: 30px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.text_hero {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding-top: 1rem;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.text_hero h1 {
  font-family: "Poppins", sans-serif;
  color: #fff;
  font-weight: 700;
  font-size: clamp(1.75rem, 5vw, 3rem);
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin-bottom: 1rem;
  margin-top: 0;
}

.text_hero p {
  font-family: "Poppins", sans-serif;
  color: #f7fff794;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 550px;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #4f0147;
  background-color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn:nth-child(1) {
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
}

.btn:hover {
  background-color: #70163c;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px #70163b85;
}

.btn:active {
  transform: translateY(0);
}

.image_hero {
  width: 100%;
  max-width: 450px;
  display: flex;
  justify-content: center;
}

.image_hero img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
}

@media only screen and (min-width: 640px) {
  .hero-header {
    padding: 2.5rem 2rem;
  }

  .text_hero h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
  }

  .text_hero p {
    font-size: clamp(1rem, 2vw, 1.25rem);
    max-width: 600px;
  }

  .image_hero {
    max-width: 500px;
  }
}

@media only screen and (min-width: 1024px) {
  .hero-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem;
    padding: 3rem 3rem;
    min-height: 70vh;
  }

  .text_hero {
    text-align: left;
    flex: 1;
    max-width: 55%;
    padding-top: 2rem;
  }

  .text {
    align-items: flex-start;
  }

  .text_hero h1 {
    font-size: clamp(2.5rem, 4vw, 4rem);
    margin-bottom: 1.25rem;
  }

  .text_hero p {
    font-size: clamp(1.05rem, 1.5vw, 1.25rem);
    margin-bottom: 2rem;
  }

  .cta {
    justify-content: flex-start;
  }

  .image_hero {
    flex: 1;
    max-width: 45%;
    justify-content: flex-end;
    align-self: center;
  }

  .image_hero img {
    max-width: 500px;
    transition: transform 0.3s ease;
  }

  .image_hero img:hover {
    transform: scale(1.03);
  }
}

@media only screen and (min-width: 1280px) {
  .hero-header {
    gap: 4rem;
    padding: 4rem 4rem;
  }

  .text_hero {
    padding-top: 3rem;
  }

  .text_hero h1 {
    font-size: 5.5rem;
    line-height: 5.1rem;
    letter-spacing: -1px;
  }

  .text_hero p {
    font-size: 1rem;
    line-height: 1.2rem;
    max-width: 650px;
  }

  .btn {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  .image_hero img {
    max-width: 550px;
  }
}

@media only screen and (max-width: 360px) {
  .hero-header {
    padding: 1.5rem 1rem;
    gap: 1.5rem;
    min-height: 50vh;
  }

  .text_hero h1 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .text_hero p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .btn {
    padding: 0.75rem 1.25rem;
    font-size: 0.875rem;
  }

  .cta {
    gap: 0.75rem;
  }
}
</style>
