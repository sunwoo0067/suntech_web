"use client";

import { useState } from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send data to Supabase or an email service
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className={styles.container}>
                <div className={`${styles.successWrapper} glass-effect fade-in-up`}>
                    <div className={styles.successIcon}>✓</div>
                    <h1>문의가 정상적으로 접수되었습니다.</h1>
                    <p>썬텍의 기술 전문가가 영업일 기준 24시간 이내에 기재해주신 이메일로 답변을 드리겠습니다.</p>
                    <button onClick={() => setSubmitted(false)} className={styles.backBtn}>새 문의 작성하기</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className="fade-in-up">Global Technical Inquiry</h1>
                <p className="fade-in-up" style={{ animationDelay: '0.1s' }}>
                    차세대 열관리 솔루션에 대한 기술 문의 및 샘플 요청을 환영합니다.
                </p>
            </header>

            <div className={styles.mainGrid}>
                {/* Contact Form Section */}
                <section className={`${styles.formSection} glass-effect fade-in-up`} style={{ animationDelay: '0.2s' }}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formRow}>
                            <div className={styles.inputGroup}>
                                <label>이름 (Name)</label>
                                <input type="text" placeholder="홍길동" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>이메일 (Email)</label>
                                <input type="email" placeholder="example@company.com" required />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.inputGroup}>
                                <label>회사명 (Company)</label>
                                <input type="text" placeholder="주식회사 썬텍" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>국가 (Country)</label>
                                <select required>
                                    <option value="KR">South Korea</option>
                                    <option value="US">USA</option>
                                    <option value="DE">Germany</option>
                                    <option value="JP">Japan</option>
                                    <option value="ETC">Others</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label>관심 제품군 (Interested Products)</label>
                            <select required>
                                <option value="">제품군을 선택해 주세요</option>
                                <option value="sensor">Sensor Heaters</option>
                                <option value="ev">EV Solutions</option>
                                <option value="cnt">CNT Core Tech</option>
                                <option value="other">Others</option>
                            </select>
                        </div>

                        <div className={styles.inputGroup}>
                            <label>문의 내용 (Message)</label>
                            <textarea placeholder="프로젝트 세부 사항 또는 기술적 요청 사항을 입력해 주세요." rows={6} required></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>문의 제출하기 (Submit Request)</button>
                    </form>
                </section>

                {/* Global HQ Info Section */}
                <section className={styles.sidebar}>
                    <div className={`${styles.infoCard} glass-effect fade-in-up`} style={{ animationDelay: '0.4s' }}>
                        <h3>Global HQ (Korea)</h3>
                        <p className={styles.address}>
                            충청북도 청주시 ... (주)썬텍 본사
                        </p>
                        <div className={styles.contactItems}>
                            <div className={styles.contactItem}>
                                <span className={styles.label}>Phone</span>
                                <span className={styles.value}>+82-43-XXX-XXXX</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.label}>Email</span>
                                <span className={styles.value}>sales@sun-tech.com</span>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.infoCard} glass-effect fade-in-up`} style={{ animationDelay: '0.5s' }}>
                        <h3>Customer Support</h3>
                        <p>기술 지원 및 대량 주문 관련 문의는 아래 이메일로도 가능합니다.</p>
                        <span className={styles.value}>support@sun-tech.com</span>
                    </div>
                </section>
            </div>
        </div>
    );
}
