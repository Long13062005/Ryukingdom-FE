import {SideBar} from "../components/layout/SideBar";
import {FooterDashboard} from "../components/layout/FooterDashboard";
import {useEffect} from "react";
import {Profile} from "../features/profile/Profile";

export function Dashboard() {
    useEffect(() => {
        document.title = "Profile";
    }, []);
    return (<>
        <div id="page-top" >
            <div id="wrapper" >
                <SideBar/>
                 <Profile/>
            </div>
            <FooterDashboard/>

        </div>
    </>);
}