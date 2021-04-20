/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import firebaseApp, { db } from "../../../firebase";
import { updateData } from "../../../Network/Network";
import { signUpAction } from "../../../Store/actions/signUp";

export default function CreateProfileCategory() {
  const catVal = (e) => {
    console.log(e.target);
    updateData("talent", { jobCategory: e.target.value });
    // let user = db.collection("talent").onSnapshot((data) => {
    //   for (const key in data.docs) {
    //     if (
    //       data.docs[key].data().authID === firebaseApp.auth().currentUser.uid
    //     ) {
    //       db.collection("talent")
    //         .doc(data.docs[key].id)
    //         .update({ jobCategory: e.target.value, ahmed: "hamad" })
    //         .then(() => {
    //           console.log("done");
    //         })
    //         .catch((e) => {
    //           console.log("fail");
    //           console.log(e);
    //         });
    //     }
    //   }
    // });
  };

  return (
    <section className=" bg-white border rounded mt-3 pt-4">
      <div className="border-bottom ps-4 pb-3">
        <h4>Category</h4>
      </div>
      <div className="p-4 my-3">
        <h5 className="fw-bold mb-4">Tell us about the work you do</h5>
        <p className="fw-bold">What is the main service you offer?</p>
        <select
          class="form-select form-select-lg mb-3 shadow-none"
          aria-label=".form-select-lg example"
          onChange={catVal}
        >
          <option selected>Select a category</option>
          <option value="Web Development">Web Development</option>
          <option value="Web Design">Web Design</option>
          <option value="Graphic Design">Graphic Design</option>
        </select>
      </div>
      <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
        <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">
          Back
        </Link>
        <Link
          className="btn bg-upwork px-5"
          to="/create-profile/expertise-level"
        >
          Next
        </Link>
      </div>
    </section>
  );
}
