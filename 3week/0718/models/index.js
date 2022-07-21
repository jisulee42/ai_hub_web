const mongoose = require("mongoose")
const PostSchema = require("./schemas/board")

exports.Post1 = mongoose.model("Post", PostSchema); // model 함수 안에 Post는 collection 의 이름 정의