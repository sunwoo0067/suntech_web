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
            src="/main-hero.png"
            alt="Futuristic Automotive Chassis with Heating Systems"
            fill
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

      {/* New Innovation Excellence Section */}
      <section className={`${styles.innovationSection} reveal`}>
        <div className={styles.innovationBg}>
          <Image
            src="/innovation-bg.png"
            alt="Innovation Excellence"
            fill
          />
        </div>
        <div className={styles.innovationContent}>
          <span>Innovation in Motion</span>
          <h2>미래 모빌리티의 기준을<br />썬텍이 만듭니다</h2>
          <p className={styles.description} style={{ color: 'rgba(255,255,255,0.8)' }}>
            고효율 열관리 시스템부터 정밀 센싱 기술까지, 전기차와 ADAS 시대의 핵심 과제를 해결합니다.
          </p>
          <Link href="/innovation" className={styles.primaryBtn} style={{ background: 'white', color: 'black' }}>
            기술 혁신 더보기
          </Link>
        </div>
      </section>

      {/* New Tech Details Grid Section */}
      <section className={styles.techDetails}>
        <div className={styles.sectionHeader}>
          <span>Our Focus Topics</span>
          <h2>핵심 기술 포트폴리오</h2>
        </div>
        <div className={styles.imageGrid}>
          <div className={`${styles.gridItem} ${styles.large} reveal`}>
            <Image
              src="/innovation-bg.png"
              alt="Next Gen Mobility"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.itemCaption}>
              <h4>Next-Gen Mobility</h4>
              <p>SDV 및 자율주행을 위한 통합 열관리 솔루션</p>
            </div>
          </div>
          <div className={`${styles.gridItem} ${styles.small} reveal reveal-delay-1`}>
            <Image
              src="/tech-detail-nano.png"
              alt="Nano Heating Film"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.itemCaption}>
              <h4>Nano Heating Film</h4>
              <p>초박형 고출력 CNT 히팅 기술</p>
            </div>
          </div>
          <div className={`${styles.gridItem} ${styles.small} reveal reveal-delay-2`}>
            <Image
              src="/tech-detail-sensor.png"
              alt="Smart Sensing"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.itemCaption}>
              <h4>Smart Sensing</h4>
              <p>극한 환경에서도 정확한 ADAS 정밀 센서</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
