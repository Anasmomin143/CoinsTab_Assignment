import { connetion } from "../src/connection/connection.js";
let userDetailsFn=(req,res)=>
{
    let sql ="select * from usertable"
    connetion.query(sql,(err,data)=>{
        if (err) throw err
        res.json(data)
    })
}

export default userDetailsFn