'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={`${styles.hero} reveal`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>Breaking Conventions,</span><br />
            Leading Innovation
          </h1>
          <p className={styles.description}>
            자동차 부품 산업의 한계를 넘는 혁신적인 발열 및 센서 솔루션.<br />
            글로벌 R&D 파트너 썬텍과 함께 미래를 설계하십시오.
          </p>
          <div className={styles.ctas}>
            <Link href="/products" className={styles.primaryBtn}>제품 라인업 보기</Link>
            <Link href="/contact" className={styles.secondaryBtn}>기술 협력 문의</Link>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageOverlay} />
          <Image
            src="/hero-part.png"
            alt="Futuristic Automotive Parts"
            width={800}
            height={600}
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      {/* Highlights Section */}
      <section className={styles.highlights}>
        <div className={`${styles.highlightCard} reveal reveal-delay-1`}>
          <h3>Global Trust</h3>
          <p>전 세계 주요 자동차 제조사 및 R&D 센터의 검증된 기술 파트너</p>
        </div>
        <div className={`${styles.highlightCard} reveal reveal-delay-2`}>
          <h3>Pure Innovation</h3>
          <p>150건 이상의 특허와 차세대 소재 연구를 통한 독보적 솔루션</p>
        </div>
        <div className={`${styles.highlightCard} reveal reveal-delay-3`}>
          <h3>Zero Defect</h3>
          <p>AI 정밀 검사 시스템 기반의 완벽한 품질 보증 체계</p>
        </div>
      </section>
    </div>
  );
}
