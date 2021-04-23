import React from 'react'
import { Link } from 'react-router-dom'
import './PostJobExpertise.css'
export default function PostJobExpertise() {
    return (
        <>
            <section className=" bg-white border rounded mt-3 pt-4">
                <div className="border-bottom ps-4">
                    <h4>Expertise</h4>
                    <p>Step 4 of 7</p>
                </div>
                <div className="px-4 mt-3">
                    <p className="fw-bold mt-2">What level of experience should your freelancer have?</p>
                    <div className="my-4 d-flex justify-content-between">
                        <label className="border border-success rounded p-3 text-center">
                            <input type="radio" className="float-end" name="short-long-job" value="short" />
                            <h6 className="my-3">Entry Level</h6>
                            <div>Looking for someone relatively new to this field</div>
                        </label>
                        <label className="border border-success rounded p-3 text-center mx-3">
                            <input type="radio" className="float-end" name="short-long-job" value="long" />
                            <h6 className="my-3">Intermediate</h6>
                            <div>Looking for substantial experience in this field</div>
                        </label>
                        <label className="border border-success rounded p-3 text-center">
                            <input type="radio" className="float-end" name="short-long-job" value="long" />
                            <h6 className="my-3">Expert</h6>
                            <div>Looking for comprehensive and deep expertise in this field</div>
                        </label>
                    </div>
                </div>
            </section>

            <section className="bg-white border rounded mt-3">
                <div className="ps-4 my-3">
                    <Link className="btn border text-success me-4 px-5" to="/post-job/details">Back</Link>
                    <Link className="btn bg-upwork px-5" to="/post-job/visibility">Next</Link>
                </div>
            </section>
        </>
    )
}
