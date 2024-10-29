"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const inputFields = [
    {
        name: "name",
        label: "Full Name",
        placeholder: "Max Mustermann",
    },
    {
        name: "email",
        label: "Email",
        placeholder: "example@example.com",
    },
    {
        name: "reference",
        label: "Reference",
        placeholder: "Regarding...",
    },
    {
        name: "message",
        label: "Message",
        placeholder: "Your message goes here.",
    },
]

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please use a valid email format." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {inputFields.map((fieldData) => (
                    <FormField
                        key={fieldData.name}
                        control={form.control}
                        name={fieldData.name as keyof z.infer<typeof formSchema>}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    {fieldData.label}
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder={fieldData.placeholder} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
