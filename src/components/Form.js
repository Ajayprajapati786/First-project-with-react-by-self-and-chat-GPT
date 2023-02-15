import React, { useState } from "react";
import Invalid from "./Invalid";

const DUMMY_DATA = [{ name: "Ajay", age: "20" }];

function Form() {
  const [display, setDisplay] = useState(DUMMY_DATA);
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const nameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const objData = {
    name: userName,
    age: age,
  };

  const AddToList = () => {
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setShowPopup(true);
      return;
    }

    setDisplay([...display, objData]);
    setUserName("");
    setAge("");
  };

  const closePopupHandler = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <form>
        Username:{" "}
        <input type="text" value={userName} onChange={nameHandler} /> <br />
        Age: <input type="number" value={age} onChange={ageHandler} /> <br />
        <button type="button" onClick={AddToList}>
          Add User
        </button>
      </form>
      {display.map((user, index) => (
        <div key={index}>
          Name: {user.name}, Age: {user.age}
        </div>
      ))}

      {showPopup && <Invalid onClose={closePopupHandler} />}

    </div>
  );
}

export default Form;
