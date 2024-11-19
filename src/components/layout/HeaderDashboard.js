import {useEffect, useState} from "react";
import ProfileService from "../../services/ProfileService";

export function HeaderDashboard() {

    const [usernameHeader, setUsernameHeader] = useState();
    useEffect(() => {
        fetchProfileInfo().then();
    }, []);

    const fetchProfileInfo = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await ProfileService.getYourProfile(token);
            setUsernameHeader(response.userReq.username);
        } catch (error) {
            console.error('Error fetching profile information:', error);
        }
    };
    return(
        <>
            <nav className="navbar navbar-expand shadow mb-4 topbar" style={{background: "rgba(23,24,33,0.91)",color: "rgb(255,255,255)"}}>
                <div className="container-fluid">
                    <ul className="navbar-nav flex-nowrap ms-auto">
                        <li className="nav-item dropdown no-arrow" style={{height: "70.6px",width: "211.4px",display: "flex"}}><img alt={"avatar"} className="rounded-circle" src="https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/avatar.webp?alt=media&token=d95b5759-3456-4c46-9d78-4766f9512868" width="59" height="52"/><span className="d-none d-lg-inline me-2 text-gray-600 small" style={{margin: "19px"}}>Hello , {usernameHeader}</span></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}