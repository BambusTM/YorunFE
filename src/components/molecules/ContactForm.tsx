"use client"

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import {Button} from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import emailjs from 'emailjs-com';
import {z} from "zod";
import GradientBorder from "@/components/atoms/GradiantBorder";
import {useToast} from "@/hooks/use-toast";

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
    name: z.string().min(2, {message: "Name must be at least 2 characters."}),
    email: z.string().email({message: "Please use a valid email format."}).min(1),
    reference: z.string().max(50, {message: "Reference can't be longer than 50 characters."}).min(1),
    message: z.string().max(250, {message: "Message can't be longer than 250 characters."}).min(1),
});

export function ContactForm() {
    const {toast} = useToast()

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
        ).then((response) => {
                toast({
                    variant: "default",
                    description: `Form sent successfully!`,
                });
                console.log("Email sent successfully:", response.status, response.text);
                form.reset();
            })
            .catch((error) => {
                toast({
                    variant: "destructive",
                    description: `Form sent successfully!`,
                });
                console.error("Failed to send email:", error);
            });
    }

    return (
        <div className={"w-full"}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {inputFields.map((fieldData) => (
                        <FormField
                            key={fieldData.name}
                            control={form.control}
                            name={fieldData.name as keyof z.infer<typeof formSchema>}
                            render={({field}) => (
                                <FormItem className={"w-full"}>
                                    <FormLabel>
                                        <h5>{fieldData.label}</h5>
                                    </FormLabel>
                                    <FormControl className={"w-full"}>
                                        <GradientBorder borderRadius={10}>
                                            <div className="bg-border rounded-sm w-full">
                                                <Input placeholder={fieldData.placeholder} {...field}
                                                       className={"border-none"}/>
                                            </div>
                                        </GradientBorder>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    ))}
                    <FormField
                        control={form.control}
                        name="message"
                        render={({field}) => (
                            <FormItem className={"w-full"}>
                                <FormLabel>
                                    <h5>Message</h5>
                                </FormLabel>
                                <FormControl className={"w-full"}>
                                    <GradientBorder borderRadius={10}>
                                        <div className="bg-border rounded-sm">
                                            <Textarea
                                                placeholder="Tell me a little bit about yourself"
                                                className="resize-none border-none w-full h-32"
                                                {...field}
                                            />
                                        </div>
                                    </GradientBorder>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className={"w-full"}>
                        Send
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
                        </svg>
                    </Button>
                </form>
            </Form>
        </div>
    );
}
