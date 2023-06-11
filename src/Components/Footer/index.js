import React from 'react'
export const Footer = () => {
    return (
        <div className="container" style={{background:'#f0f2f6'}}>
  <footer className="py-5 ">
    <div className="row d-flex justify-content-evenly">
      <div className="col-2">
        <h5>ADDRESS</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><span className=" p-0 text-muted">400-401 West Georgia Street</span></li>
          <li className="nav-item mb-2"><span className=" p-0 text-muted">Vancouver, BC, Canada, V6B 5A1</span></li>
          <li className="nav-item mb-2"><span className=" p-0 text-muted">+1 (123) 456 7890</span></li>
          <li className="nav-item mb-2"><span className=" p-0 text-muted">sales@insurance.com</span></li>
        </ul>
      </div>

      <div className="col-2">
        <h5>FOLLOW US</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Twitter</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Facebook</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">LinkedIn</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Instagram</a></li>
        </ul>
      </div>

      <div className="col-2">
        <h5>ABOUT US</h5>
        <p className="p-0 text-muted">
        Compellingly myocardinate market-driven infrastructures before team driven manufactured products. Monotonectally exploit tactical markets vis-a-vis excellent deliverables. 
        </p>
      </div>
    </div>

    <div className="d-flex justify-content-center py-4 my-4 border-top">
      <p className="p-0 text-muted">Copyright © 2019. Insurance LLC</p>
    </div>
  </footer>
</div>
    )
}
