## 📚 database.txt
데이터베이스에 게시글과 사용자 테이블을 만들기 위한 SQL 코드 파일
<br>

<img width="731" alt="Screenshot 2024-03-28 at 12 27 42" src="https://github.com/hajin0324/dev-course/assets/74534952/266fa938-a5d7-4594-a94b-ad575b5173aa">

<br>

### posts table
<img width="693" alt="Screenshot 2024-03-28 at 17 06 52" src="https://github.com/hajin0324/dev-course/assets/74534952/d3d9df32-e10f-485b-a693-7754113324f3">

### users table
<img width="460" alt="Screenshot 2024-03-28 at 17 07 46" src="https://github.com/hajin0324/dev-course/assets/74534952/2b3c091d-152d-46f6-a794-12b56f446408">

### posts table left join users table
<img width="837" alt="Screenshot 2024-03-28 at 17 08 01" src="https://github.com/hajin0324/dev-course/assets/74534952/f496cc39-0fcd-4242-ad2a-7d2fbe23800f">

<br><br>

## 📚 MariaDB 실행
1. Docker desktop 프로그램 실행(Containers - Actions ► → ◼︎)
2. terminal 실행
3. mariadb가 있는 컨테이너 접속 : `docker exec -it mariadb /bin/bash`
4. mariadb 실행 : `mariadb -u root -p`  (password : root)s

<br><br>

## 📚 database

### 데이터베이스 목록 보기
``` SQL
SHOW DATABASES;
```

<br>

### 데이터베이스 생성
``` SQL
CREATE DATABASE {database 이름};
```

<br>

### 데이터베이스 선택
``` SQL
USE {database 이름};
```

<br><br>

## 📚 table

### 테이블 목록 보기
``` SQL
SHOW TABLES;
```

<br>

### 테이블 생성(CREATE)
``` SQL
CREATE TABLE member 
( 
	id VARCHAR(30),
	name VARCHAR(30),
	pwd VARCHAR(30)
)
```

<br>

### 테이블 조회(SELECT ... FROM)

<br>

**테이블 전체 데이터 보기**
``` SQL
SELECT * FROM 테이블명;
```

<br>

**원하는 column만 보기**
``` SQL
SELECT 컬럼명 FROM 테이블명;
SELECT 컬럼명1, 컬럼명2 FROM 테이블명;
```

<br>

**원하는 row만 보기**
``` SQL
SELECT * FROM 테이블명
WHERE 조건;
```

<br>

### 데이터 삽입(INSERT ... VALUES)

<br>

**모든 column에 값 넣기**
``` SQL
INSERT INTO 테이블명
VALUES (컬럼1 데이터, 컬럼2 데이터, ...);
```

<br>

**일부 column에만 값 넣기**
``` SQL
INSERT INTO 테이블명 (column1, column2)
VALUES (컬럼1 데이터, 컬럼2 데이터, ...);
```

<br>

### 데이터 수정(UPDATE ... SET ... WHERE)
``` SQL
UPDATE 테이블명 
SET 컬럼명 = 수정할 값 
WHERE 조건;
```
⚠️ WHERE 절을 쓰지 않으면 모든 행의 값이 바뀜

<br><br>

## 📚 데이터 타입

### 🗓️ 날짜 / 시간 데이터 타입

<br>

**DATE**
- 날짜를 나타내는 타입 (3 byte)
- YYYY-MM-DD
- 1000-01-01 ~ 9999-12-31

<br>

**TIME**
- 시간을 나타내는 타입 (3 byte)
- HH:MM:SS (24시간제)
- -838:59:59.000000 ~ 838:59:59.000000

<br> 

**DATETIME**
- 날짜와 시간을 나타내는 타입 (8 byte)
- YYYY-MM-DD HH:MM:SS
- 1000-01-01 00:00:00 ~ 9999-12-31 23:59:59

<br>

**TIMESTAMP**
- 날짜와 시간을 나타내는 타입 (4 byte)
- YYYY-MM-DD HH:MM:SS
- 1000-01-01 00:00:00 ~ 9999-12-31 23:59:59
- tims_zone 시스템 변수와 관련이 있으며 UTC 시간대로 변환하여 저장

<br>

**YEAR**
- 연도를 나타내는 타입 (1 byte)
- YYYY
- 1901 ~ 2155