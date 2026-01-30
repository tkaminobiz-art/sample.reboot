import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bgImage}>
                <Image
                    src="/images/hero-bg.png"
                    alt="奈良の茶畑に立つ佐藤誠"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'left center' }}
                    priority
                />
            </div>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <div className={styles.sloganContainer}>
                    <h1 className={styles.sloganMain}>
                        奈良の未来を、<br />対話でひらく。
                    </h1>
                    <p className={styles.sloganSub}>
                        都市と農村をつなぐ<br />実務派無所属
                    </p>
                </div>

                <div className={styles.candidateInfo}>
                    <span className={styles.title}>奈良県議会議員（奈良市・山辺郡）</span>
                    <div className={styles.name}>
                        佐藤 誠<span className={styles.nameEn}>Makoto Sato</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
