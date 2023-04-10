const express = require('express')
const app = express()

var cors = require('cors')
app.use(cors())

let isToggle = 1

app.get('/dust', function(req, res){
    res.send([{ team: "모각코 7조 'I, KOSS'", value: "395" }, { team: "모각코 2조", value: "38" }])
})

app.patch('/toggle', function(req, res){  

    if(isToggle === 1)
    {
        res.send("OFF")
        isToggle = 0
    }
    else
    {
        res.send("ON")
        isToggle = 1
    }

})

app.listen(8000)