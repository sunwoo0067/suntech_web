# [Database Design] 썬텍 홈페이지 데이터 엔티티 관계도

## 1. 데이터 설계 원칙
- **미래 확장 중심:** 추후 'AI 샌드박스' 기능을 고려하여 제품과 사양(Specification)을 유연하게 연결.
- **정규화 및 효율성:** 대용량 미디어 파일은 저장소(Storage)의 URL만 참조하여 DB 성능 유지.
- **다국어 유연성:** 모든 텍스트 기반 데이터는 다국어 처리(i18n)를 위한 메타데이터 구조 고려.

## 2. ERD (Entity Relationship Diagram)
```mermaid
erDiagram
    CATEGORY ||--o{ PRODUCT : contains
    PRODUCT ||--o{ SPECIFICATION : has
    PRODUCT ||--o{ MEDIA : includes
    
    FACTORY_LINE ||--o{ EQUIPMENT : utilizes
    FACTORY_LINE ||--o{ MEDIA : visualized_by

    CONTACT_LOG ||--o[ PRODUCT : inquires_about
    
    PATENT ||--o{ PRODUCT : applied_to

    PRODUCT {
        string id PK
        string name "제품명"
        string description "제품 설명"
        string category_id FK
        datetime created_at
    }

    SPECIFICATION {
        string id PK
        string product_id FK
        string label "스펙 항목 (예: 정밀도)"
        string value "데이터 (예: 0.01mm)"
        string unit "단위"
    }

    MEDIA {
        string id PK
        string target_id "참조하는 엔티티 ID"
        string url "CDN/Storage URL"
        string type "IMAGE/VIDEO/PDF"
        string alt_text "설명"
    }

    FACTORY_LINE {
        string id PK
        string name "공정명"
        string capacity "생산 능력"
        string automation_rate "자동화율"
    }

    EQUIPMENT {
        string id PK
        string factory_line_id FK
        string name "설비명"
        string manufacturer "제조사"
        string specs "설비 사양"
    }

    CONTACT_LOG {
        string id PK
        string name "문의자 성함"
        string email "이메일"
        string company "소속 회사"
        string message "문의 내용"
        string product_id FK "상담 제품"
        datetime created_at
    }

    PATENT {
        string id PK
        string title "특허명"
        string registration_no "등록 번호"
        string region "등록 국가"
        string doc_url "증명서 링크"
    }
```

## 3. 주요 엔티티 설명
- **PRODUCT & SPECIFICATION:** 다양한 제품군에 유동적으로 대응하기 위해 스펙을 Key-Value 형태로 분리하여 설계.
- **MEDIA (SSOT):** 모든 미디어 자산을 통합 관리하며, 썸네일과 원본 파일을 구분하여 관리.
- **CONTACT_LOG:** 문의자의 비즈니스 가치를 추적하기 위해 관련된 제품 엔티티와 연결.
