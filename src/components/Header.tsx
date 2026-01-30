import Link from 'next/link';
import { Twitter, Facebook, Instagram, Youtube, Menu } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                {/* Logo Section */}
                <Link href="/" className={styles.logo}>
                    <span className={styles.title}>奈良県議会議員（奈良市・山辺郡）</span>
                    <span className={styles.name}>佐藤 誠</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="#profile" className={styles.navLink}>プロフィール</Link></li>
                        <li><Link href="#policy" className={styles.navLink}>政策について</Link></li>
                        <li><Link href="#activity" className={styles.navLink}>活動報告</Link></li>
                        <li><Link href="#support" className={styles.navLink}>応援する</Link></li>
                        <li><Link href="#news" className={styles.navLink}>お知らせ</Link></li>
                    </ul>
                </nav>

                {/* Actions (SNS + CTA) */}
                <div className={styles.actions}>
                    <div className={styles.sns}>
                        <a href="#" aria-label="X (Twitter)" className={styles.snsIcon}><Twitter size={20} /></a>
                        <a href="#" aria-label="Facebook" className={styles.snsIcon}><Facebook size={20} /></a>
                        <a href="#" aria-label="Instagram" className={styles.snsIcon}><Instagram size={20} /></a>
                        <a href="#" aria-label="YouTube" className={styles.snsIcon}><Youtube size={20} /></a>
                    </div>
                    <Link href="#support" className={styles.cta}>
                        応援する
                    </Link>
                </div>

                {/* Mobile Menu Button (Placeholder for functionality) */}
                <button className={styles.menuButton} aria-label="Menu">
                    <Menu size={32} />
                </button>
            </div>
        </header>
    );
}
