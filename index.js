import express from 'express'

const app = express()
app.get('/',(req,res)=>{
    res.send('helou wuorl')
})

app.listen(3000)
console.log('server en port ' + 3000)