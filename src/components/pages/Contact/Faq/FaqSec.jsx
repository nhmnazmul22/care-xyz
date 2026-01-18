import React from 'react';
import {faqs} from "@/constant/index.js";
import MotionContainer from "@/components/common/motion/MotionContainer.jsx";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.jsx";

const FaqSec = () => {
    return (
        <div className="container-custom py-12">
            <h3 className="text-xl font-bold text-foreground mb-4">
                Frequently Asked Questions
            </h3>
            <div className="">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-4"
                    defaultValue="item-1"
                >
                    {faqs.map((faq, index) => (
                        <MotionContainer
                            key={index}
                            initial={{opacity: 0, y: 10}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.1}}
                            className="bg-muted/50 p-4 rounded-lg"
                        >
                            <AccordionItem value={`item-${index + 1}`}>
                                <AccordionTrigger> {faq.question}</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </MotionContainer>
                    ))}

                </Accordion>

            </div>
        </div>
    );
};

export default FaqSec;