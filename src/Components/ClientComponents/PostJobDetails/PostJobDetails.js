import React from 'react'
import { Link } from 'react-router-dom'
import './PostJobDetails.css'
export default function PostJobDetails() {
    return (
        <>
            <section className=" bg-white border rounded mt-3 pt-4">
                <div className="border-bottom ps-4">
                    <h4>Details</h4>
                    <p>Step 3 of 7</p>
                </div>
                <div className="px-4 mt-3">
                    <p className="fw-bold mt-2">What type of project do you have?</p>
                    <div className="my-4 d-flex justify-content-between">
                        <label className="border border-success rounded p-3 text-center">
                            <input type="radio" className="float-end" name="short-long-job" value="short" />
                            <div><i className="fas fa-briefcase"></i></div>
                            <h6 className="my-3">One-time project</h6>
                            <div>Find the right skills for a short-term need.</div>
                        </label>
                        <label className="border border-success rounded p-3 text-center mx-3">
                            <input type="radio" className="float-end" name="short-long-job" value="long" />
                            <div><i className="fas fa-list-alt"></i></div>
                            <h6 className="my-3">Ongoing project</h6>
                            <div>Find a skilled resource for an extended engagement.</div>
                        </label>
                        <label className="border border-success rounded p-3 text-center">
                            <input type="radio" className="float-end" name="short-long-job" value="long" />
                            <div><i className="fas fa-th-large"></i></div>
                            <h6 className="my-3">Complex project</h6>
                            <div>Find specialized experts and agencies for large projects.</div>
                        </label>
                    </div>
                </div>
            </section>

            <section className="bg-white border rounded mt-3">
                <div className="ps-4 my-3">
                    <Link className="btn border text-success me-4 px-5" to="/post-job/description">Back</Link>
                    <Link className="btn bg-upwork px-5" to="/post-job/expertise">Next</Link>
                </div>
            </section>
        </>
    )
}
