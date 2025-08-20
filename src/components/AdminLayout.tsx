import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import { Toaster } from "./ui/sonner";

export default function AdminLayout() {
    return (
        <>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <Sidebar />
                <div className="flex flex-col">
                    <Header />
                    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                        <Outlet />
                    </main>
                    <Toaster />
                </div>
            </div>
        </>
    )
}