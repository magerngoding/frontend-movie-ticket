
import type { RouteObject } from "react-router-dom";
import AdminLoginPage from "../pages/admin/index.tsx";
import AdminOverview from "@/pages/adminOverview/index.tsx";
import AdminLayout from "@/components/AdminLayout.tsx";

const adminRoutes: RouteObject[] = [
    {
        path: '/admin/login',
        element: <AdminLoginPage />
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminOverview />

            },
            {
                path: '/admin/genres',
                element: 'Admin Genre'
            }
        ]
    }
]

export default adminRoutes;