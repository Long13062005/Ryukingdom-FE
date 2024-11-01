import React from 'react';
import { Header } from "../components/layout/Header";
import 'bootstrap/js/src/agency';
import { Footer } from "../components/layout/Footer";
import 'bootstrap/dist/js/bootstrap.min.js';
import { HeaderHome } from "../features/home/HeaderHome";
import '../assets/css/Availability---Manage-availability-bookings-appointments_v1.css';
import {Services} from "../features/home/Services";
import {Available} from "../features/home/Available";

export function Home() {
    return (
        <>
                    <Header />
                    <HeaderHome />
                    <Services />
            <Available/>
                    <Footer />
        </>
    );
}