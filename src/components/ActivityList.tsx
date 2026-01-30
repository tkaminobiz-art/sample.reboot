import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './ActivityList.module.css';
import FadeIn from './FadeIn';

const activities = [
    {
        id: 1,
        date: '10.24',
        year: '2025',
        category: 'parliament',
        categoryLabel: '議会報告',
        title: '9月定例会での一般質問の内容を公開しました - 地域の防災力強化について',
    },
    {
        id: 2,
        date: '10.15',
        year: '2025',
        category: 'local',
        categoryLabel: '地元活動',
        title: '山添村の秋祭りに参加しました。地域の伝統を守る皆様との対話。',
    },
    {
        id: 3,
        date: '10.08',
        year: '2025',
        category: 'other',
        categoryLabel: 'お知らせ',
        title: '佐藤誠 後援会事務所開所式のお知らせ',
    },
    {
        id: 4,
        date: '09.30',
        year: '2025',
        category: 'parliament',
        categoryLabel: '議会報告',
        title: '予算委員会での質疑詳細レポート Vol.4',
    },
];

export default function ActivityList() {
    return (
        <section id="activity" className={styles.section}>
            <div className={styles.container}>
                <FadeIn className={styles.header}>
                    <div className={styles.titleGroup}>
                        <span className={styles.label}>ACTIVITY</span>
                        <h2 className={styles.title}>活動報告</h2>
                    </div>
                    <Link href="/activity" className={styles.link}>
                        一覧を見る <ChevronRight size={18} />
                    </Link>
                </FadeIn>

                <div className={styles.list}>
                    {activities.map((item, index) => (
                        <FadeIn key={item.id} delay={index * 100}>
                            <Link href={`/activity/${item.id}`} className={styles.item}>
                                <div className={styles.dateBox}>
                                    <span className={styles.year}>{item.year}</span>
                                    <span className={styles.date}>{item.date}</span>
                                </div>
                                <div className={styles.content}>
                                    <span className={`
                      ${styles.category} 
                      ${item.category === 'parliament' ? styles.parliament : ''}
                      ${item.category === 'local' ? styles.local : ''}
                    `}>
                                        {item.categoryLabel}
                                    </span>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
