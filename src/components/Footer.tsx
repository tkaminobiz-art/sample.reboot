import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.office}>
                        <h3 className={styles.officeTitle}>佐藤誠 奈良事務所</h3>
                        <div className={styles.officeInfo}>
                            <p>〒630-8585<br />奈良県奈良市登大路町30</p>
                            <p>TEL: 0742-00-0000 / FAX: 0742-00-0000</p>
                            <a href="#" className={styles.mapLink}>Google Mapで見る</a>
                        </div>
                    </div>
                    <div className={styles.office}>
                        <h3 className={styles.officeTitle}>山辺事務所（実家）</h3>
                        <div className={styles.officeInfo}>
                            <p>〒630-2344<br />奈良県山辺郡山添村...</p>
                            <p>TEL: 0743-00-0000</p>
                        </div>
                    </div>
                </div>

                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>ホーム</Link>
                    <Link href="#profile" className={styles.navLink}>プロフィール</Link>
                    <Link href="#policy" className={styles.navLink}>政策について</Link>
                    <Link href="#activity" className={styles.navLink}>活動報告</Link>
                    <Link href="#support" className={styles.navLink}>事務所案内</Link>
                </nav>

                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Makoto Sato. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
