export interface ProductSpec {
    label: string;
    value: string;
}

export interface Product {
    id: string;
    category: string;
    name: string;
    description: string;
    features: string[];
    specs: ProductSpec[];
    imageUrl: string;
}

export const products: Product[] = [
    {
        id: "camera-lens-heater",
        category: "Sensor Heater",
        name: "Camera Lens Heater / CMS",
        description: "고해상도 카메라 모듈 및 CMS(Camera Monitor System)의 렌즈 결로를 방지하여 자율주행 시야를 보호합니다.",
        features: [
            "투명 필름 기반의 고해상도 유지",
            "영하 40도에서도 즉각적인 제빙",
            "초소형 렌즈 맞춤형 설계"
        ],
        specs: [
            { label: "Transmittance", value: "> 90%" },
            { label: "Power Consumption", value: "Low Watts" }
        ],
        imageUrl: "/products/camera-lens-heater.png"
    },
    {
        id: "lidar-radar-heater",
        category: "Sensor Heater",
        name: "Lidar / Radar Heater",
        description: "전면부 라이다 및 레이다 센서 커버의 눈과 얼음을 제거하여 ADAS 성능을 극대화합니다.",
        features: [
            "신호 투과 방해 없는 금속 그리드리스 설계",
            "자동차 전면부 충격 내구성 확보",
            "균일한 표면 온도 정밀 제어"
        ],
        specs: [
            { label: "Material", value: "CNT Film" },
            { label: "Durability", value: "IP6KX" }
        ],
        imageUrl: "/products/lidar-radar-heater.png"
    },
    {
        id: "mirror-heater",
        category: "Safety Solution",
        name: "Side/Rear View Mirror Heater",
        description: "사이드 미러 및 리어 뷰 미러의 습기와성에를 신속하게 제거하여 안전한 차선 변경을 지원합니다.",
        features: [
            "거울 전체 면적 균일 가열",
            "초박형 필름으로 미러 하우징 슬림화",
            "에너지 효율 25% 향상"
        ],
        specs: [
            { label: "Thickness", value: "0.15mm" },
            { label: "Heat Speed", value: "< 1 min" }
        ],
        imageUrl: "/products/mirror-heater.png"
    },
    {
        id: "door-handle-heater",
        category: "EV Solution",
        name: "Door Handle / Charge Port Heater",
        description: "겨울철 플러시 타입 도어 핸들과 충전 포트의 동결을 방지하여 승하차 및 충전 편의성을 제공합니다.",
        features: [
            "결빙 시 강력한 초기 발열 기능",
            "다양한 도어 메커니즘 맞춤형 설계",
            "방수/방진 구조 최적화"
        ],
        specs: [
            { label: "Appliation", value: "Flush Handle, Port Door" },
            { label: "Voltage", value: "DC 12V" }
        ],
        imageUrl: "/products/door-handle-heater.png"
    },
    {
        id: "wiper-heater",
        category: "Safety Solution",
        name: "Wiper / LDWS Heater",
        description: "윈드실드 하단 와이퍼 결빙 방지 및 LDWS 카메라 전면 유리의 시야를 확보합니다.",
        features: [
            "와이퍼 블레이드 손상 방지",
            "LDWS 전용 최적 투명 발열 영역",
            "유리 파손 방지용 소프트 가열 로직"
        ],
        specs: [
            { label: "Area", value: "Windshield Bottom & Top" },
            { label: "Safety", value: "Overheat Protection" }
        ],
        imageUrl: "/products/wiper-heater.png"
    },
    {
        id: "ev-battery-heater",
        category: "EV Solution",
        name: "High-Efficiency Battery Heater",
        description: "전기차 배터리 팩의 온도를 관리하여 겨울철 주행 거리 손실을 막고 충전 속도를 향상시킵니다.",
        features: [
            "배터리 셀 간 편차 없는 균일 가열",
            "극한 환경 주행 가능 거리 20% 증대",
            "초경량 소재 적용으로 연비 개선"
        ],
        specs: [
            { label: "Power", value: "Max 5kW" },
            { label: "Efficiency", value: "98%" }
        ],
        imageUrl: "/products/ev-battery-heater.png"
    }
];

export const productCategories = ["All", "Sensor Heater", "EV Solution", "Core Tech", "Sensors"];
