<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <div class="container">
      <a class="navbar-brand text-uppercase" href="#">Mofies</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'MoviesView' }"
              >Movies</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'FAQView' }"
              >FAQ</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'ContactView' }"
              >Contact</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link rounded-3 text-center login"
              :to="{ name: 'AccountView' }"
              >Log In
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->

  <!-- View Page -->
  <router-view />
  <!-- End View Page -->

  <!-- Footer -->
  <MyFooter />
  <!-- End Footer -->
</template>

<script>
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyFooter,
  },
};
</script>

<style>
header,
#features,
.feedback {
  color: #bcbcbc;
}

.login {
  padding: 3px 5px 6px;
  margin-top: 2px;
  background-color: #0d6efd;
  color: whitesmoke;
  border: 2px solid whitesmoke;
}

.login:hover {
  background-color: white;
  color: #0d6efd;
}

#features img {
  width: 100%;
  display: block;
}

.reverse {
  display: flex;
  flex-direction: row-reverse;
}

.feedback {
  height: 100%;
}

.feed-msg {
  width: 60%;
  margin-bottom: 0;
  padding: 70px 0;
  font-style: italic;
  text-align: justify;
}

.feed-msg q {
  letter-spacing: 2px;
  text-align: center;
}

.feed-profil h5 {
  font-weight: bold;
}

.feed-profil span {
  font-weight: 300;
  opacity: 0.3;
}

@media screen and (max-width: 768px) {
  .reverse {
    flex-direction: column;
  }
}
</style>
