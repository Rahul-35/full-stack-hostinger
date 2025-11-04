import express from 'express';
import cors from 'cors';


const app= express();

app.use(express.json());

app.use(cors({
    origin:[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:3000",
        //add production url
        "http://147.79.71.114:5174"
    ],
    credentials:true,
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authorization"],
}));


app.use('/images',express.static('images'));

//api route

app.get("/api/message",(req,res)=>{
    res.json({message:"Hello from backend server!"});
});

const PORT= 5000
app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Server is running on port ${PORT}`);
})