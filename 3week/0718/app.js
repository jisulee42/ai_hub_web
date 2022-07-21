const mongoose = require('mongoose')
const { Post1 } = require('./models')

mongoose.connect("mongodb://localhost:27017/myapp")

mongoose.connection.on("connected", ()=> console.log("연결 완료"))
mongoose.connection.on("disconnected", ()=> console.log("연결 끊김"))
mongoose.connection.on("reconnected", ()=> console.log("재연결 완료"))
mongoose.connection.on("reconnectedfailed", ()=> console.log("재연결 실패"))

async function main(){
  await Post1.create({
    title : '제목2',
    content : '내용2'
  })
}

main()

// async function findList() {
//   return await Post1.find({})
// }

// findList().then((res)=>{
//   console.log(res)
// })

// async function findItem() {
//   return await Post1.find({ title : '제목2  '})
// }

// findItem().then((res)=>{
//   console.log(res)
// })

async function changeItem(){
  return await Post1.findOneAndUpdate({title:'11'}, {
    content : '11',
  })
}

changeItem().then((res) => {
  console.log(res)
}) 

// async function deleteFun(){
//   return await Post1.deleteOne({
//     _id : '62d4ebd76dadf3ecd38ff5ba'
//   })
// }

// deleteFun().then((res)=> console.log(res))