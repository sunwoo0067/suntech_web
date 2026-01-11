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
    { id: 'wiper-heater', top: '35%', left: '45%', name: 'Wiper & LDWS Heater' },
    { id: 'camera-lens-heater', top: '58%', left: '22%', name: 'Camera Lens Heater / CMS' },
    { id: 'lidar-radar-heater', top: '68%', left: '18%', name: 'Lidar / Radar Heater' },
    { id: 'mirror-heater', top: '43%', left: '32%', name: 'Side View Mirror Heater' },
    { id: 'door-handle-heater', top: '46%', left: '73%', name: 'Door Handle / Charge Port Heater' },
    { id: 'ev-battery-heater', top: '65%', left: '55%', name: 'High-Efficiency Battery Heater' },
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
                <h1>Heater Solution Showroom</h1>
                <p>썬텍의 정밀 발열 기술이 집약된 부위별 히터 솔루션을 확인해 보십시오.</p>
            </header>

            <div className={styles.showroomWrapper}>
                <Image
                    src="/showroom/base-car-heaters.png"
                    alt="Precision Heater Solution Blueprint"
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
                    >
                        <div className={styles.pulse} />
                        <div className={styles.dot} />
                        <span className={styles.label}>{spot.name}</span>
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
