'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import useScrollReveal from '@/hooks/useScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  useScrollReveal();
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={`${styles.hero} reveal`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>{t.hero.title1}</span><br />
            {t.hero.title2}
          </h1>
          <p className={styles.description}>
            {t.hero.description}
          </p>
          <div className={styles.ctas}>
            <Link href="/products" className={styles.primaryBtn}>{t.hero.ctaPrimary}</Link>
            <Link href="/contact" className={styles.secondaryBtn}>{t.hero.ctaSecondary}</Link>
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
          <h3>{t.highlights.globalTrust.title}</h3>
          <p>{t.highlights.globalTrust.desc}</p>
        </div>
        <div className={`${styles.highlightCard} reveal reveal-delay-2`}>
          <h3>{t.highlights.pureInnovation.title}</h3>
          <p>{t.highlights.pureInnovation.desc}</p>
        </div>
        <div className={`${styles.highlightCard} reveal reveal-delay-3`}>
          <h3>{t.highlights.zeroDefect.title}</h3>
          <p>{t.highlights.zeroDefect.desc}</p>
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
          <span>{t.innovation.tag}</span>
          <h2>{t.innovation.title}</h2>
          <p className={styles.description} style={{ color: 'rgba(255,255,255,0.8)' }}>
            {t.innovation.desc}
          </p>
          <Link href="/innovation" className={styles.primaryBtn} style={{ background: 'white', color: 'black' }}>
            {t.innovation.cta}
          </Link>
        </div>
      </section>

      {/* New Tech Details Grid Section */}
      <section className={styles.techDetails}>
        <div className={styles.sectionHeader}>
          <span>{t.techPortfolio.tag}</span>
          <h2>{t.techPortfolio.title}</h2>
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
              <h4>{t.techPortfolio.nextGen.title}</h4>
              <p>{t.techPortfolio.nextGen.desc}</p>
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
              <h4>{t.techPortfolio.nanoFilm.title}</h4>
              <p>{t.techPortfolio.nanoFilm.desc}</p>
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
              <h4>{t.techPortfolio.smartSensing.title}</h4>
              <p>{t.techPortfolio.smartSensing.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
