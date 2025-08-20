import TitleHeading from "@/components/TitleHeading";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createGenre, genreSchema, type GenreValues } from "@/services/genre/genre.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function AdminGenreForm() {

    const form = useForm<GenreValues>({
        resolver: zodResolver(genreSchema),
        defaultValues: {
            name: ''
        }
    })

    const { isPending, mutateAsync } = useMutation({
        mutationFn: (data: GenreValues) => createGenre(data)
    })

    const navigate = useNavigate()

    const onSubmit = async (val: GenreValues) => {
        try {
            await mutateAsync(val)

            navigate('/admin/genres')
            toast.success('Genre daa successfully created')

        } catch (error) {
            console.log(error);
            toast.error('Something went wrong!')
        }
    }
    return (
        <>
            <TitleHeading title="Create Data Genre" />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-1/2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter name..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button isLoading={isPending}>
                        <Save className="w-4 h-4 mr-2" />
                        Submit
                    </Button>
                </form>
            </Form>
        </ >
    )
}