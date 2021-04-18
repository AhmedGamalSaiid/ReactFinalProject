/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import HeaderSearchSm from '../../SharedComponents/HeaderSearchSm/HeaderSearchSm';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeLayout } from '../../../Store/actions/changeLayout';


export default function NavSmallScreen() {

    // let layOut = useSelector((state) => state.layOut);
    // const dispatch = useDispatch();

    // const changeLayOut = () => {
    //     layOut = "client";
    //     dispatch(changeLayout(layOut));
    // }

    return (
        <>
            <div className="collapse d-lg-none" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="mt-3">
                        <HeaderSearchSm />
                    </li>
                    <li className="dropdown px-3">
                        <a className="nav-link dropdown-toggle mt-4 pt-4 border-top-cn" href="a" id="navbarDropdownMenuLink"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="40" height="40"
                                role="img" style={{ marginTop: "-10px" }}>
                                <path fillRule="evenodd" fill="white"
                                    d="M7 12.6a5.6 5.6 0 0 1-4.64-2.47C2.94 8.78 4.49 7.88 7 7.88s4.06.9 4.64 2.25A5.6 5.6 0 0 1 7 12.6M7 1.45a2.76 2.76 0 1 1 0 5.53 2.76 2.76 0 0 1 0-5.53M7 0a7 7 0 1 0 .02 14.02A7 7 0 0 0 7 0">
                                </path>
                            </svg>
                            {" "}Name
                            <i className="fa fa-sort-down text-white float-end"></i>
                        </a>
                        <ul id="acc-id" className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li className="px-4 py-3">
                                <div id="acc-btns-id" className="btn-group w-100" role="group" aria-label="Basic example">
                                    <button type="button" className="btn">Online</button>
                                    <span style={{ padding: "0 1px" }}></span>
                                    <button type="button" className="btn">Invisible</button>
                                </div>
                            </li>
                            <li>
                                <Link className="dropdown-item px-4" href="/find-work">
                                    <div className="d-flex align-items-center">
                                        <span style={{ marginLeft: "-5px" }}><i className="fa fa-user-circle fs-3"></i></span>
                                        <div className="acc-cn ms-2">
                                            <p>Name</p>
                                            <p>Freelancer</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item px-4 mb-1" to="/home"
                                // onClick={changeLayOut}
                                >
                                    <div className="d-flex align-items-center">
                                        <span style={{ marginLeft: "-5px" }}><i className="fa fa-user-circle fs-3"></i></span>
                                        <div className="acc-cn ms-2">
                                            <p>Name</p>
                                            <p>Client</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown px-3">
                        <a className="nav-link active dropdown-toggle mt-2 pt-3 border-top-cn" href="a"
                            id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Find Work
                            <i className="fa fa-sort-down text-white float-end"></i>
                        </a>
                        <ul className="dropdown-menu sub-drop-cn" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="a">Find Work</a></li>
                            <li><a className="dropdown-item" href="a">Saved Jobs</a></li>
                            <li><a className="dropdown-item" href="a">Proposals</a></li>
                            <li><a className="dropdown-item" href="a">Profile</a></li>
                            <li><a className="dropdown-item" href="a">My Stats</a></li>
                            <li><a className="dropdown-item" href="a">Upwork Readiness Test</a></li>
                            <li><a className="dropdown-item" href="a">My Project Dashboard</a></li>
                        </ul>
                    </li>
                    <li className="dropdown px-3">
                        <a className="nav-link dropdown-toggle mt-2 pt-3 border-top-cn" href="a" id="navbarDropdownMenuLink"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            My Jobs
                            <i className="fa fa-sort-down text-white float-end"></i>
                        </a>
                        <ul className="dropdown-menu sub-drop-cn" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="a">My Jobs</a></li>
                            <li><a className="dropdown-item" href="a">All Contracts</a></li>
                            <li><a className="dropdown-item" href="a">Work Diary</a></li>
                        </ul>
                    </li>
                    <li className="dropdown px-3">
                        <a className="nav-link dropdown-toggle mt-2 pt-3 border-top-cn" href="a" id="navbarDropdownMenuLink"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Reports
                            <i className="fa fa-sort-down text-white float-end"></i>
                        </a>
                        <ul className="dropdown-menu sub-drop-cn" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="a">Overview</a></li>
                            <li><a className="dropdown-item" href="a">My Reports</a></li>
                            <li><a className="dropdown-item" href="a">Lifetime Billings by Client</a></li>
                            <li><a className="dropdown-item" href="a">Connects History</a></li>
                            <li><a className="dropdown-item" href="a">Transaction History</a></li>
                            <li><a className="dropdown-item" href="a">Certificate of Earnings</a></li>
                        </ul>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link mt-2 pt-3 border-top-cn" to="/t/messages">Messages</Link>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link mt-2 pt-3 border-top-cn" href="a">
                            Help
                            <i className="fas fa-question float-end"></i>
                        </a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link mt-2 pt-3 border-top-cn" href="a">
                            Notification
                            <i className="far fa-bell float-end"></i>
                        </a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link mt-2 pt-3 border-top-cn" href="a">
                            Direct Contracts
                            <i className="far fa-paper-plane float-end" style={{ transform: "scaleX(-1)" }}></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="dropdown-item mt-2 pt-3 border-top-cn" href="a">
                            <span><i className="fa fa-cog"></i></span>
                            <span className="ps-3">Settings</span>
                        </a>
                    </li>
                    <li className="nav-item pb-2">
                        <a className="dropdown-item mt-2 pt-3 border-top-cn" href="a">
                            <span><i className="fas fa-sign-out-alt"></i></span>
                            <span className="ps-3">Log Out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
