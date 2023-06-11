import React from 'react'
import logo from '../../assets/img/logo.png'
export const Header = () => {
    return (
    <header className="p-3 mb-5 border-bottom my-header">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/"  className=" d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                    <img src={logo} alt="logo" className="mx-3" />
                </a>
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/" className="nav-link px-2 link-dark">For you & family </a></li>
                    <li><a href="/" className="nav-link px-2 link-dark disabled  link-dark-disabled  ">For Business</a></li>
                </ul>
            </div>
        </div>
  </header>
    )
}
