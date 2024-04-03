const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// 서명(토큰 발행)
const token = jwt.sign({ name: 'user' }, process.env.PRIVATE_KEY); // default (HMAC SHA256)

console.log(token);

// 검증
const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
console.log(decoded.name)