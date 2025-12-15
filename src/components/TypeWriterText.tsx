import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypeWriterTextProps {
    text: string;
    className?: string;
    speed?: number; // en ms par caractère
}

export function TypeWriterText({ text, className = "", speed = 30 }: TypeWriterTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed]);

    return (
        <motion.p className={className}>
            {displayedText}
            {/* Clignotement du curseur */}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-0.5 bg-primary ml-1"
            >
                &nbsp;
            </motion.span>
        </motion.p>
    );
}