import React, {useEffect} from "react";
import {BookingForm} from "./BookingForm";
import {Header} from "../../components/layout/Header";
import {Footer} from "../../components/layout/Footer";

export function BookingDashboard() {
    useEffect(() => {
        document.title = "Booking";
    }, []);
    return (<>
        <>
            <div id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="54">
                <Header />
                <div className="container" style={{margin:"10% 0 5% 0"}}>
                    <BookingForm />
                </div>
                <Footer />
            </div>
        </>
    </>);
}