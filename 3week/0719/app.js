const express = require("express")
const mongoose = require("mongoose")
const postsRouter = require("./routes/posts")
const cors = require("cors");
const bodyParser = require("body-parser")
const app = express();

//DB 연결
mongoose.connect("mongodb://localhost:27017/myapp");

mongoose.connection.on("connected", () => {
  console.log('DB connect success');
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

// 서버사이드와 클라이언트 사이드가 포트가 다랄서 서로 다른 서버라고 생각해서 오류가 나기 때문에 해당 모듈(cors) 사용
app.use(cors());
// request 에서 들어오는 모든 데이터들을 json 형태로 변환함
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true})) // 이거해야 바디 데이터 읽어올 수 있음. 없으면 undefined로 들어오면
app.use("/posts", postsRouter);

app.listen(8080, () => {
  console.log('server open');
});



