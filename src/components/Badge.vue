<template>
  <span class="badge">
    <p>Scelle tes souvenirs pour demain</p>
  </span>
</template>

<script>
export default {
  name: "Badge",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  margin-bottom: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  line-height: 1.4;
  text-align: center;
  color: #fff;
  background-color: #3b0136;
  border-radius: 30px;
  white-space: nowrap;
  max-width: 100%;
  width: 40%;
  min-height: 2.75rem;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.badge p {
  margin: 0;
  padding: 0;
  line-height: inherit;
}

/* Tablettes */
@media (max-width: 768px) {
  .badge {
    padding: 0.625rem 1.25rem;
    margin-bottom: 1.25rem;
    font-size: clamp(0.8125rem, 2.8vw, 0.9375rem);
    min-height: 2.5rem;
  }
}

/* Petits téléphones */
@media (max-width: 480px) {
  .badge {
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    font-size: clamp(0.75rem, 3.5vw, 0.875rem);
    min-height: 2.25rem;
    white-space: normal;
    max-width: 90vw;
  }
}

/* Très petits écrans */
@media (max-width: 360px) {
  .badge {
    padding: 0.5rem 0.875rem;
    font-size: clamp(0.6875rem, 4vw, 0.8125rem);
    min-height: 2rem;
  }
}

/* Grands écrans */
@media (min-width: 1200px) {
  .badge {
    padding: 0.875rem 1.75rem;
    font-size: 1rem;
    min-height: 3rem;
  }
}

/* Hover effect pour desktop */
@media (hover: hover) {
  .badge:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 1, 54, 0.3);
  }
}
</style>
