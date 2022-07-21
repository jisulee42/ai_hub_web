const { Router } = require('express')
const { User } = require("./../models")
const router = Router()
const asyncHandler = require("./../utils/async-handler")
const crypto = require("crypto")
const jwt = require('jsonwebtoken')
const jwtConfig = require('../config/jwtconfig')

router.post("/signUp", asyncHandler(async (req, res, next) => {
  const { email, password, name } = req.body

  let hashPassword = passwordHash(password)
  console.log(hashPassword)

  const checkEmail = await User.findOne({ email })

  if (checkEmail) {
    //throw new Error("'이미 가입된 이메일 입니다") <-- 이렇게 하면 에러메세지에 html 로 들어감
    res.status(500)
    res.json({
      erro: "이미 가입된 이메일 입니다"
    })
    return
  }
  await User.create({
    email,
    password: hashPassword,
    name
  })

  res.json({ result: "회원가입이 완료 되었습니다. 로그인 해주세요" })
}))

router.post("/login", asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  let hashPassword = passwordHash(password)

  const checkEmail = await User.findOne({ email })

  if (!checkEmail) {
    res.status(401)
    res.json({
      fail: "존재하지 않는 이메일 입니다."
    })
    return
  }

  if (hashPassword !== checkEmail.password) {
    res.status(401)
    res.json({
      fail: "비밀번호가 틀렸습니다."
    })
    return
  }

  jwt.sign({
    email: email,
    name: checkEmail.name
  }, jwtConfig.secret, {
    expiresIn: '1m' // 1y, 1d, 1hrs, 1h, 1m, 5s jwt 토큰 유지 기한, 
  }, (err, token) => {
    if (err) {
      res.status(401).json({ status: false, message: "로그인을 해주세요" })
    } else {
      res.json({ 
        status: true, 
        accessToken: token, 
        email: email, 
        name: checkEmail.name })
    }
  })
}))

const passwordHash = (password) => {
  return crypto.createHash("sha1").update(password).digest("hex")
}

module.exports = router;