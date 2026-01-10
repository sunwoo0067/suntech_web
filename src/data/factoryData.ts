export interface FactoryProcess {
    id: string;
    step: number;
    title: string;
    subtitle: string;
    description: string;
    techSpecs: { label: string; value: string }[];
    keyFeatures: string[];
    imageUrl: string;
}

export const factoryProcesses: FactoryProcess[] = [
    {
        id: "screen-printing",
        step: 1,
        title: "Precision Screen Printing",
        subtitle: "정밀 회로 패턴 인쇄",
        description: "CNT(탄소나노튜브) 또는 전도성 페이스트를 최첨단 스크린 인쇄기를 통해 기판에 미세하게 도포합니다.",
        techSpecs: [
            { label: "Precision", value: "±0.01mm" },
            { label: "Cycle Time", value: "< 15s" },
            { label: "Clean Room", value: "Class 1000" }
        ],
        keyFeatures: [
            "초정밀 패턴 정렬 시스템",
            "복합 소재(CNT, Metal) 대응 인쇄 기술",
            "실시간 도포 두께 모니터링"
        ],
        imageUrl: "/hero-part.png" // Placeholder
    },
    {
        id: "auto-stacking",
        step: 2,
        title: "Auto Stacking & Lamination",
        subtitle: "자동 적층 및 압착",
        description: "인쇄된 필름과 보호 레이어를 다층으로 정밀하게 쌓아 올린 후 고온/고압으로 압착하여 일체화합니다.",
        techSpecs: [
            { label: "Layers", value: "Up to 12 layers" },
            { label: "Pressure Control", value: "Servo Hydraulic" },
            { label: "Alignment", value: "CCD Vision Guide" }
        ],
        keyFeatures: [
            "무인화 비전 가이드 적층 시스템",
            "균일 가열 압착 테이블",
            "내부 기포 방지 진공 라미네이션"
        ],
        imageUrl: "/hero-part.png"
    },
    {
        id: "precision-aging",
        step: 3,
        title: "Precision Aging & Stabilization",
        subtitle: "정밀 에이징 및 기술 안정화",
        description: "완성된 발열체에 전류를 흘려 특정 시간 동안 에이징하여 저항값을 안정화시키고 신뢰성을 확보합니다.",
        techSpecs: [
            { label: "Temp Stability", value: "±0.5°C" },
            { label: "Monitoring", value: "Real-time Resistance" },
            { label: "Capacity", value: "50,000 units/day" }
        ],
        keyFeatures: [
            "디지털 제어 저항 에이징 시스템",
            "극한 환경 시뮬레이션 테스트",
            "데이터 자동 로깅 및 분석"
        ],
        imageUrl: "/hero-part.png"
    },
    {
        id: "ai-auto-inspection",
        step: 4,
        title: "AI Vision Inspection",
        subtitle: "AI 기반 무결점 전수 검사",
        description: "육안으로 보기 힘든 미세한 패턴 결함이나 이물을 AI 딥러닝 비전 검사기를 통해 100% 잡아냅니다.",
        techSpecs: [
            { label: "Defect Detection", value: "Min 5μm" },
            { label: "Inspection Speed", value: "0.1s / unit" },
            { label: "Accuracy", value: "99.99%" }
        ],
        keyFeatures: [
            "Deep Learning 알고리즘 적용",
            "3D 형상 측정 및 분석",
            "부적합품 자동 분류 및 추적"
        ],
        imageUrl: "/hero-part.png"
    },
    {
        id: "smart-packaging",
        step: 5,
        title: "Smart Packaging & Logistics",
        subtitle: "스마트 포장 및 출하",
        description: "검증이 완료된 제품을 ESD(정전기 방지) 포장 후 바코드를 통해 실시간 이력 관리 시스템에 등록합니다.",
        techSpecs: [
            { label: "Tracking", value: "QR / Barcode MES" },
            { label: "Package", value: "ESD Safe Protection" },
            { label: "Lead Time", value: "< 24h from Final OK" }
        ],
        keyFeatures: [
            "MES(생산관리시스템) 실시간 연동",
            "개별 제품 시리얼 번호 부여",
            "자동 라벨링 및 이력 관리"
        ],
        imageUrl: "/hero-part.png"
    }
];
