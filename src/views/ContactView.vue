<template>
  <section class="py-md-5 py-3 bg-primary">
    <div
      class="container bg-dark p-0 p-md-5 py-3 my-2 d-flex justify-content-center align-items-center rounded-4"
    >
      <form id="contactForm">
        <div class="form-title text-center text-white mb-3 mb-md-5">
          <h1>Terhubung Bersama Kami</h1>
          <h5>Kami senang menerima pesan dari Anda</h5>
        </div>
        <!-- Name input-->
        <div class="form-floating mb-3">
          <input
            class="form-control"
            id="name"
            type="text"
            placeholder="Enter your name..."
            data-sb-validations="required"
          />
          <label for="name">Full name</label>
          <div class="invalid-feedback" data-sb-feedback="name:required">
            A name is required.
          </div>
        </div>
        <!-- Email address input-->
        <div class="form-floating mb-3">
          <input
            class="form-control"
            id="email"
            type="email"
            placeholder="name@example.com"
            data-sb-validations="required,email"
          />
          <label for="email">Email address</label>
          <div class="invalid-feedback" data-sb-feedback="email:required">
            An email is required.
          </div>
          <div class="invalid-feedback" data-sb-feedback="email:email">
            Email is not valid.
          </div>
        </div>
        <!-- Phone number input-->
        <div class="form-floating mb-3">
          <input
            class="form-control"
            id="phone"
            type="tel"
            placeholder="(123) 456-7890"
            data-sb-validations="required"
          />
          <label for="phone">Phone number</label>
          <div class="invalid-feedback" data-sb-feedback="phone:required">
            A phone number is required.
          </div>
        </div>
        <!-- Message input-->
        <div class="mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="form-label text-white ms-1"
            >Message</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <!-- Submit Button-->
        <div class="d-grid">
          <button
            class="btn btn-primary btn-lg"
            id="submitButton"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style>
</style>
