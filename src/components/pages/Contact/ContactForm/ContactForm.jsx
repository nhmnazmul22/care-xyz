"use client";
import React, {useState} from 'react';
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
import {Button} from "@/components/ui/button.jsx";
import {FiSend} from "react-icons/fi";
import {useForm} from "react-hook-form";
import MotionContainer from "@/components/common/motion/MotionContainer.jsx";
import {toast} from "sonner";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: {errors},
    } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted:", data);
        toast.success("Message sent successfully! We'll get back to you soon.");
        reset();
        setIsSubmitting(false);
    };

    return (
        <MotionContainer
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
        >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Send Us a Message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            {...register("name")}
                            className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                            <p className="text-sm text-destructive">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            {...register("email")}
                            className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                            <p className="text-sm text-destructive">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            {...register("phone")}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Select
                            onValueChange={(value) => setValue("subject", value)}
                        >
                            <SelectTrigger
                                className={errors.subject ? "border-destructive" : ""}
                            >
                                <SelectValue placeholder="Select a subject"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="general">General Inquiry</SelectItem>
                                <SelectItem value="booking">Booking Help</SelectItem>
                                <SelectItem value="caregiver">
                                    Become a Caregiver
                                </SelectItem>
                                <SelectItem value="feedback">Feedback</SelectItem>
                                <SelectItem value="partnership">Partnership</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.subject && (
                            <p className="text-sm text-destructive">
                                {errors.subject.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        {...register("message")}
                        className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                        <p className="text-sm text-destructive">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <Button
                    type="submit"
                    className="w-full btn-primary"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        "Sending..."
                    ) : (
                        <>
                            <FiSend className="w-4 h-4 mr-2"/>
                            Send Message
                        </>
                    )}
                </Button>
            </form>
        </MotionContainer>
    );
};

export default ContactForm;