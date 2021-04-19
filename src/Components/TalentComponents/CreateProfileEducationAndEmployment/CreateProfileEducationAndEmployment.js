import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateProfileEducationAndEmployment() {
    return (
        <section className="bg-white border rounded mt-3 pt-4">
            <div className="border-bottom ps-4 pb-3">
                <h4>Education & Employment</h4>
            </div>
            <div className="px-4 my-4">
                <div>
                    <p className="fw-bold">Add School</p>
                    <label className="w-100">
                        School
                        <input className="form-control shadow-none" placeholder="Ex: Northwestern University" />
                    </label>
                </div>
                <div className="my-4"></div>
                <div>
                    <p className="fw-bold">Add your past work experience</p>
                    <label className="w-100">
                        Company
                        <input className="form-control shadow-none" />
                    </label>
                    <label className="w-100 mt-3">
                        Title
                        <input className="form-control shadow-none" />
                    </label>
                    <label className="mt-3">
                        I currently work here?
                        <input type="checkbox" className="form-check shadow-none" />
                    </label>
                </div>
            </div>
            <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
                <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">Back</Link>
                <Link className="btn bg-upwork px-5" to="/create-profile/language">Next</Link>
            </div>
        </section >
    )
}
