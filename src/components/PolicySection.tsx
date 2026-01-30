import Image from 'next/image';
import styles from './PolicySection.module.css';

export default function PolicySection() {
    return (
        <section id="policy" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.enTitle}>POLICY</span>
                    <h2 className={styles.jpTitle}>3つの重点政策</h2>
                    <p className={styles.intro}>
                        現場の声を基に練り上げた、<br className={styles.mobileOnly} />
                        具体的かつ実行可能な3つの約束。
                    </p>
                </div>

                <div className={styles.contentList}>
                    {/* Policy 01 */}
                    <article className={styles.article}>
                        <div className={styles.articleHeader}>
                            <span className={styles.number}>01</span>
                            <h3 className={styles.articleTitle}>
                                <span className={styles.titleMain}>稼ぐ奈良をつくる</span>
                                <span className={styles.titleSub}>～農業と観光のハイブリッド戦略～</span>
                            </h3>
                        </div>
                        <div className={styles.articleBody}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.imagePlaceholder}>
                                    {/* Ideally replace with real image later */}
                                    <span className={styles.placeholderText}>Agriculture & Tourism</span>
                                </div>
                            </div>
                            <div className={styles.textWrapper}>
                                <p>
                                    奈良の持つ最大のポテンシャルは「歴史」と「食」です。しかし、これらはまだ点と点でしかありません。私は、特産品である「大和茶」や「古都華（いちご）」のブランド化を徹底的に推進し、国内外への販路を拡大します。
                                </p>
                                <p>
                                    さらに、生産現場そのものを観光資源とする「アグリツーリズム」を制度面から支援。農家が生産だけでなく、体験や宿泊を通じて収益を上げられる仕組みを作ります。若者の就農支援策として、初期投資の公的補助枠の拡大と、スタートアップ企業とのマッチングも積極的に行います。
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Policy 02 */}
                    <article className={styles.article}>
                        <div className={styles.articleHeader}>
                            <span className={styles.number}>02</span>
                            <h3 className={styles.articleTitle}>
                                <span className={styles.titleMain}>安心のインフラ整備</span>
                                <span className={styles.titleSub}>～災害に強く、移動しやすい街へ～</span>
                            </h3>
                        </div>
                        <div className={styles.articleBody}>
                            <div className={styles.imageWrapper}>
                                <div className={`${styles.imagePlaceholder} ${styles.blueBg}`}>
                                    <span className={styles.placeholderText}>Infrastructure</span>
                                </div>
                            </div>
                            <div className={styles.textWrapper}>
                                <p>
                                    近年の異常気象に対し、これまでの治水対策だけでは不十分です。県管理河川の浚渫（しゅんせつ）と護岸強化を前倒しで進め、浸水被害ゼロを目指します。また、観光シーズンの慢性的な渋滞は市民生活への大きな負担となっています。
                                </p>
                                <p>
                                    パークアンドライドの拡充と、AI信号機の導入による交通流の最適化を推進。さらに、高齢者の移動手段を確保するため、コミュニティバスの再編とデマンド型交通の実証実験を全県的なモデル事業として展開します。「命を守る道」としての道路整備網の完成を急ぎます。
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Policy 03 */}
                    <article className={styles.article}>
                        <div className={styles.articleHeader}>
                            <span className={styles.number}>03</span>
                            <h3 className={styles.articleTitle}>
                                <span className={styles.titleMain}>次世代への投資</span>
                                <span className={styles.titleSub}>～誰もが学び、育てることのできる環境～</span>
                            </h3>
                        </div>
                        <div className={styles.articleBody}>
                            <div className={styles.imageWrapper}>
                                <div className={`${styles.imagePlaceholder} ${styles.greenBg}`}>
                                    <span className={styles.placeholderText}>Education</span>
                                </div>
                            </div>
                            <div className={styles.textWrapper}>
                                <p>
                                    子供たちへの投資は、最も確実な未来への投資です。私は、県内の公立小中学校における給食費の完全無償化を段階的に実現します。また、家庭の経済状況に左右されず、誰もが質の高い教育を受けられるよう、放課後学習支援事業（寺子屋事業）への助成を拡充します。
                                </p>
                                <p>
                                    ひとり親家庭への支援も急務です。就労支援と連動した家賃補助制度の創設を提案し、安心して子育てができるセーフティネットを構築します。教員の働き方改革も同時に進め、先生が子供たちと向き合える時間を確保し、教育の質そのものを底上げします。
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
