const { Schema } = require('mongoose');
const shortId = require('./types/short-id');

module.exports = new Schema({
  shortId,
  title: String,
  content: String
}, {
  timestampse: true // Document의 생성 또는 수정 시간을 저장
})