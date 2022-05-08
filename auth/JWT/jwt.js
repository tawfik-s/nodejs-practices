const express = require('express');
const Jwt = require('jsonwebtoken');
const app = express()
const port = 7000
const fs = require('fs')

var secrete = fs.readFileSync('secrete.key');


app.use(express.json())


app.get('/api', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/posts', verifytoken, (req, res) => {
    Jwt.verify(req.token, secrete, (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({ message: "post created", data });
        }

    })

})

app.post('/api/login', (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const phone = req.body.phone;

    const userdata = { user: name, phone: phone };

    console.log(userdata);
    Jwt.sign(userdata, secrete, (err, token) => {
        if (err) {
            res.json({ message: "username or pass not correct" })
        }

        res.json({ token })

    })


})


function verifytoken(req, res, next) {
    //format of token => authorization: Bearer<token>
    const bearerheader = req.headers['authorization'];
    if (typeof bearerheader !== 'undefined') {
        //split token
        const bearer = bearerheader.split(' ');
        //get token from array
        const token = bearer[1]
        //set the token
        req.token = token;
        next();
    } else {
        res.sendStatus(403);

    }


}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


