const express = require('express'); // 이거 전역적으로 선언 불가능..?
const router = express.Router();

const main = require('./main/index');

router.use('/main', main);

module.exports = router;