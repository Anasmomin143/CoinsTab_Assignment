import { connetion } from "../src/connection/connection.js";
const getDataAndSave = (req, res) => {
  // connetion.query('create database userdata')
  const userData = req.body;
  let count = 0;
  userData.forEach((element) => {
    count = count + 1;

    const userFirstName = element.name.first;
    const userLastName = element.name.last;
    const userEmail = element.email;
    const userPhoneNumber = element.cell;
    const userDob = element.dob.date;
    const comonElement = "User_Data_Fetching_Fake_Api";



    let insert = "INSERT INTO usertable(first_Name,last_Name,user_Email,user_Number,user_Dob,user_CommonElement,user_Count) VALUES ?";

    let values = [[
      userFirstName,
      userLastName,
      userEmail,
      userPhoneNumber,
      userDob,
      comonElement,
      count,
    ]];

    connetion.query(insert, [values], (err) => {
      if (err) throw err;
      console.log("data inserted");
    });


  });
};

export { getDataAndSave };
