'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
    const { locale, setLocale, t } = useLanguage();

    const toggleLanguage = () => {
        setLocale(locale === 'ko' ? 'en' : 'ko');
    };

    return (
        <header className={`${styles.header} glass-effect`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>SUNTECH</span>
                </Link>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="/about">{t.nav.about}</Link></li>
                        <li><Link href="/products">{t.nav.products}</Link></li>
                        <li><Link href="/showroom">{t.nav.showroom}</Link></li>
                        <li><Link href="/innovation">{t.nav.innovation}</Link></li>
                        <li><Link href="/contact">{t.nav.contact}</Link></li>
                    </ul>
                </nav>

                <div className={styles.util}>
                    <button
                        className={styles.langBtn}
                        onClick={toggleLanguage}
                    >
                        {locale === 'ko' ? 'EN' : 'KO'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
