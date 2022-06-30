import React from "react";
import LinkFrom from "../components/LinkFrom";
import { database } from "../pages/firebase";
import { collection, addDoc } from "firebase/firestore";

const Links = () => {
  const addOrEdit = async (linkObject) => {
    /* await database.collection('links').doc().set(linkObject)
     console.log('nueva tarea agregada'); */
    try {
      const docRef = await addDoc(collection(database, "links"), {linkObject});
      console.log("nueva Tarea agregada con el ID ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <h1 align='center'>CRUD Links</h1>
      <LinkFrom addOrEdit={addOrEdit} />
      
    </div>
  );
};

export default Links;
