import React, { useState } from "react";
import CountrySelect from "react-bootstrap-country-select";
import { Link } from "react-router-dom";
import "react-bootstrap/dist/react-bootstrap";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";

export default function CreateProfileLocation() {
  const [value, setValue] = useState(null);

  return (
    <section className="bg-white border rounded mt-3 pt-4">
      <div className="border-bottom ps-4 pb-3">
        <h4>Location</h4>
      </div>
      <div className="px-4 my-4">
        <p>
          <strong>Where are you based?</strong>
        </p>
        <p>
          We take your privacy very seriously. Only your city and country will
          be shown to clients.
        </p>
        <p>
          <strong>Country</strong>
        </p>
        <CountrySelect className="w-50" value={value} onChange={setValue} />
        <label className="mt-4 w-50">
          <strong className="d-block mb-2">City</strong>
          <input className="form-control" />
        </label>
        <label className="mt-4 w-100">
          <strong className="d-block mb-2">Street Address</strong>
          <input className="form-control" />
        </label>
      </div>
      <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
        <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">
          Back
        </Link>
        <Link className="btn bg-upwork px-5" to="/create-profile/phone-number">
          Next
        </Link>
      </div>
    </section>
  );
}
