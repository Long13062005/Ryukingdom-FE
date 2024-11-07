import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap1.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/js/src/agency';
import 'bootstrap/js/src/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.css';
import './assets/css/Availability---Manage-availability-bookings-appointments_v1.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/Black-Navbar.css';
import {Home} from "./pages/Home";
import {Login} from "./features/auth/Login";
import {Register} from "./features/auth/Register";
import {PublicRoutes} from "./routes/PublicRoutes";
import {PrivateRoutes} from "./routes/PrivateRoutes";
import {ToastContainer} from "react-toastify";
import {Dashboard} from "./pages/Dashboard";


function App() {
    return (<>
            <BrowserRouter>
                <Routes>
{/*Public routes*/}
                <Route element={<PublicRoutes/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>

                </Route>
        {/*For admin and staff*/}
                    <Route element={<PrivateRoutes/>}>
        {/* Profile*/}
                    <Route path="/user/profile" element={<Dashboard/>}/>
                    </Route>


                </Routes>
                <ToastContainer />
            </BrowserRouter>

        </>);
}

export default App;
