import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.post('/api/v1/reviews',(req,res)=>{
    const code= req.body.code;

    return res.send({
        review:'Your code is awseome!',
    });
});
app.listen(3005,()=>{
    console.log(`Server is running on port 3005`);
});