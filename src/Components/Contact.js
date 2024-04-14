import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-info">Contact Us</h1>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input
          type="text"
          class="form-control mb-3"
          placeholder="Enter your Name"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Mobile</label>
        <input
          type="number"
          class="form-control mb-3"
          placeholder="Enter your Mobile number"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input
          type="email"
          class="form-control mb-3"
          placeholder="Enter your Email"
        />
      </div>
      <div class="mb-3">
        <label class="form-label mb-3">Example textarea</label>
        <textarea
          class="form-control mb-3"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button className="btn btn-primary mb-3">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
