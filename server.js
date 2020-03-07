/*
 * @说明:
 * @版本: 2.0
 * @姓名: As hely
 * @Date: 2020-03-07 12:46:29
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-07 18:50:27
 */
/*
 * @说明:
 * @版本: 2.0
 * @姓名: Youmi
 * @Date: 2020-01-05 15:11:59
 * @最后编辑: Youmi
 * @LastEditTime: 2020-03-06 16:58:47
 */
const http = require('http')
const url = require('url')
const querystring = require('querystring')
http.createServer((req, res) => {
  if (req.url != '/favicon.ico') {
    var urlObj = url.parse(req.url)
    if (urlObj.pathname === '/myapi') {
      // 这里是ajx请求
      ajxManage(req, res)
    }
  }
}).listen('83', () => {
  console.log('服务器开启成功')
})

// 用来存储用户名和密码
const userMag = []
// 请求ajx的封装
function ajxManage (req, res) {
  var str = ''
  req.on('data', (d) => {
    str += d
  })
  req.on('end', () => {
    // post的数据的解析
    let data = querystring.parse(str)
    // 非空为true
    if (!str) {
      // get方式
      data = url.parse(req.url, true).query
      // console.log(data);
    }
    if (data.type === 'login') {
      // 登录
      dl(res, data)
    }
    if (data.type === 'register') {
      // 注册
      zc(res, data)
    }
  })
}
// 注册的函数封装
function zc (res, data) {
  const i = userMag.some((val) => {
    return val.username === data.username
  })
  // 返回前端的信息
  const resMsg = {}
  if (i) {
    resMsg.code = 0
    resMsg.msg = '该用户已经注册！'
  } else {
    resMsg.code = 1
    resMsg.msg = '用户注册成功！'
    userMag.push({
      username: data.username,
      pwd: data.pwd,
      onoff: 0
    })
  }
  console.log(userMag)
  res.write(JSON.stringify(resMsg))
  res.end()
}
// 登录的函数封装
function dl (res, data) {
  let on = true
  for (var i = 0; i < userMag.length; i++) {
    const resMsg = {}
    if (userMag[i].username === data.username) {
      on = false
      if (userMag[i].pwd === data.pwd) {
        resMsg.code = 1
        resMsg.msg = '登录成功！'
      } else {
        resMsg.code = 2
        resMsg.msg = '密码错误！'
      }
      res.write(JSON.stringify(resMsg))
      res.end()
    }
    return
  }
  if (on) {
    const resMsg = {
      code: 0,
      msg: '用户名不存在，请先注册'
    }
    res.write(JSON.stringify(resMsg))
    res.end()
  }
}
