import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>SUNTECH</Link>
                        <p className={styles.tagline}>
                            Breaking stereotypes with precision thermal technology.
                        </p>
                    </div>

                    <nav className={styles.nav}>
                        <div className={styles.navGroup}>
                            <h4>Company</h4>
                            <ul>
                                <li><Link href="/about">회사소개</Link></li>
                                <li><Link href="/innovation">기술혁신</Link></li>
                                <li><Link href="/news">공지사항</Link></li>
                            </ul>
                        </div>
                        <div className={styles.navGroup}>
                            <h4>Products</h4>
                            <ul>
                                <li><Link href="/products?category=Sensor+Heater">센서 히터</Link></li>
                                <li><Link href="/products?category=EV+Solution">EV 솔루션</Link></li>
                                <li><Link href="/showroom">제품 쇼룸</Link></li>
                            </ul>
                        </div>
                        <div className={styles.navGroup}>
                            <h4>Support</h4>
                            <ul>
                                <li><Link href="/contact">기술 문의</Link></li>
                                <li><Link href="/download">자료실</Link></li>
                                <li><Link href="/privacy">개인정보처리방침</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.info}>
                        <p>(주)썬텍 | 대표이사: OOO | 사업자등록번호: XXX-XX-XXXXX</p>
                        <p>본사: 충청북도 청주시 ... | TEL: +82-43-XXX-XXXX</p>
                        <p className={styles.copyright}>© 2024 SUNTECH Co., Ltd. All Rights Reserved.</p>
                    </div>
                    <div className={styles.socials}>
                        {/* Social Icons Placeholder */}
                        <span className={styles.socialLink}>LinkedIn</span>
                        <span className={styles.socialLink}>YouTube</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
