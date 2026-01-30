import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './ProfileSummary.module.css';

export default function ProfileSummary() {
    return (
        <section id="profile" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/profile.png"
                        alt="佐藤誠 ポートレート"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.content}>
                    <span className={styles.label}>PROFILE</span>
                    <h2 className={styles.title}>
                        対話から生まれる信頼。<br />
                        地域を愛する実務家。
                    </h2>

                    <div className={styles.profileTable}>
                        <div className={styles.row}>
                            <div className={styles.th}>氏名</div>
                            <div className={styles.td}>佐藤 誠（さとう まこと）</div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.th}>生年月日</div>
                            <div className={styles.td}>1971年5月15日（54歳）</div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.th}>略歴</div>
                            <div className={styles.td}>
                                地元民間企業経営を経て、奈良市議会議員を2期務める。<br />
                                現在、奈良県議会議員（1期目）。
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.th}>家族・趣味</div>
                            <div className={styles.td}>妻、長男、長女の4人家族。愛犬との散歩。里山歩き。</div>
                        </div>
                    </div>

                    <p className={styles.message}>
                        私は「地域をつなぐ実務家」として、特定の政党や団体の利益ではなく、
                        県民一人ひとりの声に等しく耳を傾けることを信条としています。
                        50代という責任ある世代だからこそ、これまでの経験をすべて奈良の未来のために注ぎます。
                    </p>

                    <Link href="/profile" className={styles.btn}>
                        プロフィール詳細を見る <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
