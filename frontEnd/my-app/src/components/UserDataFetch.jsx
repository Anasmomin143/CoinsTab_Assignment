import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserDataFetch() {
  const NavigateToUserDetails = useNavigate();
  const [alertVarient, setAlertVarient] = useState();
  const [alertMassage, setAlertMassage] = useState();
  const [alert, setAlert] = useState(false);
  const userDetails = () => {
    axios
      .post("http://localhost:9000/userdetails")
      .then((res) => {
        const userDetails = res.data;
        console.log(userDetails, "Pah;e page me");
        if (userDetails.length > 0) {
          NavigateToUserDetails("/userdetails");
        } else {
          NavigateToUserDetails("/");
          setAlert(true);
          setAlertVarient("danger")
          setAlertMassage("User doenot exists!!")

          

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const DeleteFuction = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:9000/deletedata")
      .then((res) => {
        const deletedMassage = res.data.massage
        const alertVarienFromBacnkend = res.data.varient
        setAlertMassage(deletedMassage);
        setAlertVarient(alertVarienFromBacnkend);
        setAlert(true)
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clickFunction = async (event) => {
    event.preventDefault();
    const userDataArry = [];

    for (let i = 0; i < 50; i++) {
      await axios
        .get("https://randomuser.me/api", {
          dataType: "json",
        })
        .then(async (res) => {
          const userDetails = await res.data.results;
          userDetails.forEach((element) => {
            userDataArry.push(element);
            console.warn(userDataArry);
          });
        })
        .catch((err) => {
          throw err;
        });
      if (userDataArry.length === 50) {
        setAlertVarient("success");
        setAlertMassage("Data Fetched");
        setAlert(true);
      } else {
        setAlertVarient("warning");
        setAlertMassage("Data Fetching");
        setAlert(true);
      }
    }

    if (userDataArry.length > 0) {
      await axios
        .post("http://localhost:9000/userdata", userDataArry)
        .then((res) => {})
        .catch((err) => {
          throw err;
        });
    }
  };

  return (
    <>
      {alert ? (
        <Alert key={alertVarient} variant={alertVarient}>
          {alertMassage}
        </Alert>
      ) : null}
      <br />
      <Button variant="outline-secondary" onClick={clickFunction}>
        Fetch Users
      </Button>{" "}
      &nbsp; &nbsp; &nbsp;
      <Button variant="outline-danger" onClick={DeleteFuction}>
        Delete Users
      </Button>{" "}
      &nbsp; &nbsp; &nbsp;
      <Button variant="outline-success" onClick={userDetails}>
        User Details
      </Button>
    </>
  );
}
