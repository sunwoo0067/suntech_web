export const translations = {
    ko: {
        nav: {
            about: "회사소개",
            products: "제품정보",
            showroom: "쇼룸",
            innovation: "기술혁신",
            contact: "문의하기",
        },
        hero: {
            title1: "Breaking Conventions,",
            title2: "Leading Innovation",
            description: "자동차 부품 산업의 한계를 넘는 혁신적인 발열 및 센서 솔루션. 글로벌 R&D 파트너 썬텍과 함께 미래를 설계하십시오.",
            ctaPrimary: "제품 라인업 보기",
            ctaSecondary: "기술 협력 문의",
        },
        highlights: {
            globalTrust: {
                title: "Global Trust",
                desc: "전 세계 주요 자동차 제조사 및 R&D 센터의 검증된 기술 파트너",
            },
            pureInnovation: {
                title: "Pure Innovation",
                desc: "150건 이상의 특허와 차세대 소재 연구를 통한 독보적 솔루션",
            },
            zeroDefect: {
                title: "Zero Defect",
                desc: "AI 정밀 검사 시스템 기반의 완벽한 품질 보증 체계",
            },
        },
        innovation: {
            tag: "Innovation in Motion",
            title: "미래 모빌리티의 기준을 썬텍이 만듭니다",
            desc: "고효율 열관리 시스템부터 정밀 센싱 기술까지, 전기차와 ADAS 시대의 핵심 과제를 해결합니다.",
            cta: "기술 혁신 더보기",
        },
        techPortfolio: {
            tag: "Our Focus Topics",
            title: "핵심 기술 포트폴리오",
            nextGen: {
                title: "Next-Gen Mobility",
                desc: "SDV 및 자율주행을 위한 통합 열관리 솔루션",
            },
            nanoFilm: {
                title: "Nano Heating Film",
                desc: "초박형 고출력 CNT 히팅 기술",
            },
            smartSensing: {
                title: "Smart Sensing",
                desc: "극한 환경에서도 정확한 ADAS 정밀 센서",
            },
        },
        footer: {
            address: "경기도 용인시 기흥구...",
            copyright: "© 2024 SUNTECH. All rights reserved.",
        }
    },
    en: {
        nav: {
            about: "About Us",
            products: "Products",
            showroom: "Showroom",
            innovation: "Innovation",
            contact: "Contact",
        },
        hero: {
            title1: "Breaking Conventions,",
            title2: "Leading Innovation",
            description: "Innovative heating and sensing solutions exceeding the limits of the automotive industry. Design the future with Sun-tech, your global R&D partner.",
            ctaPrimary: "View Lineup",
            ctaSecondary: "Inquiry",
        },
        highlights: {
            globalTrust: {
                title: "Global Trust",
                desc: "Proven technology partner for major global automakers and R&D centers.",
            },
            pureInnovation: {
                title: "Pure Innovation",
                desc: "Peerless solutions through over 150 patents and next-gen material research.",
            },
            zeroDefect: {
                title: "Zero Defect",
                desc: "Perfect quality assurance system based on AI precision inspection.",
            },
        },
        innovation: {
            tag: "Innovation in Motion",
            title: "Sun-tech Sets the Standard for Future Mobility",
            desc: "From high-efficiency thermal management systems to precision sensing technology, we solve the core challenges of the EV and ADAS era.",
            cta: "Learn More",
        },
        techPortfolio: {
            tag: "Our Focus Topics",
            title: "Core Technology Portfolio",
            nextGen: {
                title: "Next-Gen Mobility",
                desc: "Integrated thermal management solutions for SDV and autonomous driving.",
            },
            nanoFilm: {
                title: "Nano Heating Film",
                desc: "Ultra-thin, high-power CNT heating technology.",
            },
            smartSensing: {
                title: "Smart Sensing",
                desc: "Precise ADAS sensors reliable even in extreme environments.",
            },
        },
        footer: {
            address: "Giheung-gu, Yongin-si, Gyeonggi-do, Korea",
            copyright: "© 2024 SUNTECH. All rights reserved.",
        }
    }
};

export type Locale = keyof typeof translations;
