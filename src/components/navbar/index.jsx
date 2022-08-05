import React from 'react';

import './navbar.css';

export default function Navbar() {
   return (
      <>
         <nav class="navbar navbar-expand-lg py-3 px-2 navbar-light bg-light">
            <div class="container-fluid">
               <a class="navbar-brand fw-bold colorTextNavbar" href="/">
                  eventbrite
               </a>
               <form class="d-flex widthFormInput">
                  <input class="form-control me-2" type="search" placeholder="Search Event" aria-label="Search" />
               </form>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                  <ul class="navbar-nav fontSizeNavbar">
                     <li class="nav-item me-4 cursorPointerNavbar dropdown ">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Organize
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                           <li>
                              <a class="dropdown-item" href="#">
                                 Action
                              </a>
                           </li>
                           <li>
                              <a class="dropdown-item" href="#">
                                 Another action
                              </a>
                           </li>
                           <li>
                              <a class="dropdown-item" href="#">
                                 Something else here
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li class="nav-item me-4 cursorPointerNavbar dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Help
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                           <li>
                              <a class="dropdown-item" href="#">
                                 Action
                              </a>
                           </li>
                           <li>
                              <a class="dropdown-item" href="#">
                                 Another action
                              </a>
                           </li>
                           <li>
                              <a class="dropdown-item" href="#">
                                 Something else here
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li class="nav-item me-4 cursorPointerNavbar">
                        <a class="nav-link active" aria-current="page" href="#">
                           Create
                        </a>
                     </li>
                     <li class="nav-item me-4 cursorPointerNavbar">
                        <a class="nav-link" href="#">
                           Log In
                        </a>
                     </li>
                     <li class="nav-item me-4 cursorPointerNavbar">
                        <a class="nav-link" href="#">
                           Sign Up
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
}
