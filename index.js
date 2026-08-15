require('dotenv').config()

console.log("THIS APP.JS IS RUNNING");
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.get('/twitter',(req,res)=>{
//     res.send('adityadotcom')
// })
app.get('/login', (req, res) => {
    console.log("LOGIN ROUTE HIT");
    res.send('LOGIN WORKS');
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

