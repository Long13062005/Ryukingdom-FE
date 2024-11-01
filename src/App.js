import './App.css';
import {SideBar} from "./components/layout/SideBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/scss/bootstrap.min.css";
import "./assets/fonts/fontawesome-all.min.css";
import "./assets/fonts/font-awesome.min.css";
import "./assets/fonts/fontawesome5-overrides.min.css";
import {Home} from "./pages/Home";


function App() {
    return (<>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Home/>}/>
        {/*For admin and staff*/}


                </Routes>
            </BrowserRouter>

        </>);
}

export default App;
