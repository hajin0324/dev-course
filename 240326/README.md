# Router
URL이나 HTTP 요청 메소드에 대한 request에 애플리케이션이 응답하는 방법을 결정하는 것

<br><br>

## router 모듈화
라우터를 분리하기 위해 디렉터리 구조를 아래와 같이 작성
``` 
.
├── app.js
└── routes
    ├── blogs.js
    └── users.js
```

<br>

### 모듈 작성하기
blogs.js와 users.js에 express.Router()를 사용하여 router를 선언하고 경로대로 각 요청에 대한 응답의 처리를 명시 

**blog.js**
``` javascript
const express = require('express')
const router = express.Router();

router.use(express.json())

router.get('/', (req, res) => {
	res.status(201).send('GET: /blogs')
})

module.exports = router
```

<br>

**users.js**
``` javascript
const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/users', (req, res) => {
	res.status(201).send('GET: /users')
})

module.exports = router
```

<br>

### 모듈 적용하기
app.js에서 blogs와 users를 불러와서 경로에 따라 미들웨어 장착
``` javascript
const express = require('express')
const app = express()app.listen(3000)

const userRouter = require('./routes/users')
const blogRouter = require('./routes/blogs')

app.use("/", userRouter)
app.use("/blogs", blogRouter)
```

<br><br>

## router 매개변수
콜론(:)을 사용하여 변수 지정

/users/**name**, /users/**22**, /users/**blog** 등의 요청 처리 가능

``` javascript
const express = require('express')
const router = express.Router()

router.get('/user/:id', (req, res) => {
	const id = req.params.id
})
```
`req.params.id` 를 이용하여 값을 꺼낼 수 있음

<br><br>

## router 그룹화
주소는 같고 메서드가 다른 경우에 사용

**router 그룹화 전**
``` javascript
const express = require('express')
const router = express.Router();

router.get('/blogs', (req, res) => {
	res.status(201).send('GET: /blogs')
})

router.post('/blogs', (req, res) => {
	res.status(201).send('POST: /blogs')
})

router.delete('/blogs', (req, res) => {
	res.status(201).send('DELETE: /blogs')
})
```

<br>

**router 그룹화 후**
``` javascript
const express = require('express')
const router = express.Router();

router.route('/blogs')
	.get((req, res) => {
		res.status(201).send('GET: /blogs')
	})
	.post((req, res) => {
		res.status(201).send('POST: /blogs')
	})
	.delete((req, res) => {
		res.status(201).send('DELETE: /blogs')
	})
```