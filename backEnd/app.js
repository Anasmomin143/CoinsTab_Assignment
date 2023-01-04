import express  from "express";
const app = express();
import cors from 'cors';
import {getDataAndSave} from "./controller/callbackfunctions.js"

const port = 9000
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/userdata", getDataAndSave)

app.listen(port,()=>{
  console.log(`Server running on ${port}`)
});