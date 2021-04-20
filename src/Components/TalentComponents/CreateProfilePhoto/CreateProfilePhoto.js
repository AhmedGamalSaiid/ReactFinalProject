import { Link } from 'react-router-dom'
export default function CreateProfilePhoto() {
    return (
        <section className="bg-white border rounded mt-3 pt-4">
            <div className="border-bottom ps-4 pb-3">
                <h4>Profile Photo</h4>
            </div>
            <div className="px-4 my-4">
                <p>Please upload a professional portrait that clearly shows your face. <Link to=""><i class="fas fa-info-circle"></i></Link></p>
                <div className="w-25 text-center mt-5">
                    <i class="fas fa-user-circle fa-7x" style={{ color: "#A0A0A0" }}></i>
                </div>
                <button className="btn border mt-4" style={{ color: "#37a000" }}><i class="fas fa-plus me-3"></i>Add Profile Photo</button>
            </div>
            <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
                <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">Back</Link>
                <Link className="btn bg-upwork px-5" to="/create-profile/location">Next</Link>
            </div>
        </section >
    )
}
