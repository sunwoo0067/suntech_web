"use client";

import { useState } from 'react';
import Image from 'next/image';
import { factoryProcesses, FactoryProcess } from '@/data/factoryData';
import styles from './factory.module.css';

export default function FactoryTourPage() {
    const [activeStep, setActiveStep] = useState<number>(1);
    const currentProcess = factoryProcesses.find(p => p.step === activeStep) || factoryProcesses[0];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className="fade-in-up">Virtual Factory Tour</h1>
                <p className="fade-in-up" style={{ animationDelay: '0.1s' }}>
                    썬텍의 99.9% 자동화된 최첨단 제조 공정을 경험해 보십시오.
                </p>
            </header>

            <div className={styles.tourWrapper}>
                {/* Step Navigation */}
                <nav className={`${styles.stepNav} fade-in-up`} style={{ animationDelay: '0.2s' }}>
                    {factoryProcesses.map((process) => (
                        <button
                            key={process.id}
                            className={`${styles.stepBtn} ${activeStep === process.step ? styles.active : ''}`}
                            onClick={() => setActiveStep(process.step)}
                        >
                            <span className={styles.stepNumber}>{process.step}</span>
                            <span className={styles.stepTitle}>{process.title}</span>
                        </button>
                    ))}
                    <div className={styles.progressLine} style={{ width: `${(activeStep - 1) * 25}%` }}></div>
                </nav>

                {/* Process Highlight Area */}
                <div className={styles.contentGrid}>
                    {/* Left: Media */}
                    <section className={`${styles.mediaSection} glass-effect fade-in-up`} style={{ animationDelay: '0.3s' }}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={currentProcess.imageUrl}
                                alt={currentProcess.title}
                                fill
                                className={styles.factoryImage}
                                priority
                            />
                            <div className={styles.liveBadge}>LIVE FEED - SECTION {currentProcess.step}</div>
                        </div>
                    </section>

                    {/* Right: Info */}
                    <section className={styles.infoSection}>
                        <div className={`${styles.infoCard} fade-in-up`} style={{ animationDelay: '0.4s' }}>
                            <span className={styles.subtitle}>{currentProcess.subtitle}</span>
                            <h2>{currentProcess.title}</h2>
                            <p className={styles.description}>{currentProcess.description}</p>

                            <div className={styles.specsGrid}>
                                {currentProcess.techSpecs.map((spec, i) => (
                                    <div key={i} className={styles.specItem}>
                                        <span className={styles.specLabel}>{spec.label}</span>
                                        <span className={styles.specValue}>{spec.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.featuresList}>
                                <h3>핵심 자동화 기술</h3>
                                <ul>
                                    {currentProcess.keyFeatures.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.statusIndicator}>
                                <div className={styles.pulse}></div>
                                <span>시스템 정상 가동 중 (Optimal Condition)</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
