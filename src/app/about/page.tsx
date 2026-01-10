import Image from 'next/image';
import styles from './about.module.css';

export default function AboutPage() {
    return (
        <div className={styles.container}>
            {/* Vision Section */}
            <section className={styles.visionSection}>
                <h1 className="fade-in-up">The Global Partner for Innovation</h1>
                <p className={`${styles.lead} fade-in-up`} style={{ animationDelay: '0.1s' }}>
                    썬텍은 자동차 부품 산업의 고정관념을 깨는 정밀 기술력으로<br />
                    전 세계 20여 개국 연구소와 함께 미래를 설계합니다.
                </p>
            </section>

            {/* Global Network Section */}
            <section className={`${styles.networkSection} fade-in-up`} style={{ animationDelay: '0.2s' }}>
                <div className={styles.sectionHeader}>
                    <span>Global Reach</span>
                    <h2>글로벌 네트워크</h2>
                </div>
                <div className={`${styles.mapWrapper} glass-effect`}>
                    <div className={styles.mapPlaceholder}>
                        {/* Simple visual representation of global points */}
                        <div className={styles.mapPoint} style={{ top: '35%', left: '20%' }} data-label="North America"></div>
                        <div className={styles.mapPoint} style={{ top: '40%', left: '48%' }} data-label="Europe"></div>
                        <div className={styles.mapPoint} style={{ top: '38%', left: '80%' }} data-label="Asia (HQ)"></div>
                        <p>20+ Countries | 50+ Partners | 150+ Patents</p>
                    </div>
                </div>
            </section>

            {/* Trust & Quality Section */}
            <section className={styles.trustSection}>
                <div className={styles.grid}>
                    <div className={`${styles.trustCard} glass-effect fade-in-up`} style={{ animationDelay: '0.3s' }}>
                        <h3>품질 경영 (Quality)</h3>
                        <p>IATF 16949 인증 기반의 무결점 품질 관리 시스템을 운영하며, 자동차 산업의 엄격한 규격(AEC-Q)을 준수합니다.</p>
                        <div className={styles.certBadges}>
                            <span>IATF 16949</span>
                            <span>ISO 14001</span>
                            <span>ISO 9001</span>
                        </div>
                    </div>
                    <div className={`${styles.trustCard} glass-effect fade-in-up`} style={{ animationDelay: '0.4s' }}>
                        <h3>지속가능성 (ESG)</h3>
                        <p>고효율 열관리 솔루션을 통해 전기차의 에너지 소비를 최소화하고, 친환경 소재 도입을 통해 탄소 중립을 실천합니다.</p>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className={`${styles.historySection} fade-in-up`} style={{ animationDelay: '0.5s' }}>
                <div className={styles.sectionHeader}>
                    <span>Our Journey</span>
                    <h2>썬텍의 발자취</h2>
                </div>
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <span className={styles.year}>2024</span>
                        <p>차세대 CNT 히팅 솔루션 양산 공급 개시</p>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.year}>2022</span>
                        <p>ADAS용 정밀 센서 히터 시장 점유율 글로벌 TOP 5 달성</p>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.year}>2018</span>
                        <p>기업부설 연구소 설립 및 기술 선도 전략 수립</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
