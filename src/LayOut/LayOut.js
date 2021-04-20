/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import firebaseApp, { db } from "../firebase";
import BeforeLoginRoutes from "../Routes/BeforeLoginRoutes";
import ClientRoutes from "../Routes/ClientRoutes";
import TalentRoutes from "./../Routes/TalentRoutes";
import { useState } from "react";

export default function LayOut() {
  let [user, setUser] = useState();
  const usertype = useSelector((state) => state.signUpData.userType);

  firebaseApp.auth().onAuthStateChanged((usr) => {
    if (usr) {
      user = usr;
      setUser(user);
    }
  });
  var MainLayout = () => {
    if (user) {
      if (usertype === "talent") {
        return <TalentRoutes />;
      } else {
        return <ClientRoutes />;
      }
    } else {
      return <BeforeLoginRoutes />;
    }
  };
  return (
    <>
      {/* {user ? (
        <TalentRoutes />
      ) : (
        // <ClientRoutes />
        <BeforeLoginRoutes />
      )} */}
      <MainLayout />
    </>
  );
}
