import express from 'express';
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Hello Darshil");
});

app.listen(`${port}`,()=>{
    console.log(`Listining to port: ${port} `);
})
