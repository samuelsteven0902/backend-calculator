import express, { Router } from "express";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json())
app.use(Router)



app.listen(5000, ()=>{
    console.log(`server berjalan di port : 5000`);
})