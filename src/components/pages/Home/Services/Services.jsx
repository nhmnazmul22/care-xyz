import SectionTitle from "@/components/common/Section/SectionTitle";
import ServiceCard from "@/components/service/ServiceCard";
import React from "react";
import {getServices} from "@/actions/server/service.action.js";
import {Button} from "@/components/ui/button.jsx";
import Link from "next/link";
import MotionContainer from "@/components/common/motion/MotionContainer.jsx";

const Services = async () => {
    const {data: services} = await getServices()


    return (
        <section id="services" className="section-padding bg-muted/30">
            <div className="container-custom">
                <SectionTitle
                    subtitle="Our Services"
                    title="Professional Care Services"
                    description="From infant care to elderly assistance, our trained caregivers provide compassionate support tailored to your needs."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {services.slice(0, 3)?.map((service, index) => (
                        <ServiceCard key={service._id} service={service} index={index}/>
                    ))}
                </div>
                <MotionContainer
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                    className="text-center"
                >
                    <Link href="/services">
                        <Button>
                            View More Services
                        </Button>
                    </Link>
                </MotionContainer>
            </div>
        </section>
    );
};

export default Services;
