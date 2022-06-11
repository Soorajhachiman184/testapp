import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {FaInstagram } from 'react-icons/fa';
function Header() {
    return (
      <div className="Header">
  <div className="top_header">
    <div className="container d-flex align-items-center px-0">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link">
          <FontAwesomeIcon icon={faLanguage} />&nbsp;&nbsp;Arabic
            </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" href="#">English</a>
        </li>
      </ul>
      <ul className="nav ms-auto">
        <li className="nav-item">
          <a className="nav-link"><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;(965) 58684888</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;support@we.com</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><FaInstagram/>&nbsp;&nbsp;@we.kw</a>
        </li>
      </ul>
    </div>
  </div>
      </div>
    );
  }

export default Header;
