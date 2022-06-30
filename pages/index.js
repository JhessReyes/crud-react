import "antd/dist/antd.css";
import React from "react";
import { app } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import Links from "../components/Links";
import LinkFrom from "../components/LinkFrom";
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
></link>;
const index = () => (
  <>
    <Links />
  </>
);


export default index;
