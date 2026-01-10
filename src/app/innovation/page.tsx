import styles from './innovation.module.css';

export default function InnovationPage() {
    const patents = [
        { title: "CNT 평면 발열체 제조법", date: "2023.05", number: "No. 10-2023-XXXX" },
        { title: "초정밀 센서 클리닝 히터", date: "2022.11", number: "No. 10-2022-XXXX" },
        { title: "고효율 배터리 가열 유닛", date: "2021.08", number: "No. 10-2021-XXXX" },
        { title: "유연 기판 인쇄 공정 기술", date: "2020.03", number: "No. 10-2020-XXXX" },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className="fade-in-up">Technological Hegemony</h1>
                <p className="fade-in-up" style={{ animationDelay: '0.1s' }}>
                    누구도 따라올 수 없는 원천 기술로 모빌리티의 미래를 바꿉니다.
                </p>
            </header>

            {/* Core Technology Section */}
            <section className={styles.coreTech}>
                <div className={styles.techGrid}>
                    <div className={`${styles.techImage} glass-effect fade-in-up`}>
                        {/* Image Placeholder */}
                        <div className={styles.techGraphic}>CNT Core</div>
                    </div>
                    <div className={styles.techInfo}>
                        <span className={styles.upperTitle}>Proprietary Technology</span>
                        <h2>CNT 투명 발열 기술</h2>
                        <p>
                            탄소나노튜브(CNT)를 활용한 썬텍의 고유 기술은 금속 열선 없이도 높은 투과율과
                            균일한 발열 성능을 제공합니다. 이는 자율주행 차량의 카메라 및 라이다 통합에 필수적인 요소입니다.
                        </p>
                        <ul className={styles.techFeatures}>
                            <li>금속선 없는 투명 히팅 설계</li>
                            <li>초저전력 고효율 열 변환 기술</li>
                            <li>다양한 곡면 기판 대응 유연성</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Patent Archive Section */}
            <section className={styles.patentSection}>
                <div className={styles.sectionHeader}>
                    <h2>특허 및 지적재산권</h2>
                    <p>전 세계 파트너사에게 보호받는 기술력을 제공합니다.</p>
                </div>
                <div className={styles.patentGrid}>
                    {patents.map((patent, i) => (
                        <div key={i} className={`${styles.patentCard} glass-effect fade-in-up`} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                            <div className={styles.patentIcon}>📜</div>
                            <h4>{patent.title}</h4>
                            <p className={styles.patentNum}>{patent.number}</p>
                            <p className={styles.patentDate}>{patent.date}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.totalStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statVal}>150+</span>
                        <span className={styles.statLabel}>Global Patents</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statVal}>30+</span>
                        <span className={styles.statLabel}>R&D Researchers</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
