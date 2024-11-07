import {Outlet, Navigate} from 'react-router-dom';
import AuthService from "../services/AuthService";
export const PrivateRoutes = () => {
    if (!AuthService.isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
}