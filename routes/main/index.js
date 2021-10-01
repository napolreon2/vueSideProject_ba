const express = require('express');
const router = express.Router();
const controller = require('./controller');

/*
  GET(조회)  -> parameter가 url로 들어갈걸?
  Post(저장) -> parameter가 무거운 조회일 경우 post 사용할수 있음
  PUT(수정)
  DELETE(삭제)
*/

router.get('/', controller.main); // 요청테스트 페이지

module.exports = router;