const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {

  // app.get('/api/v2/user', (req, res) => {
  //   if (req.headers.authorization === 'Bearer 123.456.789') {
  //     res.send({
  //       id: 1
  //     })
  //   } else {
  //     res.status(401)
  //     res.send({
  //       message: 'not authenticated'
  //     })
  //   }
  // })

  // app.post('/api/v2/user/sign-in', express.json(), (req, res) => {
  //   const { email, password } = req.body
  //   if (email === '1@1' && password === '1') {
  //     res.send({
  //       token: '123.456.789'
  //     })
  //   } else {
  //     res.status(401)
  //     res.send({
  //       message: 'invalid credentials'
  //     })
  //   }
  // })

  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.BACKEND_URL,
      changeOrigin: true,
    })
  )

}
