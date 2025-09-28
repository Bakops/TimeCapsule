<template>
  <div class="container">
    <header class="header">
      <div class="logo">
        <img src="/public/TimeCapsule.svg" alt="" />
      </div>
      <ul class="menu">
        <li class="links">Accueil</li>
        <li class="links">Guide</li>
        <li class="links">Explorer</li>
        <li class="links">Idées</li>
        <li class="links">Contact</li>
      </ul>
      <div class="buttons">
        <button class="btn1">Se connecter</button>
        <button class="btn2">S'inscrire</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #f5f5f5;
  height: 200vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 0 20px;
}

.header {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  max-width: 1200px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-radius: 30px;
  background-color: #47ba87;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
}

.menu {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 10px;
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.menu .links {
  font-family: "Poppins", sans-serif;
  color: white;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.menu .links:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffa939;
}

.buttons {
  display: flex;
  gap: 10px;
}

.btn1 {
  border: 2px solid white;
  padding: 8px 20px;
  background-color: transparent;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.btn2 {
  border: 2px solid white;
  padding: 8px 20px;
  border-radius: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: white;
  color: #47ba87;
}

.btn1:hover {
  background-color: white;
  color: #47ba87;
}

.btn2:hover {
  background-color: #47ba87;
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .header {
    padding: 0 20px;
    gap: 10px;
  }

  .menu {
    gap: 20px;
  }

  .menu .links {
    font-size: 14px;
  }

  .buttons {
    gap: 5px;
  }

  .btn1,
  .btn2 {
    padding: 6px 16px;
    font-size: 14px;
  }
}

@media (max-width: 640px) {
  .menu {
    display: none;
  }

  .header {
    justify-content: space-between;
  }

  .logo {
    font-size: 20px;
  }
}

.content {
  padding: 120px 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 60px 0;
}

.hero h1 {
  font-size: 3em;
  color: #333;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2em;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}
</style>
