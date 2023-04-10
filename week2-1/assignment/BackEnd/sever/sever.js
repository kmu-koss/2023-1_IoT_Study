const express = require('express')
const app = express()
const port = 8000 
var cors = require('cors')

app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const table = [
  { team: "String Type Team Name", value: "Number Type Dust Value" },
  { team: "모각코 9조", value: "38" }
];


app.get("/dust", (req,res) => {
  res.status(200).json(table)
})

const Toggle_State = ["ON","OFF"];
let i=0;

app.patch("/toggle", (req, res) => {
  res.status(200).json(Toggle_State[i%2])
  i++;
})
