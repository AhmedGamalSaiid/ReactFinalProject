import React from 'react'
import SignupFooter from "../../../Components/BeforeLoginComponents/SignupFooter/SignupFooter";
import LoginHeader from "../../../Components/BeforeLoginComponents/LoginHeader/LoginHeader";
import EmailVerified from '../../../Components/BeforeLoginComponents/EmailVerified/EmailVerified';

export default function EmailVerfied() {

    return (
        <>
            <LoginHeader />
            <EmailVerified />
            <SignupFooter />
        </>
    )
}
