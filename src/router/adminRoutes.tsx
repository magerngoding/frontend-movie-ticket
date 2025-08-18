
import { redirect, type RouteObject } from "react-router-dom";
import AdminLoginPage from "../pages/admin/index.tsx";
import AdminOverview from "@/pages/adminOverview/index.tsx";
import AdminLayout from "@/components/AdminLayout.tsx";
import { getSession } from "@/lib/utils.ts";

const adminRoutes: RouteObject[] = [
    {
        path: '/admin/login',
        element: <AdminLoginPage />
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        // jaga halaman
        loader: () => {
            const user = getSession()

            console.log(user);

            if (!user || user?.role !== 'admin') {
                throw redirect('/admin/login')
            }

            return user;
        },
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