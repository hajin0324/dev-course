## DB(DataBase)
데이터를 통합하여 효율적으로 관리하기 위한 데이터 집합체

데이터를 구조화하여 관리함으로써 데이터 중복을 막고, 효율적이고 빠른 데이터 연산을 가능하게 함

<br><br>

## DBMS(DataBase Management System)
사용자와 데이터베이스 사이에서 사용자의 요구에 따라 정보를 생성해주고 데이터베이스를 관리해 주는 시스템

<br>

### DBMS 종류

ORACLE, MySQL, MariaDB

→ 운영 회사는 다르지만, 데이터베이스에 연산을 요청하기 위해 사용 되는 주요 명령어는 동일

<br>

### RDBMS(Relational DBMS)
관계형 데이터베이스를 생성, 수정, 관리, 검색하는 데 사용되는 시스템

테이블로 구성되며, 각 테이블은 행(Row)과 열(Column)로 이루어져 있음

- 행 : 데이터 레코드(Record)
- 열 : 특정 데이터 유형

<br><br>

## SQL(Structured Query Language)

SQL은 데이터베이스에 연산을 요청하기 위해 사용 되는 언어

→ 데이터 생성, 조회, 수정, 삭제 등과 같은 기능 수행

- 데이터 삽입 : `INSERT`
- 데이터 조회 : `SELECT`
- 데이터 수정 : `UPDATE`
- 데이터 삭제 : `DELETE`

<br><br>

## Primary key, Foreign key
### Primary key(기본 키)
데이터베이스 테이블 내의 특정 레코드를 유일하게 식별하기 위해 사용되는 필드

**특징**
1. 모든 레코드가 서로 다른 값을 가지고 있음
2. NULL 값이 존재할 수 없음

<br>

### Foreign key(외래 키)
하나의 테이블에서 다른 테이블의 기본키를 참조하는 키

**특징**
1. 외부 키는 한 테이블의 필드로, 다른 테이블의 기본 키를 나타냄
2. 기본 키에 존재하지 않는 값이 외부키에 존재할 수 없음

<br><br>

## 연관관계
데이터베이스 테이블 간 어떤 관계를 가지고 있는지 연관관계는 1 : 1, 1 : N, M : N

**1 : 1** 

하나의 레코드가 다른 테이블의 레코드 한 개와 연결된 경우

**1 : N** 

하나의 레코드가 서로 다른 여러 개의 레코드와 연결된 경우

**M : N**

여러 개의 레코드가 다른 테이블의 여러 개의 레코드와 관계가 있는 경우

<br><br>

## blog project 테이블 설계
<img width="740" alt="Screenshot 2024-03-27 at 14 40 58" src="https://github.com/hajin0324/dev-course/assets/74534952/1923129b-a390-43e0-a597-b204ee6e8993">

<br>

### 데이터베이스 관계 다이어그램(ERD)
<img width="586" alt="Screenshot 2024-03-27 at 15 16 32" src="https://github.com/hajin0324/dev-course/assets/74534952/b6d71f9a-d067-4262-8347-910301ad6f62">