/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import firebaseApp from "../firebase";
import BeforeLoginRoutes from "../Routes/BeforeLoginRoutes";
import ClientRoutes from "../Routes/ClientRoutes";
import TalentRoutes from "./../Routes/TalentRoutes";
import { useState } from 'react';

export default function LayOut() {

  let [user, setUser] = useState();
  firebaseApp.auth().onAuthStateChanged((usr) => {
    console.log(usr);
    if (usr) {
      user = usr;
      setUser(user);
    }
  })
  return (

    <>
      {console.log(user)}
      {

        user ?
          <TalentRoutes />
          // <ClientRoutes />
          :
          <BeforeLoginRoutes />
      }
    </>
  );
}
