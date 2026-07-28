# 대윤 농장 GitHub Pages + Cloudtype

## GitHub Pages에 올릴 파일
`index.html`, `config.js`, `assets/`, `order-check/`, `admin/`을 저장소 최상단에 올립니다.

`config.js`의 `https://YOUR-SERVICE.cloudtype.app`을 실제 Cloudtype 주소로 변경합니다.

## Cloudtype 배포
이 폴더 전체를 GitHub 저장소에 올리고 Cloudtype 서비스의 루트 디렉터리를 이 폴더로 지정합니다. 시작 명령은 `npm start`입니다.

환경변수:

- `DATABASE_URL`: PostgreSQL 접속 문자열
- `ADMIN_PASSWORD`: 관리자 비밀번호 (Cloudtype 화면에서만 `941025`로 등록하고 GitHub 코드에는 쓰지 마세요.)
- `TOKEN_SECRET`: 길고 임의적인 비밀 문자열
- `ALLOWED_ORIGINS`: GitHub Pages 또는 맞춤 도메인 주소. 여러 개면 쉼표로 구분
- `NODE_ENV`: `production`

Cloudtype PostgreSQL은 자동 백업이 없으므로 실제 운영 DB는 Supabase 등 관리형 PostgreSQL 사용을 권장합니다.
