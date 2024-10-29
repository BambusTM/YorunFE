"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com';

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
    }
];

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please use a valid email format." }),
    reference: z.string().max(50, { message: "Reference can't be longer than 50 characters." }),
    message: z.string().max(250, { message: "Message can't be longer than 250 characters." }),
});

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            reference: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
            {
                name: values.name,
                reference: values.reference,
                email: values.email,
                message: values.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
        )
            .then((response) => {
                console.log("Email sent successfully:", response.status, response.text);
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
            });
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
                                    <h5>{fieldData.label}</h5>
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder={fieldData.placeholder} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                <h5>Message</h5>
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell me a little bit about yourself"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-center">
                    <Button type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
    );
}
