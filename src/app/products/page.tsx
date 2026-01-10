"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products, productCategories } from '@/data/products';
import styles from './products.module.css';

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className={styles.container}>
            <section className={styles.headerSection}>
                <h1 className="fade-in-up">제품 카탈로그</h1>
                <p className="fade-in-up" style={{ animationDelay: '0.1s' }}>
                    썬텍의 혁신적인 열관리 솔루션과 정밀 센서 기술을 확인하십시오.
                </p>
            </section>

            {/* Category Filter */}
            <div className={`${styles.filterBar} fade-in-up`} style={{ animationDelay: '0.2s' }}>
                {productCategories.map(category => (
                    <button
                        key={category}
                        className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product List */}
            <div className={styles.productGrid}>
                {filteredProducts.map((product, index) => (
                    <Link
                        href={`/products/${product.id}`}
                        key={product.id}
                        className={`${styles.productCard} glass-effect fade-in-up`}
                        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                fill
                                className={styles.productImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <span className={styles.categoryTag}>{product.category}</span>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <div className={styles.specsPreview}>
                                {product.specs.slice(0, 2).map((spec, i) => (
                                    <span key={i}>{spec.label}: {spec.value}</span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
