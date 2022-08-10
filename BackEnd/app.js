var express = require('express')
var mysql = require('mysql')
var cors = require('cors')
const bodyParser = require('body-parser')
const connection = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password :'root',
    database:'expenses'
})
const app =express();
app.use(cors())
app.use(bodyParser.json())



connection.connect((err)=>{
    if(err) {
        throw err
    }
    else{
        console.log("database Connected Successfully")
    }
})

app.post('/addmyexpenses',(req,res)=>{
    console.log(req.body);
    const {amount,category,paymentmethod,date} = req.body
    connection.query('INSERT INTO myexpenses (amount,category,paymentmethod,date) VALUES (?, ?,?,?)',[amount,category,paymentmethod,date],(err,results)=>{
        if(err) throw err
        if(!amount || !category || !date || !paymentmethod){
            res.status(400).send({
                message:'enter Amount and Category'
            })

        }
        else{
            res.status(200).send({
                message:results.affectedRows + " " +'Amount Added'
            })
        }
    })
})

app.get('/getexpenses',(req,res)=>{
    connection.query('SELECT * FROM myexpenses',(err,results)=>{
        if(err) throw err;
        res.status(200).send({
            message:'Data fetch successfully',
            results:results
        })
    })
})

app.listen(3008, () => {
    console.log("Server running successfully on 3008");
  });