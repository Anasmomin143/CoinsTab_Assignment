import { connetion } from "../src/connection/connection.js";
let deleteUserData = (req, res) => {
  let deleteTableData = "delete from usertable";
  connetion.query(deleteTableData, (err) => {
    if (err) throw err;
    res.send({massage:"Deleted!!", varient:"danger"});
  });
};

export default deleteUserData;
