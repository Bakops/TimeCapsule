<template>
  <div class="container">
    <header class="header">
      <div class="mobile-menu-btn" @click="toggleMobileMenu">
        <div class="burger-icon" :class="{ active: isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="logo">
        <img src="/public/TimeCapsule.svg" alt="TimeCapsule" />
      </div>

      <ul class="menu desktop-menu">
        <li><a href="/" class="links">Accueil</a></li>
        <li><a href="/guide" class="links">Guide</a></li>
        <li><a href="/explorer" class="links">Explorer</a></li>
        <li><a href="/idees" class="links">Idées</a></li>
        <li><a href="/contact" class="links">Contact</a></li>
      </ul>

      <div class="buttons desktop-buttons">
        <button class="btn1">Se connecter</button>
        <button class="btn2">S'inscrire</button>
      </div>

      <div class="mobile-user-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="#FFF"
          class="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
          />
        </svg>
      </div>
    </header>

    <div
      class="mobile-overlay"
      :class="{ active: isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>

    <nav class="mobile-menu" :class="{ active: isMobileMenuOpen }">
      <div class="mobile-menu-header">
        <img
          src="/public/TimeCapsule.svg"
          alt="TimeCapsule"
          class="mobile-logo"
        />
        <button @click="closeMobileMenu" class="close-btn">
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        </button>
      </div>

      <div class="mobile-menu-content">
        <div class="mobile-auth-buttons">
          <button class="mobile-btn-primary" @click="closeMobileMenu">
            S'inscrire
          </button>
          <button class="mobile-btn-secondary" @click="closeMobileMenu">
            Se connecter
          </button>
        </div>

        <div class="mobile-nav-section">
          <div class="section-title">Navigation</div>
          <div class="mobile-nav-links">
            <a href="/" class="mobile-nav-link" @click="closeMobileMenu">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <span>Accueil</span>
              <svg
                class="chevron"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                />
              </svg>
            </a>

            <a href="/guide" class="mobile-nav-link" @click="closeMobileMenu">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                />
              </svg>
              <span>Comment ça marche</span>
              <svg
                class="chevron"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                />
              </svg>
            </a>

            <a
              href="/explorer"
              class="mobile-nav-link"
              @click="closeMobileMenu"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
              <span>Explorer les capsules</span>
              <svg
                class="chevron"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                />
              </svg>
            </a>

            <a href="/idees" class="mobile-nav-link" @click="closeMobileMenu">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17h8v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"
                />
              </svg>
              <span>Idées de capsules</span>
              <svg
                class="chevron"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                />
              </svg>
            </a>

            <a href="/contact" class="mobile-nav-link" @click="closeMobileMenu">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
              <span>Nous contacter</span>
              <svg
                class="chevron"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="mobile-nav-section">
          <div class="section-title">Mon compte</div>
          <div class="mobile-nav-links">
            <a href="/profil" class="mobile-nav-link" @click="closeMobileMenu">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
              <span>Mon profil</span>
              <svg
                class="chevron"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                />
              </svg>
            </a>

            <a
              href="/capsules"
              class="mobile-nav-link"
              @click="closeMobileMenu"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
                />
              </svg>
              <span>Mes capsules</span>
              <svg
                class="chevron"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;

      if (this.isMobileMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = "unset";
    },
  },
  beforeUnmount() {
    document.body.style.overflow = "unset";
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
}

.logo img {
  height: 40px;
  width: auto;
}

.desktop-menu {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.desktop-menu .links {
  font-family: "Poppins", sans-serif;
  color: white;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.desktop-menu .links:hover {
  transform: translateY(-10px);
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffa939;
}

.desktop-buttons {
  display: flex;
  gap: 10px;
}

.btn1,
.btn2 {
  border: 2px solid white;
  padding: 8px 20px;
  border-radius: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn1 {
  background-color: transparent;
  color: white;
}

.btn2 {
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

.mobile-menu-btn,
.mobile-user-icon {
  display: none;
}

.burger-icon {
  width: 24px;
  height: 18px;
  position: relative;
  cursor: pointer;
}

.burger-icon span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: white;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.burger-icon span:nth-child(1) {
  top: 0px;
}

.burger-icon span:nth-child(2) {
  top: 8px;
}

.burger-icon span:nth-child(3) {
  top: 16px;
}

.burger-icon.active span:nth-child(1) {
  top: 8px;
  transform: rotate(135deg);
}

.burger-icon.active span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.burger-icon.active span:nth-child(3) {
  top: 8px;
  transform: rotate(-135deg);
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 100vh;
  background: #47ba87;
  z-index: 2000;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  overflow-y: auto;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.mobile-menu.active {
  transform: translateX(0);
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-logo {
  height: 35px;
  width: auto;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu-content {
  padding: 20px;
}

.mobile-auth-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

.mobile-btn-primary {
  background: white;
  color: #47ba87;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 12px 20px;
  border-radius: 25px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-nav-section {
  margin-bottom: 25px;
}

.section-title {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
  padding-left: 15px;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  padding: 15px;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  gap: 12px;
}

.mobile-nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.mobile-nav-link span {
  flex: 1;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
}

.chevron {
  opacity: 0.6;
}

@media (max-width: 768px) {
  .desktop-menu,
  .desktop-buttons {
    display: none;
  }

  .mobile-menu-btn,
  .mobile-user-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header {
    justify-content: space-between;
    padding: 0 20px;
  }

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .logo img {
    height: 35px;
  }
}

@media (max-width: 480px) {
  .header {
    width: calc(100% - 20px);
    padding: 0 15px;
  }

  .mobile-menu {
    width: 280px;
  }
}
</style>
