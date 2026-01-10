import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={`${styles.title} fade-in-up`}>
            고정관념을 깨는<br />
            기술의 정점,<br />
            <span className={styles.brand}>SUNTECH</span>
          </h1>
          <p className={`${styles.description} fade-in-up`} style={{ animationDelay: '0.2s' }}>
            우리는 자동차 부품 산업의 한계를 넘어선 기술력으로<br />
            전 세계 파트너사에게 최상의 가치를 제공합니다.
          </p>
          <div className={`${styles.ctas} fade-in-up`} style={{ animationDelay: '0.4s' }}>
            <button className={styles.primaryBtn}>제품 카탈로그 보기</button>
            <button className={styles.secondaryBtn}>가상 공장 투어</button>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/hero-part.png"
            alt="Futuristic Automotive Part"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className={styles.highlights}>
        <div className={styles.highlightCard}>
          <h3>글로벌 신뢰</h3>
          <p>전 세계 20여 개국 자동차 연구소와 협력</p>
        </div>
        <div className={styles.highlightCard}>
          <h3>기술 리더십</h3>
          <p>150건 이상의 특허 및 독보적 제조 기술</p>
        </div>
        <div className={styles.highlightCard}>
          <h3>제조 안정성</h3>
          <p>99.9% 자동화 공정 및 무결점 품질 관리</p>
        </div>
      </section>
    </div>
  );
}
