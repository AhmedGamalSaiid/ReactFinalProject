import React from 'react'
import { Link } from 'react-router-dom'
import './PostJobReview.css'
export default function PostJobReview() {
    return (
        <>
            <section className=" bg-white border rounded mt-3">
                <div className="ps-4 d-flex border-bottom justify-content-between align-items-center py-4">
                    <h4>Review and post</h4>
                    <Link className="btn bg-upwork me-4 px-5" to="/">Post Job Now</Link>
                </div>
                <div className="px-4 mt-4">
                    <h5>Title</h5>
                    <div>
                        <div className="my-4">
                            <h6>Title</h6>
                            <p>(var)</p>
                        </div>
                        <div>
                            <h6>Job Category</h6>
                            <p>(var)</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" bg-white border rounded mt-4">
                <div className="px-4 mt-4">
                    <h5>Description</h5>
                    <div>
                        <div className="my-4">
                            <h6>Description</h6>
                            <p>(var)</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" bg-white border rounded mt-4">
                <div className="px-4 mt-4">
                    <h5>Details</h5>
                    <div>
                        <div className="my-4">
                            <h6>Type of Project</h6>
                            <p>(var)</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" bg-white border rounded mt-4">
                <div className="px-4 mt-4">
                    <h5>Expertise</h5>
                    <div>
                        <div className="my-4">
                            <h6>Experience Level</h6>
                            <p>(var)</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" bg-white border rounded mt-4">
                <div className="px-4 mt-4">
                    <h5>Visibility</h5>
                    <div>
                        <div className="my-4">
                            <h6>Job Posting Visibility</h6>
                            <p>(var)</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white border rounded mt-4">
                <div className="px-4 mt-4">
                    <h5>Budget</h5>
                    <div className="d-flex">
                        <div className="my-4 w-50">
                            <h6>JobHourly or Fixed-Price</h6>
                            <p>(var)</p>
                        </div>
                        <div className="my-4">
                            <h6>Budget</h6>
                            <p>(var)</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white border rounded mt-4">
                <div className="px-4 mt-4">
                    <h5><i className="fas fa-user-plus text-success me-3"></i>Coworkers</h5>
                    <div className="my-5">
                        <h6>Email Addresses</h6>
                        <input type="text" className="form-control shadow-none" placeholder="Comma-separated emails" />
                    </div>
                    <div className="my-5">
                        <h6>Add a personal message (optional)</h6>
                        <textarea placeholder="Comma-separated emails" rows="5" class="form-control shadow-none"></textarea>
                    </div>
                </div>
                <div className="ps-4 my-3 border-top pt-4">
                    <Link className="btn bg-upwork me-4 px-5" to="/">Post Job Now</Link>
                    <Link className="btn border text-success px-5" to="/home">Save & Exit</Link>
                </div>
            </section>
        </>
    )
}
