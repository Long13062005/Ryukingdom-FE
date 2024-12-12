import {SideBar} from "../../components/layout/SideBar";
import {FooterDashboard} from "../../components/layout/FooterDashboard";
import {useEffect} from "react";
import {FacilityList} from "./FacilityList";
import {HeaderDashboard} from "../../components/layout/HeaderDashboard";
import {FacilityAdd} from "./FacilityAdd";
import {Link} from "react-router-dom";
import {FacilityUpdate} from "./FacilityUpdate";
import AuthService from "../../services/AuthService";
import {ErrorPage} from "../../components/layout/ErrorPage";
import {PaymentAdd} from "../payment/PaymentAdd";

export function FacilityUpdateDashboard() {
    useEffect(() => {
        document.title = "FacilityAdd";
    }, []);
    return (<>
        <div id="page-top">
            <div id="wrapper">
                <SideBar/>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" style={{background: "#171821"}}>
                        <HeaderDashboard/>
                        {
                            AuthService.isCustomer()? <ErrorPage/> : (<>
                                <div className="container-fluid"><Link to={"/user/facility/create"} className="btn btn-outline-light" type="button">Add Facility</Link><Link to={"/user/facility"} className="btn btn-outline-light" type="button">Facility List</Link>
                                    <FacilityUpdate/>
                                </div>
                            </>)
                        }

                    </div>
                </div>
            </div>
            <FooterDashboard/>
        </div>
    </>);
}