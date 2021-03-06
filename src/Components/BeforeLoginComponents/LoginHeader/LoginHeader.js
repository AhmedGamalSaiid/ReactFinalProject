/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../SharedComponents/Logo/Logo';

export default function LoginHeader() {

    const { pathname } = useLocation();

    return (
        <header className="py-3" style={{ backgroundColor: "#1d4354" }}>
            <div className="container d-flex justify-content-between">
                <Logo />
                <div>
                    {
                        pathname === "/sign-up" &&
                        <p className="text-white">Already have an account? <Link to="/login">Log In</Link></p>
                    }
                </div>
            </div>
        </header>
    );
}
