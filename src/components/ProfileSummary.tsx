import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './ProfileSummary.module.css';
import FadeIn from './FadeIn';

export default function ProfileSummary() {
    return (
        <section id="profile" className={styles.section}>
            <div className={styles.container}>
                <FadeIn className={styles.header}>
                    <span className={styles.label}>PROFILE</span>
                    <h2 className={styles.title}>
                        対話から生まれる信頼。<br />
                        地域を愛する実務家。
                    </h2>
                </FadeIn>

                <div className={styles.contentGrid}>
                    <FadeIn delay={200} className={styles.imageColumn}>
                        <div className={styles.imageContainer}>
                            <Image
                                src="/images/profile.png"
                                alt="佐藤誠 ポートレート"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.personalInfo}>
                            <dl className={styles.infoList}>
                                <div className={styles.infoItem}>
                                    <dt>生年月日</dt>
                                    <dd>1971年5月15日（54歳）</dd>
                                </div>
                                <div className={styles.infoItem}>
                                    <dt>血液型</dt>
                                    <dd>O型</dd>
                                </div>
                                <div className={styles.infoItem}>
                                    <dt>趣味</dt>
                                    <dd>低山トレッキング、歴史小説を読むこと</dd>
                                </div>
                                <div className={styles.infoItem}>
                                    <dt>座右の銘</dt>
                                    <dd>「誠心誠意」</dd>
                                </div>
                                <div className={styles.infoItem}>
                                    <dt>家族</dt>
                                    <dd>妻、長男、長女、愛犬（柴犬・マロン）</dd>
                                </div>
                            </dl>
                        </div>
                    </FadeIn>

                    <FadeIn delay={400} className={styles.historyColumn}>
                        <h3 className={styles.columnTitle}>略歴</h3>
                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <span className={styles.year}>1971年</span>
                                <p className={styles.event}>
                                    奈良市月ヶ瀬にて、茶農家の長男として生まれる。<br />
                                    幼少期は茶畑が一番の遊び場だった。
                                </p>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.year}>1990年</span>
                                <p className={styles.event}>
                                    県立奈良高等学校 卒業。<br />
                                    野球部に所属し、チームワークの大切さを学ぶ。
                                </p>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.year}>1994年</span>
                                <p className={styles.event}>
                                    京都大学 法学部 卒業。<br />
                                    地方自治と農業政策を専攻。
                                </p>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.year}>1994年</span>
                                <p className={styles.event}>
                                    <strong>農林水産省 入省。</strong><br />
                                    農業土木課などに配属。全国の農村振興プロジェクトに従事し、現場と政策の乖離について問題意識を持つようになる。
                                </p>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.year}>2011年</span>
                                <p className={styles.event}>
                                    <strong>帰郷、就農。</strong><br />
                                    父の体調不良を機に退官し、実家の茶園「佐藤農園」を継ぐ。同時に、地域活性化NPO「奈良の明日」を設立し代表に就任。
                                </p>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.year}>2019年</span>
                                <p className={styles.event}>
                                    <strong>奈良県議会議員選挙 初当選。</strong><br />
                                    「現場を知る実務家」として、10,542票をいただきトップ当選。
                                </p>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.year}>2023年</span>
                                <p className={styles.event}>
                                    <strong>奈良県議会議員選挙 2期目当選。</strong><br />
                                    現在、農林水産常任委員会 委員長、地域防災対策特別委員会 副委員長などを歴任。
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
}
