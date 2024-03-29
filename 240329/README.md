## MySQL Workbench
SQL 개발과 관리, 데이터베이스 설계, 생성 그리고 유지를 위한 단일 개발 통합 환경을 제공하는 비주얼 데이터베이스 설계 도구

<img width="800" alt="Screenshot 2024-03-29 at 18 25 57" src="https://github.com/hajin0324/dev-course/assets/74534952/dfaaac54-b103-49ec-b439-9aea747971e3">

다운로드 : https://dev.mysql.com/downloads/workbench/

<br>

### users table 생성
<img width="800" alt="Screenshot 2024-03-29 at 19 07 52" src="https://github.com/hajin0324/dev-course/assets/74534952/1e95ce15-20cb-46a4-bdd2-4122a17c96d1">

<br>

### blogs table 생성
<img width="800" alt="Screenshot 2024-03-29 at 19 30 43" src="https://github.com/hajin0324/dev-course/assets/74534952/c2a1f6ef-7a17-4ac1-8fb5-532c161b0e37">

<br><br>

## DataBase 연동

### MySQL2 설치하기
``` bash
npm install --save mysql2
```

<br>

### time_zone 설정하기
``` sql
SET time_zone = 'Asia/Seoul'
SET GLOBAL time_zone = 'Asia/Seoul'
```
- GLOBAL : 모든 스키마에 적용

<br>

### 현재 설정값 확인
``` sql
SELECT @@global.time_zone, @@session.time_zone;
```
- `@@global.time_zone` : global로 설정된 time_zone 값
- `@@session.time_zone` : 현재 session에 설정된 time_zone 값