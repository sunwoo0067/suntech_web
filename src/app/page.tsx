'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styles from './page.module.css';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();
  const { scrollYProgress } = useScroll();

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  return (
    <div className={styles.container}>
      {/* Hero Section with Interactive Elements */}
      <motion.section
        className={`${styles.hero} dynamic-bg`}
        style={{ opacity: heroOpacity }}
      >
        <motion.div className={styles.content} style={{ y: heroY }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.title}>
              Breaking<br />
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                style={{ display: 'inline-block', color: 'var(--primary-blue)' }}
              >Conventions,</motion.span><br />
              Leading Innovation
            </h1>
          </motion.div>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            자동차 부품 산업의 한계를 넘는 혁신적인 발열 및 센서 솔루션.<br />
            글로벌 R&D 파트너 썬텍과 함께 미래를 설계하십시오.
          </motion.p>

          <div className={styles.ctas}>
            <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.9 }}>
              <Link href="/products" className={styles.primaryBtn}>제품 라인업 보기</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.9 }}>
              <Link href="/contact" className={styles.secondaryBtn}>기술 협력 문의</Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          style={{ scale: imageScale }}
        >
          <div className={styles.imageOverlay} />
          <Image
            src="/main-hero.png"
            alt="Futuristic Automotive Chassis"
            fill
            className={styles.heroImage}
            priority
          />
        </motion.div>
      </motion.section>

      {/* Highlights Section with Interactive Hover */}
      <section className={styles.highlights}>
        {[
          { title: "Global Trust", desc: "전 세계 주요 자동차 제조사 및 R&D 센터의 검증된 파트너" },
          { title: "Pure Innovation", desc: "150건 이상의 특허와 차세대 소재 연구를 통한 독보적 솔루션" },
          { title: "Zero Defect", desc: "AI 정밀 검사 시스템 기반의 완벽한 품질 보증 체계" }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className={styles.highlightCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.2, type: "spring" }}
            whileHover={{
              y: -15,
              backgroundColor: "rgba(0, 123, 192, 0.03)",
              boxShadow: "0 25px 50px rgba(0, 123, 192, 0.1)"
            }}
          >
            <h3 style={{ transition: 'color 0.3s ease' }}>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Innovation Section with Reveal Effect */}
      <section className={styles.innovationSection}>
        <motion.div
          className={styles.innovationBg}
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src="/innovation-bg.png"
            alt="Innovation Excellence"
            fill
          />
        </motion.div>
        <motion.div
          className={styles.innovationContent}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >Innovation in Motion</motion.span>
          <h2>미래 모빌리티의 기준을<br />썬텍이 만듭니다</h2>
          <Link href="/innovation" className={styles.primaryBtn} style={{ background: 'white', color: 'black' }}>
            기술 혁신 더보기
          </Link>
        </motion.div>
      </section>

      {/* Tech Details with Staggered Grid */}
      <section className={styles.techDetails}>
        <div className={styles.sectionHeader}>
          <span>Our Focus Topics</span>
          <h2>핵심 기술 포트폴리오</h2>
        </div>
        <div className={styles.imageGrid}>
          {[
            { tag: "Next-Gen", title: "Future Chassis", img: "/main-hero.png", large: true },
            { tag: "Nano", title: "Heating Film", img: "/tech-detail-nano.png", large: false },
            { tag: "Smart", title: "ADAS Sensors", img: "/tech-detail-sensor.png", large: false }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className={`${styles.gridItem} ${item.large ? styles.large : styles.small}`}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3, duration: 0.8 }}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              <motion.div
                className={styles.itemCaption}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{ background: 'rgba(0, 123, 192, 0.8)', backdropFilter: 'blur(10px)' }}
              >
                <h4>{item.tag}</h4>
                <p>{item.title}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
