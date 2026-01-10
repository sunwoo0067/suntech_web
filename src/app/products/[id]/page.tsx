import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import styles from './product-detail.module.css';

interface Props {
    params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params;
    const product = products.find(p => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <Link href="/products" className={styles.backBtn}>
                ← 목록으로 돌아가기
            </Link>

            <div className={styles.mainGrid}>
                {/* Product Image Section */}
                <div className={`${styles.imageSection} glass-effect fade-in-up`}>
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className={styles.productImage}
                    />
                </div>

                {/* Product Info Section */}
                <div className={styles.infoSection}>
                    <span className={`${styles.category} fade-in-up`}>{product.category}</span>
                    <h1 className="fade-in-up" style={{ animationDelay: '0.1s' }}>{product.name}</h1>
                    <p className={`${styles.description} fade-in-up`} style={{ animationDelay: '0.2s' }}>
                        {product.description}
                    </p>

                    <div className={`${styles.features} fade-in-up`} style={{ animationDelay: '0.3s' }}>
                        <h3>핵심 특장점</h3>
                        <ul>
                            {product.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={`${styles.specs} fade-in-up`} style={{ animationDelay: '0.4s' }}>
                        <h3>기술 제원</h3>
                        <div className={styles.specTable}>
                            {product.specs.map((spec, i) => (
                                <div key={i} className={styles.specRow}>
                                    <span className={styles.specLabel}>{spec.label}</span>
                                    <span className={styles.specValue}>{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.actions} fade-in-up`} style={{ animationDelay: '0.5s' }}>
                        <button className={styles.inquiryBtn}>기술 문의 및 샘플 요청</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
