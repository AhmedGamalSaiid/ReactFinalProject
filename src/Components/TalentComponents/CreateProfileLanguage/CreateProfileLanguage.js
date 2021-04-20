import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateProfileLanguage() {
    return (
        <section className=" bg-white border rounded mt-3 pt-4">
            <div className="border-bottom ps-4 pb-3">
                <h4>Languages</h4>
            </div>
            <div className="p-4 my-3">
                <p className="fw-bold">What is your English proficiency?</p>
                <select class="form-select form-select-lg mb-3 shadow-none w-50" aria-label=".form-select-lg example">
                    <option selected>English proficiency</option>
                    <option value="1">Basic</option>
                    <option value="2">Conversational</option>
                    <option value="3">Fluent</option>
                    <option value="4">Native</option>
                </select>

            </div>
            <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
                <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">Back</Link>
                <Link className="btn bg-upwork px-5" to="/create-profile/hourly-rate">Next</Link>
            </div>
        </section>
    )
}
