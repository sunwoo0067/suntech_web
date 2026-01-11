import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={`${styles.header} glass-effect`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>SUNTECH</span>
                </Link>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="/about">회사소개</Link></li>
                        <li><Link href="/products">제품정보</Link></li>
                        <li><Link href="/factory">생산설비</Link></li>
                        <li><Link href="/showroom">쇼룸</Link></li>
                        <li><Link href="/innovation">기술혁신</Link></li>
                        <li><Link href="/contact">문의하기</Link></li>
                    </ul>
                </nav>

                <div className={styles.util}>
                    <button className={styles.langBtn}>EN</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
