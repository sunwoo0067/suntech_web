'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './showroom.module.css';
import { products, Product } from '@/data/products';

interface Hotspot {
    id: string;
    top: string;
    left: string;
    name: string;
}

const hotspots: Hotspot[] = [
    { id: 'camera-lens-heater', top: '38%', left: '49%', name: 'Windshield ADAS Camera' },
    { id: 'lidar-radar-heater', top: '55%', left: '15%', name: 'Front Lidar/Radar' },
    { id: 'charge-port-heater', top: '48%', left: '55%', name: 'Side Charge Port' },
    { id: 'ev-battery-heater', top: '65%', left: '60%', name: 'Battery Management System' },
];

export default function ShowroomPage() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleHotspotClick = (id: string) => {
        const product = products.find(p => p.id === id);
        if (product) {
            setSelectedProduct(product);
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Tech Component Showroom</h1>
                <p>썬텍의 혁신 부품이 장착된 미래 지향적 차량의 내부를 탐험해 보십시오.</p>
            </header>

            <div className={styles.showroomWrapper}>
                <Image
                    src="/showroom/base-car.png"
                    alt="Future Car Blueprint"
                    fill
                    className={styles.carImage}
                    priority
                />

                {hotspots.map((spot) => (
                    <div
                        key={spot.id}
                        className={styles.hotspot}
                        style={{ top: spot.top, left: spot.left }}
                        onClick={() => handleHotspotClick(spot.id)}
                        title={spot.name}
                    >
                        <div className={styles.pulse} />
                        <div className={styles.dot} />
                    </div>
                ))}
            </div>

            {/* Modal Overlay */}
            <div className={`${styles.overlay} ${selectedProduct ? styles.active : ''}`}>
                {selectedProduct && (
                    <div className={styles.modal}>
                        <button className={styles.closeBtn} onClick={() => setSelectedProduct(null)}>×</button>
                        <div className={styles.modalImageContainer}>
                            <Image
                                src={selectedProduct.imageUrl}
                                alt={selectedProduct.name}
                                width={400}
                                height={300}
                                className={styles.modalImage}
                            />
                        </div>
                        <div className={styles.modalContent}>
                            <span className="category-tag">{selectedProduct.category}</span>
                            <h2>{selectedProduct.name}</h2>
                            <p>{selectedProduct.description}</p>

                            <div className={styles.actionArea}>
                                <Link href={`/products/${selectedProduct.id}`} className={styles.viewDetailBtn}>
                                    기술 사양 상세보기
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
