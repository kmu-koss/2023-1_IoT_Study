const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors()) // CORS 를 사용하여 조건을 통하여 요청을 허용/비허용할 수 있다. 비어있으면 전부 허용

app.get('/dust/:toggle', (req, res) => { // req : requset, res : response
  const { toggle } = req.params
  res.json([{'team':"모각코 7조", 'value':"1000"}, {'team':"모각코 2조", 'value':"38"}])
})

app.patch('/toggle/:toggle', (req, res) => { // req : requset, res : response
  const { toggle } = req.params
  if (toggle == "ON") {
    res.send("OFF")
  }else {
    res.send("ON")
  }
})

// 실행되고 나서 알림을 보내는 용도
app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
})