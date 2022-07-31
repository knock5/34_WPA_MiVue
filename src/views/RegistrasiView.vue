<template>
  <div
    class="from-wrap px-0 py-5 p-md-5 d-flex justify-content-center align-items-center"
  >
    <form
      class="row g-3 p-md-5 needs-validation bg-light border rounded-2" id="form-registrasi"
      novalidate
    >
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">First name</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Last name</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom02"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label"
          >Username</label
        >
        <div class="input-group has-validation">
          <input
            type="text"
            class="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required
          />
          <div class="invalid-feedback">Please choose a username.</div>
        </div>
      </div>
      <div class="col-md-6">
        <label for="validationCustom03" class="form-label">City</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom03"
          required
        />
        <div class="invalid-feedback">Please provide a valid city.</div>
      </div>
      <div class="col-md-3">
        <label for="validationCustom05" class="form-label">Zip</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom05"
          required
        />
        <div class="invalid-feedback">Please provide a valid zip.</div>
      </div>
      <div class="col-md-6">
        <label for="exampleFormControlInput1" class="form-label"
          >Email address</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your email"
        />
      </div>
      <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Gender</label>
        <select class="form-select" id="validationCustom04" required>
          <option selected disabled value="">Choose...</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <div class="invalid-feedback">Please select a valid state.</div>
      </div>
      <div class="col-md-6">
        <label for="inputPassword" class="form-label">Password</label>
        <div class="user-pass">
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            v-model="password"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="check-password d-flex justify-content-between">
          <label for="inputPassword" class="form-label">Confrim Password</label>
          <span
            class="text-danger"
            v-if="password !== confirm_password && password !== validasiPassword()"
            >Password wrong!</span
          >
        </div>
        <div class="user-pass">
          <input
            type="password"
            class="form-control"
            v-model="confirm_password"
          />
        </div>
      </div>
      <div id="passwordHelpBlock" class="form-text">
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </div>
      <div class="col-12">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck"
            required
          />
          <label class="form-check-label" for="invalidCheck">
            Agree to terms and conditions
          </label>
          <div class="invalid-feedback">You must agree before submitting.</div>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit" @click="pesanSubmit()">
          Daftar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    pesanSubmit() {
      alert("Thank you for register");
    },
    validasiPassword() {
      return this.password.match(/[a-z0-9A-Z]{8,20}/)
    }
  },
};
</script>

<style></style>
