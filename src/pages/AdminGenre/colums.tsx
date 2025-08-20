import { Badge } from '@/components/ui/badge'
import type { Genre } from '@/services/genre/genre.type'
import type { ColumnDef } from '@tanstack/react-table'


export const colums: ColumnDef<Genre>[] = [
    {
        accessorKey: 'name',
        header: 'Genre',
        cell: ({ row }) => <Badge>{row.original.name}</Badge>,
    },
    {
        id: 'actors',
        cell: ({ row }) => {
            const genre = row.original

            return <div>actioon button</div>
        }
    }
]