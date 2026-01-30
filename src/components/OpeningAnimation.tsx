'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './OpeningAnimation.module.css';

export default function OpeningAnimation() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Check if animation has already played in this session
        // For development/preview purposes, we might want to comment out the check
        // or the user can use Incognito mode. We keep it for "User First" UX.
        const hasPlayed = sessionStorage.getItem('hasPlayedOpening');

        if (!hasPlayed) {
            setShow(true);

            document.body.style.overflow = 'hidden';

            sessionStorage.setItem('hasPlayedOpening', 'true');

            // Total duration: 1.5s (fade in) + 1.5s (hold) + 1s (slide up) = ~4s
            const timer = setTimeout(() => {
                document.body.style.overflow = '';
                setShow(false);
            }, 4000);

            return () => {
                clearTimeout(timer);
                document.body.style.overflow = '';
            };
        }
    }, []);

    if (!show) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.contentWrapper}>
                <div className={styles.textGroup}>
                    <span className={styles.subTitle}>実務派無所属</span>
                    <span className={styles.name}>佐藤 誠</span>
                </div>
                <div className={styles.imageGroup}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/profile.png"
                            alt="佐藤誠"
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'top center' }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
