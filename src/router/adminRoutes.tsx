
import type { RouteObject } from "react-router-dom";
import AdminLoginPage from "../pages/admin";

const adminRoutes: RouteObject[] = [
    {
        path: '/admin/login',
        element: <AdminLoginPage />
    },
    {
        path: '/admin',
        element: 'Admin Page'
    }
]

export default adminRoutes;