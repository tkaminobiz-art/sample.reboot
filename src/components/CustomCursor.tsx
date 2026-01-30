'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', updatePosition);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible]);

    // Hide on mobile/touch devices
    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) setIsVisible(false);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={styles.cursor}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/profile.png"
                    alt="cursor"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    priority
                />
            </div>
        </div>
    );
}
