<template>
  <section
    class="account-wrap bg-dark py-2 py-md-5 justify-content-center d-flex"
  >
    <form class="p-2 p-md-5 rounded-4 text-white bg-dark">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Ingat saya</label>
      </div>
      <div class="tombol-wrap d-flex mb-3">
        <button type="submit" class="btn btn-primary">Masuk</button>
        <span> | </span>
        <router-link :to="{ name: 'RegistrasiView' }">
          <button class="btn btn-success">Daftar</button>
        </router-link>
      </div>
    </form>
  </section>
</template>

<style>
.account-wrap {
  height: 100vh;
}

.tombol-wrap {
  justify-content: center;
}

.tombol-wrap span {
  margin: 0 10px;
}

form {
  width: 75%;
}
</style>
