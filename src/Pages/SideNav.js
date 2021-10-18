import React from "react";
import{Link} from 'react-router-dom';

function SideNav() {
       
  return (
    <div>
      <div class="sidebar close">
        <div class="logo-details">
          
          
        </div>
        <ul class="nav-links">
          <li>
            <a href="#">
              <i class="bx bx-tachometer"></i>
              <span class="link_name">Dashboard</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Dashboard
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-support"></i>
              <span class="link_name">Support</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Support
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-message"></i>
              <span class="link_name">Messages</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Messages
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i class="bx bxs-bolt"></i>
              <span class="link_name">Appraisals</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Appraisals
                </a>
              </li>
            </ul>
          </li>

          <li>
            <div class="iocn-link">
              <a href="#">
                <i class="bx bx-home"></i>
                <span class="link_name">Listings</span>
              </a>
              <i class="bx bxs-chevron-down arrow"></i>
            </div>

            <ul class="sub-menu">
              <li>
                <a href="#">Add new Listing</a>
              </li>
              {/* <li>
                <a href="">Active Listings</a>
              </li> */}
              <Link to="/Property" class="">Active Listings</Link>
              <li>
                <a href="#">Pending Listings</a>
              </li>
              <li>
                <a href="#">Sold Listings</a>
              </li>
              <li>
                <a href="#">Archived Listings</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-list-check"></i>
              <span class="link_name">Listing Enquiries</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Listing Enquiries
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-search"></i>
              <span class="link_name">Upcoming Inspections</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Upcoming Inspections
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-book-content"></i>
              <span class="link_name">Contracts</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Contracts
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-calendar-check"></i>
              <span class="link_name">Tasks & Appointments</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Tasks & Appointments
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-book-content"></i>
              <span class="link_name">Contacts</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Contacts
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-cog"></i>
              <span class="link_name">Preferences</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Preferences
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <section class="home-section">
        <div class="home-content">
          <i class="bx bx-menu"></i>
          
        </div>
      </section>
 
    </div>
  );
}

export default SideNav;
