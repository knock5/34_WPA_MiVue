<template>
  <!-- Jumbotron -->
  <header class="bg-dark py-md-2 pb-5">
    <div class="container px-5">
      <div class="row gx-5 align-items-center justify-content-center">
        <div class="col-md-6">
          <img
            class="img-fluid rounded-3 my-5"
            src="../assets/mif.jpg"
            alt="banner-mif"
          />
        </div>
        <div class="col-md-6">
          <h1>Selamat datang, di Mofies</h1>
          <p>
            Hilangkan rasa stres kamu, hilangkan rasa gabut kamu, ajak teman
            kamu untuk nonton film bersama!
          </p>
          <div class="gap-3">
            <a class="btn btn-primary text-uppercase" href="#features"
              >Mari kita mulai</a
            >
            <router-link :to="{ name: 'RegistrasiView' }">
              <span class="btn btn-success text-uppercase mx-3">Daftar</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- End Jumbotron -->

  <!-- Features -->
  <section id="features" class="py-5 bg-black">
    <div class="container px-5 my-5">
      <div class="row gx-5 mb-5 justify-content-center align-items-center">
        <div class="col-md-6">
          <h2>Siapkan Layar Anda</h2>
          <p>
            Anda bisa nonton menggunakan SmartTV, Playstation, Xbox, Chromecast,
            Apple TV, Blu-ray players, Laptop, dan lainnya yang layarnya lebar
            agar lebih maksimal dan seru abis.
          </p>
        </div>
        <div class="col-md-6">
          <img
            class="text-center m-auto"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="TV-pict"
          />
        </div>
      </div>
      <div class="gx-5 mb-5 justify-content-center align-items-center reverse">
        <div class="col-md-6">
          <h2>Download Aplikasinya Agar Dapat Fitur Menarik</h2>
          <p>
            Dengan mengunduh aplikasi <span>Mofies</span> anda dapat mengunduh
            film yang anda sukai agar dapat ditonton secara offline. Anda juga
            dapat membuat daftar watchlist, memasukkan film dalam kategori
            favorit, dan masih banyak lagi.
          </p>
        </div>
        <div class="col-md-6">
          <img
            class="m-auto"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="TV-pict"
          />
        </div>
      </div>
      <div class="row gx-5 mb-5 justify-content-center align-items-center">
        <div class="col-md-6">
          <h2>Tonton Film Dimanapun dan Kapanpun</h2>
          <p>
            Tonton terus sesukamu, buat waktu luangmu menjadi seru dengan nonton
            film menggunakan handphone, tablet, laptop, dan TV kamu.
          </p>
        </div>
        <div class="col-md-6">
          <img
            class="text-center m-auto"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-id.png"
            alt="TV-pict"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- End Features -->

  <section>
    <!-- Testimonial -->
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner bg-dark">
        <div class="carousel-item active" data-bs-interval="4000">
          <div
            class="feedback mb-4 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              class="feed-msg d-flex justify-content-center align-items-center"
            >
              <q
                >Dengan aplikasi ini saya dapat mengisi waktu senggang saya
                dengan baik. Fiturnya keren-keren banget. Terus berkembang lebih
                baik!</q
              >
            </div>
            <div
              class="profil-test d-flex justify-content-center align-items-center"
            >
              <div class="feed-pict mx-3">
                <img
                  class="rounded-circle"
                  src="https://dummyimage.com/60x60/343a40/6c757d"
                  alt="feed-profile-picture"
                />
              </div>
              <div class="feed-profil">
                <h5>Chou</h5>
                <span>Athlete</span>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <div
            class="feedback mb-4 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              class="feed-msg d-flex justify-content-center align-items-center"
            >
              <q
                >Filmnya banyak banget, seru banget buat nonton bersama.
                Kualitas gambarnya juga oke banget deh</q
              >
            </div>
            <div
              class="profil-test d-flex justify-content-center align-items-center"
            >
              <div class="feed-pict mx-3">
                <img
                  class="rounded-circle"
                  src="https://dummyimage.com/60x60/343a40/6c757d"
                  alt="feed-profile-picture"
                />
              </div>
              <div class="feed-profil">
                <h5>Jhonson</h5>
                <span>Driver</span>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <div
            class="feedback mb-4 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              class="feed-msg d-flex justify-content-center align-items-center"
            >
              <q
                >Gokil, seru banget. Cocok untuk meredakan stress ini nonton
                bersama teman ataupun keluarga. Healing dimanapun dan
                kapanpun.</q
              >
            </div>
            <div
              class="profil-test d-flex justify-content-center align-items-center"
            >
              <div class="feed-pict mx-3">
                <img
                  class="rounded-circle"
                  src="https://dummyimage.com/60x60/343a40/6c757d"
                  alt="feed-profile-picture"
                />
              </div>
              <div class="feed-profil">
                <h5>Odette</h5>
                <span>Singer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- End Testimonial -->

    <!-- Call to Action -->
    <aside
      class="bg-primary bg-gradient rounded-3 p-4 p-sm-5 my-3 mx-3 my-sm-5 mx-sm-5"
    >
      <div
        class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start"
      >
        <div class="mb-4 mb-xl-0">
          <div class="fs-3 fw-bold text-white">
            Jangan Lewatkan Promo dan Event Menarik Kami!
          </div>
          <div class="text-white-50">Lakukan registrasi agar tetap update.</div>
        </div>
        <div class="ms-xl-4">
          <div class="input-group mb-2">
            <input
              class="form-control"
              type="text"
              placeholder="Email address..."
              aria-label="Email address..."
              aria-describedby="button-newsletter"
            />
            <button
              class="btn btn-outline-light"
              id="button-newsletter"
              type="button"
            >
              Sign up
            </button>
          </div>
          <div class="small text-white-50">
            Kami peduli akan privasi, dan tidak akan menyebarkan data Anda.
          </div>
        </div>
      </div>
    </aside>
    <!-- End Call to Action -->
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
