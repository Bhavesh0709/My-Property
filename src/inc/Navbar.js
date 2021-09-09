import React from 'react';

import{Link} from 'react-router-dom';

function Navbar(){
    return(
      <div className="container-fluid ">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container py-3">
  <a class="navbar-brand" href="#">Logo</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
      <Link to="/" class="nav-link mx-2">Home</Link>
      </li>
      <li class="nav-item">
      <Link to="/About" class="nav-link mx-2">About</Link>
      </li>
      <li class="nav-item">
      <Link to="/Contact" class="nav-link mx-2">Contact</Link>
      </li>
      <li class="nav-item">
      <Link to="/WebForm" class="nav-link mx-2">Dashboard</Link>
      </li>
      <li class="nav-item">
      <Link to="/Login" class="btn btn-sm btn-outline-danger mt-1 px-4  mx-2">Login</Link>
      </li>
    </ul>
  </div>
</div>  
</nav>
    </div>
    );
}

export default Navbar;