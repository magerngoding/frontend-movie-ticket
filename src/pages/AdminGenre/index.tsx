import { DataTable } from "@/components/ui/data-table";
import { colums } from "./colums";
import { Button } from "@/components/ui/button";
import { Link, useLoaderData } from "react-router-dom";
import { Plus } from "lucide-react";
import TitleHeading from "@/components/TitleHeading";
import type { Genre } from "@/services/genre/genre.type";

export default function AdminGenre() {
    const genres = useLoaderData() as Genre[]

    console.log(genres);

    return (
        <>
            <TitleHeading title="List Genre" />
            <Button asChild className="mb-3 w-fit">
                <Link to='/admin/genres/create'>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Data
                </Link>
            </Button >
            <DataTable columns={colums} data={genres} />
        </>
    )
}