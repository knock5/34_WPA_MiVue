<template>
  <section class="p-3 bg-dark">
    <div class="container mt-3">
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-xl-3 mb-3 mb-md-5"
          v-for="(movie, $index) in movies"
          :key="$index"
        >
          <div class="card bg-secondary text-light border-0">
            <img
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              class="card-img-top"
              alt="movie-picture"
            />
            <div class="card-body">
              <div class="card-judul">
                <h5 class="card-title fw-bold">{{ movie.original_title }}</h5>
              </div>
              <div class="card-deskripsi">
                <p class="card-text">
                  {{ movie.overview }}
                </p>
              </div>
              <a href="#!" class="btn btn-danger">Buy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="error">
    <div class="container">
      <p v-if="pesan_error">{{ pesan_error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      pesan_error: "",
    };
  },
  mounted() {
    fetch(
      "https://api.themoviedb.org/4/list/1?api_key=57c02085434b4d224d11aaa4bff6b330"
    )
      .then((res) => res.json())
      .then((res) => {
        this.movies = res.results;
      })
      .catch(err => {
        this.pesan_error = "Maaf, sedang ada maintanance"
      })
  },
};
</script>

<style>
.card-text {
  height: 200px;
  text-align: justify;
  overflow: auto;
  opacity: 0.8;
}

</style>
