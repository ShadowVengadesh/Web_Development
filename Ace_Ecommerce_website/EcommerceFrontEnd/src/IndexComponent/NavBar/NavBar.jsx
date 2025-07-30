import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = ({ username, address, country, srcImg }) => {
  return (
    <div>
      <div className='container-fluid bg-dark text-white navb' style={{ backgroundColor: '#131921' }}>
        <div className='row align-items-center p-2'>
          <div className='col-auto p-0'>
            <Link className="h2 " to={'./pro'} id='nav-brand'>
              <img src="src/assets/logo.png" alt="logo" className="img-fluid w-75 h-100 p-2" id='logo' />
            </Link>
          </div>
          <div className='col-auto d-none d-lg-flex align-items-center'>
            <img src="src/assets/location.svg" alt="" className="lo-icon" />
            <p className='address mb-0 p-1 '>&nbsp;Deliver to&nbsp;<strong>{username}</strong> <br />&nbsp;<strong>{address}</strong></p>
          </div>
          <div className="col-auto d-none d-sm-flex flex-grow-1 overflow-hidden">
            <form action="submit" className='s-form d-flex w-100'>
              <div className="dropdown d-none d-sm-flex">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><Link className="dropdown-item" to={'./pro'}>Gpu</Link></li>
                  <li><Link className="dropdown-item" to={'./pro'}>Cpu</Link></li>
                  <li><Link className="dropdown-item" to={'./pro'}>Motherboard</Link></li>
                </ul>
              </div>
              <input type="text" className="search form-control" placeholder='search Ace computers' />
              <button className='search-button img-fluid'><img src="src/assets/search.jpg" alt="search" /></button>
            </form>
          </div>
          <div className="col-auto d-none d-lg-flex align-items-center">
            <div className="d-btn dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {country} <img src="src/assets/indlogo.png" alt="fl" />
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link className="dropdown-item" to={'./pro'}><div className="form-check">
                  <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                  <label className="form-check-label" for="radioDefault">
                    Tamil
                  </label>
                </div></Link></li>
                <li><Link className="dropdown-item" to={'./pro'}><div className="form-check">
                  <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                  <label className="form-check-label" for="radioDefault1">
                    Hindi
                  </label>
                </div></Link></li>
                <li><Link className="dropdown-item" to={'./pro'}><div className="form-check">
                  <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked />
                  <label className="form-check-label" for="radioDefault2">
                    {country}
                  </label>
                </div></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-auto align-items-center d-none d-xl-flex">
            <div className="x-btn dropdown">
              <button className="btn btn-secondary dropdown-toggle p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hello, {username} <br /><strong>Account & Lists</strong>
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={'./pro'}>Action</Link></li>
                <li><Link className="dropdown-item" to={'./pro'}>Another action</Link></li>
                <li><Link className="dropdown-item" to={'./pro'}>Something else here</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-auto align-items-center d-none d-md-flex">
            <div className="x-btn dropdown">
              <button className="btn btn-secondary dropdown-toggle p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Returns<br /><strong>& Orders</strong>
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={'./pro'}>Action</Link></li>
                <li><Link className="dropdown-item" to={'./pro'}>Another action</Link></li>
                <li><Link className="dropdown-item" to={'./pro'}>Something else here</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-auto d-none d-sm-flex">
            <Link className="d-flex align-items-center text-decoration-none text-light" to={'./pro'}>
              <img src="src/assets/cart.png" alt="cart" className="cart" />
              <strong>Cart</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar