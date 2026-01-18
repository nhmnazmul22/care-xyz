import React from 'react';
import {faqs} from "@/constant/index.js";
import MotionContainer from "@/components/common/motion/MotionContainer.jsx";

const FaqSec = () => {
    return (
        <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
                Frequently Asked Questions
            </h3>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <MotionContainer
                        key={index}
                        initial={{opacity: 0, y: 10}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: index * 0.1}}
                        className="bg-muted/50 p-4 rounded-lg"
                    >
                        <h4 className="font-medium text-foreground mb-2">
                            {faq.question}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            {faq.answer}
                        </p>
                    </MotionContainer>
                ))}
            </div>
        </div>
    );
};

export default FaqSec;