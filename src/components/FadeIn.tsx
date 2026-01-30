'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from './FadeIn.module.css';

interface FadeInProps {
    children: ReactNode;
    delay?: number; // Delay in ms
    className?: string; // Allow merging extra classes
}

export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we can stop observing to save resources
                    if (domRef.current) observer.unobserve(domRef.current);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of element is visible
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before bottom
        });

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`${styles.fadeIn} ${isVisible ? styles.visible : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
