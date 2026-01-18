import React from 'react';
import MotionContainer from "@/components/common/motion/MotionContainer.jsx";

const Map = () => {
    return (
        <MotionContainer
            initial={{opacity: 0, x: 20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="space-y-8"
        >
            {/* Map Placeholder */}
            <div className="aspect-video rounded-xl overflow-hidden bg-muted border border-border">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1639584298928!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                />
            </div>
        </MotionContainer>
    );
};

export default Map;