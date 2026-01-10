# [Guide] 코딩 컨벤션 및 AI 협업 가이드

## 1. 핵심 원칙: "글로벌 B2B 수준의 코드 품질"
- **신뢰 기반의 검증:** AI가 생성한 코드는 반드시 브라우저 테스트를 거쳐야 하며, 시각적 품질(Tesla 스타일)이 유지되는지 확인합니다.
- **성능 우선:** 연구원들의 PC 환경에서 도면 데이터가 빠르게 로딩되도록 최적화된 로직을 사용합니다.
- **가독성:** 1인 운영자가 나중에 코드를 보더라도 의도를 즉시 파악할 수 있도록 선언적이고 명확한 명명 규칙을 따릅니다.

## 2. 기술 스택별 코딩 표준

### 2.1 Next.js (React)
- **Component Separation:** UI 컴포넌트(Presentational)와 데이터 로직(Container/Server Components)을 엄격히 분리합니다.
- **Strict Typing:** TypeScript를 사용하여 도면 데이터 및 제품 스펙의 데이터 타입을 엄격하게 정의합니다.
- **Image Optimization:** 모든 제품 이미지는 `next/image`를 사용하고 배너 영상은 `lazy-loading`을 적용합니다.

### 2.2 스타일링 (Vanilla CSS)
- **BEM Convention:** 클래스명은 `block__element--modifier` 형식을 권장하여 스타일 충돌을 방지합니다.
- **Variable Usage:** [Design System](file:///design_system.md)에 정의된 컬러 토큰만 CSS 변수로 사용하여 테마의 일관성을 유지합니다.

### 2.3 데이터베이스 (Supabase/PostgreSQL)
- **RLS First:** 모든 테이블 생성 시 Row Level Security 정책을 먼저 정의하여 데이터 보안을 강화합니다.
- **Snake Case:** DB 테이블 및 컬럼명은 스네이크 케이스(`contact_log`)를 사용합니다.

## 3. 효과적인 AI 소통 원칙
- **컨텍스트 주입:** 새로운 기능을 요청할 때 항상 [PRD](file:///prd.md)와 [TASKS](file:///tasks.md)의 관련 섹션을 언급하세요.
- **단계적 요청:** "홈페이지 전체 만들어줘" 식의 명령 대신, [TASKS](file:///tasks.md)에 정의된 마이크로 태스크 단위로 하나씩 요청하세요.
- **검증 요청:** 코드를 작성한 뒤에는 "이 코드가 PRD의 기술 파트너 이미지를 어떻게 강화하는지 설명해 줘"라고 질문하여 의도를 점검하세요.

## 4. 보안 체크리스트
- `.env` 파일에 API Key 및 비밀 정보를 절대 포함하지 않고 Vercel 관리자 환경에서 관리합니다.
- 사용자 문의 폼에는 기본적인 SQL Injection 방지 및 XSS 필터링을 적용합니다.

## 5. 배포 및 업데이트 워크플로우
- 모든 변경 사항은 `git commit` 전 로컬 빌드 테스트(`npm run build`)를 통과해야 합니다.
- 제품 데이터 업데이트는 수동 코드 수정이 아닌 Supabase 대시보드를 통해 1인 운영이 가능하도록 유지합니다.
