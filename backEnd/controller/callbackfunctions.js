const getDataAndSave = (req, res)=>{

  const userData = req.body

  userData.forEach(element => {
    const userName = element.name;
    const userEmail = element.email;
    const userPhoneNumber = element.cell;
    const userDob = element.dob;
    const comonElement = "User_Data_Fetching_Fake_Api";
    console.log({userName,userEmail,userPhoneNumber,userDob})
  });

}

export {getDataAndSave};