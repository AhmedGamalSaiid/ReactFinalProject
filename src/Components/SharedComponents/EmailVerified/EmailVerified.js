/* eslint-disable jsx-a11y/alt-text */

import verify from "../../../assets/svg/verifyEmail.svg";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EmailVerified() {
  const userType = useSelector((state) => state.signUpData.userType);
  //const { push } = useHistory();
  const userRoute = () => {
    // if (userType === "talent") {
    //   push("/create-profile");
    // }
  };

  return (
    <div className="text-center" style={{ margin: "67px 0" }}>
      <img src={verify} style={{ width: "150px" }} />
      <h3 className="my-3">Verify your email to proceed</h3>
      <Link className="btn bg-upwork" to="/create-profile">
        Compelete your profile data
      </Link>
      <br />
      {/* <h1>for testing {isVerfy}</h1> */}
    </div>
  );
}
