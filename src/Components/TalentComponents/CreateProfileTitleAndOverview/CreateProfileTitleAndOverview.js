import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateProfileTitleAndOverview() {
    return (
        <section className="bg-white border rounded mt-3 pt-4">
            <div className="border-bottom ps-4 pb-3">
                <h4>Title & Overview</h4>
            </div>
            <div className="px-4 my-4">

                <p><Link to="">Learn more</Link> about writing a great profile or <Link to="">browse profiles</Link> in your category.</p>

                <div className="my-4"></div>
                <div>
                    <label className="w-100">
                        <strong>Title</strong>
                        <i className="fas fa-question-circle upw-c-cn ms-3 mb-3"></i>
                        <input className="form-control shadow-none w-50" />
                    </label>
                    <label className="w-100 mt-3">
                        <strong>Professional Overview</strong>
                        <i className="fas fa-question-circle upw-c-cn ms-3 mb-3"></i>
                        <textarea rows="7" className="form-control shadow-none" placeholder="Highlight your top skills, experience, and interests. This is one of the first things clients will see on your profile."></textarea>
                        <p className="text-end">5000 characters left</p>
                    </label>
                </div>
            </div>
            <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
                <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">Back</Link>
                <Link className="btn bg-upwork px-5" to="/create-profile/profile-photo">Next</Link>
            </div>
        </section >
    )
}
