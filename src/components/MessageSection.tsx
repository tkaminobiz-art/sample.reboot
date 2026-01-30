import styles from './MessageSection.module.css';

export default function MessageSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headingParams}>
                    <h2 className={styles.verticalTitle}>
                        <span>対話でひらく、</span>
                        <span className={styles.accent}>奈良の未来。</span>
                    </h2>
                </div>
                <div className={styles.bodyContent}>
                    <h3 className={styles.subTitle}>
                        「声なき声」を拾い上げ、<br className={styles.mobileBr} />
                        実務で形にする政治を。
                    </h3>
                    <p className={styles.text}>
                        政治の役割は、一部の大きな声に耳を傾けることではありません。<br />
                        日々の生活の中で、不安や希望を抱えている一人ひとりの「小さな声」にこそ、<br />
                        未来を変えるヒントが隠されていると私は信じています。
                    </p>
                    <p className={styles.text}>
                        官僚として培った行政の実務経験と、<br />
                        地元・奈良で土に触れ、農業に汗した現場の感覚。<br />
                        この二つを車の両輪として、理想論ではない「解決策」を提示すること。<br />
                        それが、私、佐藤 誠の使命です。
                    </p>
                    <p className={styles.text}>
                        分断ではなく対話を。<br />
                        停滞ではなく、着実な前進を。<br />
                        あなたと共に、新しい奈良の物語を紡いでいきたいのです。
                    </p>
                    <div className={styles.signature}>
                        <span className={styles.position}>奈良県議会議員</span>
                        <span className={styles.name}>佐藤 誠</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
