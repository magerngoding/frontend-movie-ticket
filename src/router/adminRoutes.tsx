
import { redirect, type RouteObject } from "react-router-dom";
import AdminLoginPage from "../pages/AdminnLoginPage/index.tsx";
import AdminOverview from "@/pages/AdminOverview/index.tsx";
import AdminLayout from "@/components/AdminLayout.tsx";
import { getSession } from "@/lib/utils.ts";
import AdminGenre from "@/pages/AdminGenre/index.tsx";
import { getGenres } from "@/services/genre/genre.service.ts";
import AdminGenreForm from "@/pages/AdminGenre/form.tsx";

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
                loader: async () => {
                    const genres = await getGenres()

                    return genres.data
                },
                element: <AdminGenre />
            },
            {
                path: '/admin/genres/create',
                element: <AdminGenreForm />
            }
        ]
    }
]

export default adminRoutes;