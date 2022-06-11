import React,{useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faBuilding, faAngleRight, faUserGear, faLandmarkDome,faAngleDown} from '@fortawesome/free-solid-svg-icons';
import Header from "./Header"
import Footer from "./Footer"
import "./style.css";
import slider from "./images/slider.png";
import about from "./images/about.png";
import bg from "./images/bg.png";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';


function Home() {


useEffect(() => {
    let carouselIndicatorButtons = document.querySelectorAll('#second_id button')
    document.querySelectorAll('.carousel').forEach((button) => {
        button.addEventListener('slid.bs.carousel', function () {
            let activeIndicator = document.querySelector('.carousel-indicators button.active')

            carouselIndicatorButtons.forEach((button2) => {
                button2.classList.remove('active')
            })

            document.querySelector('#second_id button[data-bs-slide-to="' +
                activeIndicator.dataset.bsSlideTo + '"]').classList.add('active')
        });
    });
}, [])

    return (
        <div className="App">
            <div className="main_wrapper">
                <Header />
                <div className="slider_main">
                    <div className="menu">
                        <div className="container px-0">
                            <nav className="navbar navbar-expand-lg p-0 navbar-light bg-transparent">
                                <div className="container-fluid">
                                    <a className="navbar-brand" href="#">Logo</a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <div className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">Home</a></li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    About us<FontAwesomeIcon icon={faAngleDown} />

                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a className="dropdown-item" href="#">Menu1</a></li>
                                                    <li><a className="dropdown-item" href="#">Menu2</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Projects<FontAwesomeIcon icon={faAngleDown} />
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a className="dropdown-item" href="#">Menu1</a></li>
                                                    <li><a className="dropdown-item" href="#">Menu2</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item"> <a className="nav-link" href="#">Financial Statements</a></li>
                                            <li className="nav-item"> <a className="nav-link" href="#">Evaluate Your Property</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="slider">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators bottom_indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} aria-current="true" className="active" aria-label="Slide 1" />
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
                            </div>
                            <div className="carousel-indicators left_indicators" id="second_id">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} aria-current="true" className="active" aria-label="Slide 1">01</button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2">02</button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3">03</button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4">04</button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={slider} className="d-block" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>It's Probably for us to Build Stylis</h5>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</p>
                                        <a href="#">LEARN MORE &nbsp;&nbsp;<FontAwesomeIcon icon={faAngleRight} /></a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={slider} className="d-block" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>It's Probably for us to Build Stylis</h5>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</p>
                                        <a href="#">LEARN MORE &nbsp;&nbsp;<FontAwesomeIcon icon={faAngleRight} /></a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={slider} className="d-block" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>It's Probably for us to Build Stylis</h5>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</p>
                                        <a href="#">LEARN MORE&nbsp;&nbsp;<FontAwesomeIcon icon={faAngleRight} /></a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={slider} className="d-block" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>It's Probably for us to Build Stylis</h5>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</p>
                                        <a href="#">LEARN MORE&nbsp;&nbsp;<FontAwesomeIcon icon={faAngleRight} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={about} className="img-fluid" />
                            </div>
                            <div className="col-md-6">
                                <h3>About us</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
                                <a href="#">LEARN MORE</a>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faBuilding} />&nbsp;&nbsp;
                                            <p>Company</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;
                                            <p>Our Manager</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faUserGear} />&nbsp;&nbsp;
                                            <p>Management</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faLandmarkDome} />&nbsp;&nbsp;
                                            <p>Governance</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our_projects">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h3> Our Projects</h3>
                                <p>Ut vel veritus adipisci pertin acia, noster viderer detracto ea est, et clit</p>
                                <a href="#">LEARN MORE</a>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-4 px-0 position-relative">
                                        <img src={project1} className="img-fluid w-100" />
                                        <a href="#" className="custom_link">
                                            <span>KREIC Complex</span>
                                        </a>
                                    </div>
                                    <div className="col-md-4 px-0 position-relative">
                                        <img src={project2} className="img-fluid w-100" />
                                        <a href="#" className="custom_link">
                                            <span>KREIC Complex</span>
                                        </a>
                                    </div>
                                    <div className="col-md-4 px-0 position-relative">
                                        <img src={project3} className="img-fluid w-100" />
                                        <a href="#" className="custom_link">
                                            <span>KREIC Complex</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
