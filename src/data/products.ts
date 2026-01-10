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
        name: "Camera Lens Heater",
        description: "ADAS 및 자율주행용 카메라 렌즈의 성에 및 결로를 방지하여 최상의 시야를 확보합니다.",
        features: [
            "초박형 투명 필름 기술 적용",
            "빠른 발열 속도로 즉각적인 시야 확보",
            "고투과율 소재로 카메라 성능 간섭 최소화"
        ],
        specs: [
            { label: "Oper. Voltage", value: "DC 12V / 24V" },
            { label: "Transmittance", value: "> 85%" },
            { label: "Thickness", value: "0.2mm 이하" }
        ],
        imageUrl: "/products/camera-lens-heater.png"
    },
    {
        id: "lidar-radar-heater",
        category: "Sensor Heater",
        name: "Lidar / Radar Heater",
        description: "전천후 자율주행을 위한 핵심 부품으로, 라이다 및 레이다 센서 표면의 눈과 얼음을 제거합니다.",
        features: [
            "균일한 발열 패턴 설계",
            "센서 신호 투과성 최적화",
            "극한 환경에서의 내구성 검증 완료"
        ],
        specs: [
            { label: "Material", value: "Metal Foil / CNT" },
            { label: "Surface Temp", value: "Max 60°C" },
            { label: "Application", value: "Lidar, Radar, Ultrasonic" }
        ],
        imageUrl: "/products/lidar-radar-heater.png"
    },
    {
        id: "ev-battery-heater",
        category: "EV Solution",
        name: "EV Battery Heater",
        description: "전기차 배터리의 동작 최적 온도를 유지하여 겨울철 주행 거리 감소를 최소화하고 수명을 연장합니다.",
        features: [
            "배터리 팩 전체의 균일 가열",
            "에너지 효율 극대화 설계",
            "화재 안전을 위한 다중 보호 구조"
        ],
        specs: [
            { label: "Type", value: "Film / Silicone Pad" },
            { label: "Heat Density", value: "Customizable" },
            { label: "Efficiency", value: "> 95%" }
        ],
        imageUrl: "/products/ev-battery-heater.png"
    },
    {
        id: "cnt-heating-film",
        category: "Core Tech",
        name: "CNT Heating Film",
        description: "탄소나노튜브 기반의 차세대 발열체로, 금속선이 없어 유연하고 가벼우며 전자파 차폐 효과가 뛰어납니다.",
        features: [
            "꿈의 신소재 CNT 활용",
            "자유로운 곡면 설계 가능",
            "뛰어난 에너지 효율 및 내구성"
        ],
        specs: [
            { label: "Resistance", value: "Custom Selection" },
            { label: "Flexibility", value: "Excellent (Bending test pass)" },
            { label: "Weight", value: "Ultra-lightweight" }
        ],
        imageUrl: "/products/cnt-heating-film.png"
    },
    {
        id: "charge-port-heater",
        category: "EV Solution",
        name: "Charge Port Heater",
        description: "혹한기 충전 도어 동결을 방지하여 전기차 충전의 편의성을 보장합니다.",
        features: [
            "플러시 타입 도어 완벽 대응",
            "저전력 고효율 가열",
            "방수 및 방진 설계 완료"
        ],
        specs: [
            { label: "Voltage", value: "DC 12V" },
            { label: "Power", value: "10W - 30W" },
            { label: "Cycle Time", value: "< 2 mins" }
        ],
        imageUrl: "/products/charge-port-heater.png"
    }
];

export const productCategories = ["All", "Sensor Heater", "EV Solution", "Core Tech", "Sensors"];
