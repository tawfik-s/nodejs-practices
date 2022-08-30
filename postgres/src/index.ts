import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'

const app:express.Application=express();

app.use(bodyParser);

app.get('/',(req:Request,res:Response)=>{
    res.send('hello world');
});

app.listen(3000,()=>{
    console.log('app listening on port 3000');
})