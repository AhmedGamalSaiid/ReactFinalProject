/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import './PostJobDescription.css'
export default function PostJobDescription() {
    return (
        <section className=" bg-white border rounded mt-3 pt-4">
            <div className="border-bottom ps-4">
                <h4>Description</h4>
                <p>Step 2 of 7</p>
            </div>
            <div className="ps-4 mt-3">

                <p className="fw-bold mt-2">A good description includes:</p>
                <ul style={{ listStyle: "disc" }}>
                    <li>What the deliverable is</li>
                    <li>Type of freelancer or agency you're looking for</li>
                    <li>Anything unique about the project, team, or your company</li>
                </ul>
            </div>
            <div className="ps-4 pt-2 pe-4">
                <textarea className="form-control" rows="8"></textarea>
                <span className="float-end">0/5000 characters (minimum 50)</span>
            </div>
            <div className="mx-4 mt-5 py-2 pb-4">
                <p className="fw-bold">Additional project files (optional)</p>
                <div className="attachments-cn">
                    <p className="py-2 text-center mt-2">drag or <a className="upw-c-cn" href="#">upload</a> project images</p>
                </div>
                <p className="my-3">You may attach up to 5 files under <strong>100 MB</strong> each</p>
            </div>
            <div className="ps-4 my-3 pt-4 pb-3 pt-3 border-top">
                <Link className="btn border text-success me-4 px-5" to="/post-job/title">Back</Link>
                <Link className="btn bg-upwork px-5" to="/post-job/details">Next</Link>
            </div>
        </section>
    )
}
