/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateProfileCategory() {
    return (
        <section className=" bg-white border rounded mt-3 pt-4">
            <div className="border-bottom ps-4 pb-3">
                <h4>Category</h4>
            </div>
            <div className="p-4 my-3">
                <h5 className="fw-bold mb-4">Tell us about the work you do</h5>
                <p className="fw-bold">What is the main service you offer?</p>
                <select class="form-select form-select-lg mb-3 shadow-none" aria-label=".form-select-lg example">
                    <option selected>Select a category</option>
                    <option value="1">Web Development</option>
                    <option value="2">Web Design</option>
                    <option value="3">Graphic Design</option>
                </select>

            </div>
            <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
                <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">Back</Link>
                <Link className="btn bg-upwork px-5" to="/create-profile/expertise-level">Next</Link>
            </div>
        </section>
    )
}
