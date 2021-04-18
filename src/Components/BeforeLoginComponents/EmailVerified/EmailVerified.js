/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import firebaseApp from "../../../firebase";

import verify from "../../../assets/svg/verifyEmail.svg";
import { Link } from 'react-router-dom';

export default function EmailVerified() {

    // let [isVerfy, setIsVerfy] = useState(false);

    // if (firebaseApp.auth().currentUser) {
    //     isVerfy = firebaseApp.auth().currentUser.emailVerified
    //     setIsVerfy(isVerfy);
    // }

    // firebaseApp.auth().onAuthStateChanged(user => {
    //     isVerfy = user.emailVerified
    //     setIsVerfy(isVerfy);
    //     console.log(user.emailVerified);
    // })



    return (
        <div className="text-center" style={{ margin: "67px 0" }}>
            <img src={verify} style={{ width: "150px" }} />
            <h3 className="my-3">Verify your email to proceed</h3>
            <Link className="btn bg-upwork" to="/login">Login Now</Link>
            <br />
            {/* <h1>for testing {isVerfy}</h1> */}
        </div>
    )
}
