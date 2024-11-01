import React from 'react';
import { NavLink } from "react-router-dom";
import "bootstrap/js/src/theme";


export function SideBar() {
    return (
        <>
            <nav className="navbar align-items-start sidebar sidebar-dark accordion p-0 navbar-dark" style={{ background: '#1f212c' }}>
                <div className="container-fluid d-flex flex-column p-0">
                    <div className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"  style={{ color: 'var(--bs-yellow)' }}>
                        <div className="sidebar-brand-icon rotate-n-15">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-shop" style={{ fontSize: '46px' }}>
                                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"></path>
                            </svg>
                        </div>
                        <div className="sidebar-brand-text mx-3"><span>Admin</span></div>
                    </div>
                    <hr className="sidebar-divider my-0" />
                    <ul className="navbar-nav text-light" id="accordionSidebar">
                        <li className="nav-item"></li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">
                                <i className="fas fa-user" style={{ color: 'var(--bs-yellow)' }}></i>
                                <span style={{ color: 'var(--bs-yellow)' }}>Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/reservation" className="nav-link">
                                <i className="far fa-grin-stars" style={{ color: 'var(--bs-yellow)' }}></i>
                                <span style={{ color: 'var(--bs-yellow)' }}>Reservation</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/payment" className="nav-link">
                                <i className="far fa-money-bill-alt" style={{ color: 'var(--bs-yellow)' }}></i>
                                <span style={{ color: 'var(--bs-yellow)' }}>Payment</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/user" className="nav-link">
                                <i className="fas fa-user" style={{ color: 'var(--bs-yellow)' }}></i>
                                <span style={{ color: 'var(--bs-yellow)' }}>User</span>
                            </NavLink>
                            <NavLink to="/customer" className="nav-link">
                                <i className="fas fa-user" style={{ color: 'var(--bs-yellow)' }}></i>
                                <span style={{ color: 'var(--bs-yellow)' }}>Customer</span>
                            </NavLink>
                            <NavLink to="/report" className="nav-link" >
                                <i className="far fa-window-maximize" style={{ color: 'var(--bs-yellow)' }}></i>
                                <span style={{ color: 'var(--bs-yellow)' }}>Report</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/logout" className="nav-link"  style={{ color: 'var(--bs-yellow)' }}>
                                <i className="far fa-user-circle" style={{ color: 'var(--bs-yellow)' }}></i>
                                <span>Log out</span>
                            </NavLink>
                        </li>
                        <li className="nav-item"></li>
                    </ul>
                    <div className="text-center d-none d-md-inline">
                        <button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button>
                    </div>
                </div>
            </nav>
        </>
    );
}