import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faHouse, faSquarePhone, faFax, faEnvelopeSquare, faAngleDown } from '@fortawesome/free-solid-svg-icons';
function Home() {
    return (
            <div className="footer">
                <div className="footer_top">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
                </div>
                <div className="container border_bott">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="logo">LOGO</div>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.</p>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="foot_head">Links</div>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link px-0" href="#"><FontAwesomeIcon icon={faAngleRight} />&nbsp;&nbsp;Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-0" href="#"><FontAwesomeIcon icon={faAngleRight} />&nbsp;&nbsp;About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-0" href="#"><FontAwesomeIcon icon={faAngleRight} />&nbsp;&nbsp;projects</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-0" href="#"><FontAwesomeIcon icon={faAngleRight} />&nbsp;&nbsp;Rent Average</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-0" href="#"><FontAwesomeIcon icon={faAngleRight} />&nbsp;&nbsp;Search Property</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link px-0" href="#"><FontAwesomeIcon icon={faAngleRight} />&nbsp;&nbsp;Evaluvate Your Property</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-0" href="#"><FontAwesomeIcon icon={faAngleRight} />&nbsp;&nbsp;Related Links</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-0" href="#"><FontAwesomeIcon icon={faAngleRight} />&nbsp;&nbsp;Financial Statement</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-0" href="#"><FontAwesomeIcon icon={faAngleRight} />&nbsp;&nbsp;Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="foot_head">Contact Us</div>
                            <div className="container foot_add">
                                <div className="row mb-3">
                                    <div className="col-2"><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;</div>
                                    <div className="col-10"><span>Lorem ipsum dolor sit amet, consetetu sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</span></div>
                                </div>
                                <div className="row">
                                    <div className="row mb-3">
                                        <div className="col-2"><FontAwesomeIcon icon={faSquarePhone} />&nbsp;&nbsp;</div>
                                        <div className="col-10"><span><a href="#">(965) 22448260</a></span></div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-2"><FontAwesomeIcon icon={faFax} />&nbsp;&nbsp;</div>
                                        <div className="col-10"><span><a href="#">Fax : (965) 22434440 - 22434454</a></span></div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-2"><FontAwesomeIcon icon={faEnvelopeSquare} />&nbsp;&nbsp;</div>
                                        <div className="col-10"><span><a href="#">support@we.com</a></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    @ Copyright 2020 We, all rights reserved and managed by WE
                </div>
            </div>

    );
}

export default Home;
