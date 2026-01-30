import { CheckCircle2 } from 'lucide-react';
import styles from './PolicySection.module.css';

const policies = [
    {
        id: '01',
        title: '稼ぐ奈良',
        description: '山添村の農産物と奈良市の観光・飲食を繋ぐブランド化を推進。',
        details: [
            '地域ブランド産品の開発支援',
            '観光客の周遊ルート整備',
            '農業所得の向上と雇用創出',
        ],
    },
    {
        id: '02',
        title: '安心のインフラ',
        description: '大和西大寺駅周辺の渋滞解消と、山間部の防災ネットワークを強化。',
        details: [
            '主要交差点の立体交差化推進',
            '山間部の土砂災害対策強化',
            '災害に強い地域コミュニティ作り',
        ],
    },
    {
        id: '03',
        title: '次世代への投資',
        description: '教育無償化の枠組みを超え、地域全体で子供を育てる支援を拡充。',
        details: [
            '地域で支える子育て拠点の整備',
            '体験型学習プログラムの充実',
            '子育て世代の移住定住促進',
        ],
    },
];

export default function PolicySection() {
    return (
        <section id="policy" className={styles.section}>
            <div className={styles.header}>
                <span className={styles.label}>POLICY</span>
                <h2 className={styles.title}>地域をつなぐ実務家として<br />3つの未来を創ります</h2>
                <p className={styles.description}>
                    特定のしがらみがない無所属だからこそ、<br />
                    本当に必要な政策を、スピード感を持って実行できます。
                </p>
            </div>

            <div className={styles.grid}>
                {policies.map((policy) => (
                    <div key={policy.id} className={styles.card}>
                        <div className={styles.number}>{policy.id}</div>
                        <h3 className={styles.cardTitle}>{policy.title}</h3>
                        <p className={styles.cardText}>{policy.description}</p>
                        <div className={styles.cardDetail}>
                            {policy.details.map((detail, index) => (
                                <div key={index} className={styles.detailItem}>
                                    <CheckCircle2 size={16} className={styles.checkIcon} />
                                    <span>{detail}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
