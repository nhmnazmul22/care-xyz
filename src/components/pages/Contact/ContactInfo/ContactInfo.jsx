import React from 'react';
import {contactInfo} from "@/constant";
import MotionContainer from "@/components/common/motion/MotionContainer.jsx";

const ContactInfo = () => {
    return (
        <section className="py-12">
            <div className="container-custom">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((info, index) => (
                        <MotionContainer
                            key={info.title}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow text-center"
                        >
                            <div
                                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <info.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="font-semibold text-foreground mb-1">
                                {info.title}
                            </h3>
                            <p className="text-foreground font-medium">{info.detail}</p>
                            <p className="text-sm text-muted-foreground">
                                {info.subDetail}
                            </p>
                        </MotionContainer>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;